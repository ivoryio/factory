import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { position, right, top } from 'styled-system'
const Touchable = ({ children, onClick, ...rest }) => (
  <Wrapper onClick={onClick} {...rest}>
    {children}
  </Wrapper>
)

const Wrapper = styled.button`
  background: transparent;
  border: none;
  font-size: inherit;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
  :hover, :active {
    opacity: 0.75;
    color: ${props => props.colorActive};
  }
  ${position}
  ${top}
  ${right}

`

Touchable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  onClick: PropTypes.func.isRequired
}

export default Touchable
