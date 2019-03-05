import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import Button from '../Button'
import Icon from '../Icon'

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
      headerLabel,
      CustomHeader,
      hideModal,
      CustomFooter,
      confirmBtnLabel,
      confirmActionFn,
      confirmButtonType
    } = this.props
    return ReactDOM.createPortal(
      <Body className={className}>
        <Card id='modal-body'>
          {!CustomHeader ? (
            <Row borderBlockEnd='1px solid #e5e5e5'>
              <Header>{headerLabel}</Header>
              <Icon
                alt='close-modal'
                name='close'
                onClick={hideModal}
                fontSize={20}
              />
            </Row>
          ) : (
            <CustomHeader />
          )}
          <Content>{children}</Content>
          {!CustomFooter ? (
            <Row p='18px 12px 12px' borderBlockStart='1px solid #e5e5e5'>
              <Footer>
                <Button title='Cancel' variant='outlined' onClick={hideModal} />
                <Button
                  title={confirmBtnLabel}
                  onClick={confirmActionFn}
                  ml='5px'
                  variant={confirmButtonType}
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
  font-family: Roboto, sans-serif, -apple-system, BlinkMacSystemFont;
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
  font-size: 1.8rem;
  font-weight: 500;
  color: #484848;
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

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node
  ]),
  className: PropTypes.string,
  CustomHeader: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  CustomFooter: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  dataTest: PropTypes.string,
  headerLabel: PropTypes.string,
  confirmBtnLabel: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  confirmActionFn: PropTypes.func.isRequired,
  confirmButtonType: PropTypes.string,
  confirmBtnDataTest: PropTypes.string
}

Modal.defaultProps = {
  actionBtnType: 'info',
  headerLabel: 'Modal title',
  confirmBtnLabel: 'Confirm',
  confirmButtonType: 'outlined'
}

export default Modal
