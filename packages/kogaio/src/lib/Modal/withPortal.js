import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { randomiser } from '../utils'

export const withPortal = Component => ({ id, visible, ...props }) => {
  const [newModal] = useState(document.createElement('div'))

  useEffect(() => {
    const existingRoot = document.getElementById('modal-root')

    if (document.body.contains(existingRoot))
      existingRoot
        .appendChild(newModal)
        .setAttribute('id', `modal-${id || randomiser}`)
    else {
      const rootEl = document.createElement('div')
      document.body.appendChild(rootEl).setAttribute('id', 'modal-root')
      document
        .getElementById('modal-root')
        .appendChild(newModal)
        .setAttribute('id', `modal=${id || randomiser}`)
    }

    return () => {
      const rootEl = document.getElementById('modal-root')
      if (rootEl.childNodes.length > 1) {
        const targetChild = document.getElementById(`modal-${id || randomiser}`)
        if (targetChild && targetChild.nodeType)
          return document.getElementById('modal-root').removeChild(targetChild)
      }
      return document.body.removeChild(rootEl)
    }
  }, [id, newModal])

  return createPortal(
    <Component id={id} visible={visible} {...props} />,
    newModal
  )
}
