import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import Button from '../Button'
import icons from 'assets/icons'

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

  _pickConfirmButtonLabel = () => {
    const { actionBtnType } = this.props
    switch (actionBtnType) {
      case 'destructive':
        return '#e74c3c'
      case 'info':
        return '#3498db'
      default:
        return '#2ecc71'
    }
  }

  render () {
    const {
      className,
      children,
      dataTest,
      headerLabel,
      CustomHeader,
      hideModal,
      CustomFooter,
      confirmBtnLabel,
      confirmActionFn,
      confirmBtnDataTest
    } = this.props
    return ReactDOM.createPortal(
      <Body className={className} data-testid={dataTest}>
        <Card id='modal-body'>
          {!CustomHeader ? (
            <Row borderBlockEnd='1px solid #e5e5e5'>
              <Header>{headerLabel}</Header>
              <CloseIcon src={icons.close} alt='Close' onClick={hideModal} />
            </Row>
          ) : (
            <CustomHeader />
          )}
          <Content>{children}</Content>
          {!CustomFooter ? (
            <Row p='18px 12px 12px' borderBlockStart='1px solid #e5e5e5'>
              <Footer>
                <CancelButton title='Cancel' onClick={hideModal} />
                <ConfirmButton
                  data-testid={confirmBtnDataTest}
                  title={confirmBtnLabel}
                  onClick={confirmActionFn}
                  confirmButtonColour={this._pickConfirmButtonLabel()}
                />
              </Footer>
            </Row>
          ) : (
            <CustomFooter />
          )}
        </Card>
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
  background: rgba(10, 10, 10, 0.75);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  width: ${window.innerWidth / 3}px;
  min-width: 400px;
  max-width: 550px;
  min-height: ${window.innerHeight / 2}px;
  max-height: 400px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block-start: ${props => props.pBlockStart || '15px'};
  padding-inline-end: ${props => props.pInlineEnd || '10px'};
  padding-block-end: ${props => props.pBlockEnd || '15px'};
  padding-inline-start: ${props => props.pInlineStart || '10px'};
  padding: ${props => props.p};
  border-block-start ${props => props.borderBlockStart};
  border-block-end: ${props => props.borderBlockEnd};
`

const Header = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #484848;
`

const CloseIcon = styled.img`
  width: 10px;
  height: 10px;
  cursor: pointer;
  :active {
    transform: scale(0.965);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 6px 12px;
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-block-end: 10px;
`

const ModalButton = styled(Button)`
  height: 40px;
  background-color: transparent;
  border-radius: 5px;
  min-width: 100px;
  max-width: 200px;
  font-size: 15px;
  color: #484848;
`

const CancelButton = styled(ModalButton)``

const ConfirmButton = styled(ModalButton)`
  margin-inline-start: 5px;
  background-color: ${props => props.confirmButtonColour};
  color: #fff;
`

Modal.propTypes = {
  actionBtnType: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node
  ]),
  className: PropTypes.string,
  CustomHeader: PropTypes.element,
  CustomFooter: PropTypes.element,
  dataTest: PropTypes.string,
  headerLabel: PropTypes.string,
  confirmBtnLabel: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  confirmActionFn: PropTypes.func.isRequired,
  confirmBtnDataTest: PropTypes.string
}

Modal.defaultProps = {
  actionBtnType: 'info',
  headerLabel: 'Modal title',
  confirmBtnLabel: 'Confirm'
}

export default Modal
