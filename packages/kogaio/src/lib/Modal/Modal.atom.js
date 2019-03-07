import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

import Button from '../Button'
import Card from '../Card'
import theme from '../assets/theme'
import { themeGet } from 'styled-system'

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
      cancelBtnLabel,
      confirmBtnLabel,
      confirmActionFn,
      confirmButtonType,
      confirmBtnDataTest,
      Header,
      hideModal,
      Footer,
      ...rest
    } = this.props
    return ReactDOM.createPortal(
      <Body className={className}>
        <Card
          bg='white'
          boxShadow='5px 0 10px 0 rgba(0, 0, 0, 0.15);'
          display='flex'
          flexDirection='column'
          width={{ xs: 1 / 2, md: 1 / 3 }}
          minWidth='25em'
          maxWidth='35em'
          minHeight='18em'
          maxHeight='25em'
          id='modal-body'
          position='relative'
          {...rest}
        >
          {Header ? (
            <Row borderBlockEnd='1px solid #e5e5e5'>
              <Header />
            </Row>
          ) : null}
          <Content>
            <ChildWrapper>
              {children}
            </ChildWrapper>
            <ButtonsWrapper>
              <Button
                mr={3}
                onClick={confirmActionFn}
                title={confirmBtnLabel || 'Confirm'}
                variant={confirmButtonType}
                width='10em'
              />
              <Button
                onClick={hideModal}
                title={cancelBtnLabel || 'Cancel'}
                variant='destructive'
                width='10em'
              />
            </ButtonsWrapper>
          </Content>
          {Footer ? (
            <Row p='18px 12px 12px' borderBlockStart='1px solid #e5e5e5'>
              <Footer />
            </Row>
          ) : null}
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
  background: rgba(36, 49, 67, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-family: Roboto, sans-serif, -apple-system, BlinkMacSystemFont;
`
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${themeGet('space.4')}px;
`
const ChildWrapper = styled.div`
  color: ${themeGet('colors.dark-gunmetal')};
  font-size: 1em;
  padding-inline-start: ${themeGet('space.3')};
  padding-inline-end: ${themeGet('space.3')};
  text-align: center;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node
  ]),
  className: PropTypes.string,
  Header: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  Footer: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  headerLabel: PropTypes.string,
  cancelBtnLabel: PropTypes.string,
  confirmBtnLabel: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  confirmActionFn: PropTypes.func.isRequired,
  confirmButtonType: PropTypes.string,
  confirmBtnDataTest: PropTypes.string,
  theme: PropTypes.object.isRequired
}

Modal.defaultProps = {
  actionBtnType: 'info',
  confirmBtnLabel: 'Confirm',
  confirmButtonType: 'outlined',
  theme
}

export default Modal
