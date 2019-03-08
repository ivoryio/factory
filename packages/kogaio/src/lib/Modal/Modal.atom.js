import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

import Button from '../Button'
import Card from '../Card'
import {
  color,
  display,
  flexDirection,
  fontFamily,
  fontSize,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  position,
  themeGet,
  width
} from 'styled-system'

class Modal extends PureComponent {
  constructor (props) {
    super(props)
    this.modalRoot = document.createElement('div')
    this.modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(this.modalRoot)
    this.modalEl = document.createElement('div')
  }
  componentDidMount () {
    this.modalRoot.appendChild(this.modalEl)
    document.addEventListener('click', this._handleBackDropClick)
  }

  componentWillUnmount () {
    this.modalRoot.removeChild(this.modalEl)
    document.body.removeChild(this.modalRoot)
    document.removeEventListener('click', this._handleBackDropClick)
  }

  _handleBackDropClick = ev => {
    const { hideModal } = this.props
    const bodyEl = document.getElementById('modal-body')
    const isClickInside = bodyEl.contains(ev.target)
    if (!isClickInside) {
      hideModal()
    }
  }

  render () {
    const {
      className,
      children,
      cancelButtonLabel,
      cancelButtonType,
      confirmButtonLabel,
      confirmActionFn,
      confirmButtonType,
      Header,
      hideModal,
      Footer,
      ...rest
    } = this.props
    return ReactDOM.createPortal(
      <Body className={className}>
        <StyledCard
          colors='card-white'
          id='modal-body'

          {...rest}
        >
          {Header ? (
            <Row>
              <Header />
            </Row>
          ) : null}
          <Content>
            <ChildWrapper>
              {children}
            </ChildWrapper>
            <ButtonsWrapper>
              <ModalButton
                fontSize='1em'
                onClick={confirmActionFn}
                title={confirmButtonLabel}
                variant={confirmButtonType}
              />
              <ModalButton
                fontSize='1em'
                onClick={hideModal}
                title={cancelButtonLabel}
                variant={cancelButtonType}
              />
            </ButtonsWrapper>
          </Content>
          {Footer ? (
            <Row>
              <Footer />
            </Row>
          ) : null}
        </StyledCard>
      </Body>,
      this.modalEl
    )
  }
}

const Body = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${themeGet('colors.modal-background')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline-start: ${themeGet('space.3')}px;
  padding-inline-end: ${themeGet('space.3')}px;
  margin-block-start: ${themeGet('space.4')}px;
`
const ChildWrapper = styled.div`
  font-size: 1em;
  padding-inline-start: ${themeGet('space.3')}px;
  padding-inline-end: ${themeGet('space.3')}px;
  text-align: center;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`
const ModalButton = styled(Button)`
  width: calc(50% - 8px);
`
const Row = styled.div`
  padding-inline-start: ${themeGet('space.2')}px;
  padding-inline-end: ${themeGet('space.2')}px;
  border-block-end: ${props => props.borderBlockEnd};
  border-block-start: ${props => props.borderBlockStart};
  &:first-of-type {
    border-block-end: ${themeGet('borders.1')} ${themeGet('colors.light-gray')};
  }
  &:nth-of-type(2) {
    border-block-start: ${themeGet('borders.1')} ${themeGet('colors.light-gray')};
  }
`
const StyledCard = styled(Card)`
  ${color}
  ${display}
  ${flexDirection}
  ${fontFamily}
  ${fontSize}
  ${minWidth}
  ${maxWidth}
  ${minHeight}
  ${maxHeight}
  ${position}
  ${width}
`

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node
  ]),
  cancelButtonType: PropTypes.oneOfType(['primary, outline, validation, destructive']),
  cancelButtonLabel: PropTypes.string,
  confirmActionFn: PropTypes.func.isRequired,
  confirmButtonType: PropTypes.oneOfType(['primary, outline, validation, destructive']),
  confirmButtonLabel: PropTypes.string,
  className: PropTypes.string,
  Header: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  Footer: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  headerLabel: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
}

Modal.defaultProps = {
  cancelButtonLabel: 'Cancel',
  cancelButtonType: 'destructive',
  confirmButtonLabel: 'Confirm',
  confirmButtonType: 'validation',
  fontFamily: 'Roboto'
}

export default Modal
