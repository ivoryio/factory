import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import { Flex } from '../Responsive'
import { themed, themeGet } from '../utils'
import { withPortal } from './withPortal'

const Modal = ({ withPortal, ...props }) =>
  withPortal ? <ModalWithPortal {...props} /> : <ModalBody {...props} />

const ModalWithPortal = withPortal(props => <ModalBody {...props} />)

const ModalBody = ({
  backdropColor,
  children,
  colors,
  id,
  onBackdropClick: handleBackdropClick,
  overlayStyle,
  position,
  ref,
  visible,
  ...rest
}) => {
  const modalRef = useRef()
  
  useEffect(() => {
    window.addEventListener('click', _handleBackdropClick)
    return () => window.removeEventListener('click', _handleBackdropClick)

    function _handleBackdropClick (ev) {
      const elRef = ref || modalRef
      const clickOutside = ev.target === elRef.current
      if (visible && clickOutside)
        return handleBackdropClick
          ? handleBackdropClick()
          : console.warn('* Modal expects a handleBackdropClick function')
    }
  }, [handleBackdropClick, ref, visible])

  return (
    <Overlay
      backdropColor={backdropColor}
      colors={colors}
      id={id}
      position={position}
      visible={visible}
      {...overlayStyle}>
      <Flex
        alignItems="center"
        id="modal-body"
        justifyContent="center"
        height="100%"
        ref={ref || modalRef}
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
  background-color: ${({ backdropColor }) => themeGet(`colors.${backdropColor}`, backdropColor)};
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  height: 100%;
  left: 0;
  position: ${({ position }) => (position ? position : 'fixed')};
  top: 0;
  width: 100%;
  z-index: 99;

  ${overlayAnimation}
  ${themed('Modal.overlay')}
`

Modal.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.node,
  colors: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBackdropClick: PropTypes.func,
  overlayStyle: PropTypes.object,
  position: PropTypes.string,
  ref: PropTypes.object,
  withPortal: PropTypes.bool,
  visible: PropTypes.bool
}

ModalBody.propTypes = {
  backdropColor: PropTypes.string,
  bg: PropTypes.string,
  children: PropTypes.node,
  colors: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBackdropClick: PropTypes.func,
  overlayStyle: PropTypes.object,
  position: PropTypes.string,
  ref: PropTypes.object,
  visible: PropTypes.bool
}

Modal.defaultProps = {
  withPortal: false
}

ModalBody.defaultProps = {
  backdropColor: 'modal-backdrop',
  visible: false
}

Modal.displayName = 'Modal'
/** @component */
export default Modal
