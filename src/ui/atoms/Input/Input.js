import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  borders,
  borderRadius,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  position,
  size,
  space
} from 'styled-system'

import theme from 'assets/theme'

const Input = ({
  autoComplete,
  dataTest,
  disabled,
  error,
  blockSize,
  inlineSize,
  onChange,
  placeholder,
  required,
  type,
  value,
  theme,
  ...rest
}) => (
  <StyledInput
    autoComplete={autoComplete}
    borderRadius={borderRadius}
    data-testid={dataTest}
    disabled={disabled}
    error={error}
    blockSize={blockSize}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    type={type}
    value={value}
    inlineSize={inlineSize}
    theme={theme}
    {...rest}
  />
)

const StyledInput = styled.input`
  ${borderRadius};
  ${borders};
  ${minHeight};
  ${maxHeight};
  ${minWidth};
  ${maxWidth};
  ${position};
  ${size};
  ${space};
  block-size: ${props => props.blockSize};
  inline-size: ${props => props.inlineSize};
  :focus {
    outline-style: none;
    outline-color: transparent;
  }
  ::placeholder {
    color: ${props => (props.error ? 'red' : '#484848')};
  }
`

Input.propTypes = {
  autoComplete: PropTypes.string,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.object,
  ]),
  ...minHeight.propTypes,
  ...maxHeight.propTypes,
  ...minWidth.propTypes,
  ...maxWidth.propTypes,
  ...space.propTypes,
  ...size.propTypes
}

Input.defaultProps = {
  disabled: false,
  placeholder: 'type...',
  required: false,
  type: 'text',
  theme
}

export default Input
