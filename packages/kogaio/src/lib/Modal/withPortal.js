import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { randomiser } from '../utils'

export const withPortal = Component => ({ id, visible, ...props }) => {
  const [modalRoot] = useState(document.createElement('div'))

  useEffect(() => {
    const existingRoot = document.getElementById('modal-root')

    if (document.body.contains(existingRoot))
      existingRoot
        .appendChild(modalRoot)
        .setAttribute('id', `modal-${randomiser}`)
    else {
      const rootEl = document.createElement('div')
      document.body.appendChild(rootEl).setAttribute('id', 'modal-root')
      document
        .getElementById('modal-root')
        .appendChild(modalRoot)
        .setAttribute('id', `modal-${id || randomiser}`)
    }

    return () => {
      const rootEl = document.getElementById('modal-root')
      if (rootEl.childNodes.length > 1) {
        const targetChild = document.getElementById(`modal-${id || randomiser}`)
        return document.getElementById('modal-root').removeChild(targetChild)
      }
      document.body.removeChild(rootEl)
    }
  }, [id, modalRoot])

  return createPortal(
    <Component id={id} visible={visible} {...props} />,
    modalRoot
  )
}
