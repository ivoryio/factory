import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import { Flex } from '../Responsive'
import { withPortal } from './withPortal'

const Modal = ({ withPortal, ...props }) =>
  withPortal ? <ModalWithPortal {...props} /> : <ModalBody {...props} />

const ModalWithPortal = withPortal(props => <ModalBody {...props} />)

const ModalBody = ({
  children,
  colors,
  id,
  onBackdropClick: handleBackdropClick,
  position,
  visible,
  ...rest
}) => {
  useEffect(() => {
    window.addEventListener('click', _handleBackdropClick)
    return () => window.removeEventListener('click', _handleBackdropClick)

    function _handleBackdropClick (ev) {
      const bodyEl = document.getElementById('modal-body')
      const clickOutside = ev.target === bodyEl
      if (visible && clickOutside)
        return handleBackdropClick
          ? handleBackdropClick()
          : console.warn('* Modal expects a handleBackdropClick function')
    }
  }, [handleBackdropClick, visible])

  return (
    <Overlay id={id} colors={colors} position={position} visible={visible}>
      <Flex
        alignItems="center"
        id="modal-body"
        justifyContent="center"
        height="100%"
        width={1}
        {...rest}>
        {children}
      </Flex>
    </Overlay>
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
  position: ${({ position }) => (position ? position : 'fixed')};
  top: 0;
  width: 100%;
  z-index: 99;

  ${overlayAnimation}
`

ModalBody.propTypes = {
  children: PropTypes.node,
  colors: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBackdropClick: PropTypes.func,
  position: PropTypes.string,
  visible: PropTypes.bool
}

ModalBody.defaultProps = {
  colors: 'modal',
  visible: false
}

Modal.propTypes = {
  children: PropTypes.node,
  colors: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBackdropClick: PropTypes.func,
  position: PropTypes.string,
  withPortal: PropTypes.bool,
  visible: PropTypes.bool
}

Modal.defaultProps = {
  withPortal: false
}

Modal.displayName = 'Modal'
/** @component */
export default Modal
