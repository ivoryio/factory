import React, { forwardRef, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import { Flex } from '../Responsive'

import { withPortal } from './withPortal'
import { themed, themeGet } from '../utils'

const Modal = ({ visible, withPortal, ...props }) => {
  if (!visible) return null
  else
    return withPortal ? (
      <ModalWithPortal visible={visible} {...props} />
    ) : (
      <ModalBody visible={visible} {...props} />
    )
}

const ModalWithPortal = withPortal(props => <ModalBody {...props} />)

const ModalBody = forwardRef(
  (
    {
      animated,
      backdropColor,
      children,
      colors,
      id,
      onBackdropClick: handleBackdropClick,
      overlayStyle,
      position,
      visible,
      zIndex,
      ...rest
    },
    ref
  ) => {
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
        animated={animated}
        backdropColor={backdropColor}
        colors={colors}
        height='100%'
        left={0}
        id={id}
        position={position}
        top={0}
        visible={visible}
        width={1}
        zIndex={zIndex}
        {...overlayStyle}>
        <Flex
          alignItems='center'
          className='modal-body'
          justifyContent='center'
          height='100%'
          ref={ref || modalRef}
          width={1}
          {...rest}>
          {children}
        </Flex>
      </Overlay>
    )
  }
)

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const overlayAnimation = ({ animated }) =>
  animated &&
  css`
    animation: ${fadeIn} 330ms ease-in-out;
  `

const Overlay = styled(Flex)`
  background-color: ${({ backdropColor }) =>
    themeGet(`colors.${backdropColor}`, backdropColor)};
  display: flex;
  position: ${({ position }) => position};

  ${overlayAnimation}
  ${themed('Modal.overlay')}
`

Modal.propTypes = {
  animated: PropTypes.bool,
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
  animated: PropTypes.bool,
  backdropColor: PropTypes.string,
  bg: PropTypes.string,
  children: PropTypes.node,
  colors: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBackdropClick: PropTypes.func,
  overlayStyle: PropTypes.object,
  position: PropTypes.string,
  ref: PropTypes.object,
  visible: PropTypes.bool,
  zIndex: PropTypes.number
}

Modal.defaultProps = {
  withPortal: false
}

ModalBody.defaultProps = {
  animated: false,
  backdropColor: 'modal-backdrop',
  position: 'fixed',
  visible: false,
  zIndex: 2019
}

Modal.displayName = 'Modal'
ModalBody.displayName = 'ModalBody'
/** @component */
export default Modal
