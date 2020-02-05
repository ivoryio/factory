import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { randomiser } from '../utils'

export const withPortal = Component => ({
  container,
  id,
  visible,
  ...props
}) => {
  const [newModal] = useState(container || document.createElement('div'))

  useEffect(() => {
    const existingRoot = document.getElementById('modal-root')

    if (document.body.contains(existingRoot))
      existingRoot
        .appendChild(newModal)
        .setAttribute('id', `modal-${id || randomiser}`)
    else {
      const newRoot = document.createElement('div')
      document.body.appendChild(newRoot).setAttribute('id', 'modal-root')
      document
        .getElementById('modal-root')
        .appendChild(newModal)
        .setAttribute('id', `modal-${id || randomiser}`)
    }

    return () => {
      const rootEl = document.getElementById('modal-root')
      if (rootEl) {
        if (rootEl.childNodes.length > 0) {
          const targetChild = document.getElementById(
            `modal-${id || randomiser}`
          )
          if (targetChild && targetChild.nodeType)
            rootEl.removeChild(targetChild)
          if (!rootEl.childNodes.length) rootEl.remove()
        }
      }
    }
  }, [id, newModal])

  return createPortal(
    <Component id={id} visible={visible} {...props} />,
    newModal
  )
}
