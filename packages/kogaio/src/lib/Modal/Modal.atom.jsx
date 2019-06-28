import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import ReactDOM from 'react-dom'

import { Flex } from '../Responsive'
import { randomiser } from '../utils'
const Modal = ({
  children,
  colors,
  id,
  onBackdropClick: handleBackdropClick,
  visible,
  ...rest
}) => {
  const [modalRoot] = useState(document.createElement('div'))

  useEffect(() => {
    const existingRoot = document.getElementById('modal-root')
    if (document.body.contains(existingRoot)) {
      existingRoot
        .appendChild(modalRoot)
        .setAttribute('id', `modal-${randomiser}`)
    } else {
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

  useEffect(() => {
    document.addEventListener('click', _handleBackdropClick)
    return () => document.removeEventListener('click', _handleBackdropClick)

    function _handleBackdropClick (ev) {
      if (!handleBackdropClick) {
        return ev.preventDefault()
      }
      const bodyEl = document.getElementById('modal-body')
      const clickOutside = !bodyEl.contains(ev.target)
      if (visible && clickOutside) {
        handleBackdropClick()
      }
    }
  }, [handleBackdropClick, visible])

  return ReactDOM.createPortal(
    <Overlay id={id} colors={colors} visible={visible}>
      <Flex
        alignItems="center"
        id="modal-body"
        justifyContent="center"
        height="100%"
        width={1}
        {...rest}>
        {children}
      </Flex>
    </Overlay>,
    modalRoot
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const overlayAnimation = ({ visible }) => css`
  animation: ${visible ? fadeIn : fadeOut} 0.3s
    ${visible ? 'ease-in' : 'ease-out'};
`
const Overlay = styled(Flex)`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  ${overlayAnimation}
`

Modal.propTypes = {
  children: PropTypes.node,
  colors: PropTypes.string,
  effect: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBackdropClick: PropTypes.func,
  visible: PropTypes.bool
}

Modal.defaultProps = {
  colors: 'modal',
  effect: 'fadeInDown',
  visible: false
}
Modal.displayName = 'Modal'

/** @component */
export default Modal
