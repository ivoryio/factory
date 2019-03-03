import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = ({
  autoComplete,
  border,
  borderRadius,
  dataTest,
  disabled,
  error,
  height,
  marginBlockStart,
  onChange,
  padding,
  placeholder,
  required,
  type,
  value,
  width
}) => (
  <StyledInput
    autoComplete={autoComplete}
    border={border}
    borderRadius={borderRadius}
    data-testid={dataTest}
    disabled={disabled}
    error={error}
    height={height}
    marginBlockStart={marginBlockStart}
    onChange={onChange}
    padding={padding}
    placeholder={placeholder}
    required={required}
    type={type}
    value={value}
    width={width}
  />
)

const StyledInput = styled.input`
  border: ${props => props.border}px solid ${props => (props.error ? 'red' : '#c3c3c3')};
  border-radius: ${props => props.borderRadius}px;
  height: ${props => props.height}px;
  margin-block-start: ${props => props.marginBlockStart}px;
  padding: ${props => props.padding}px;
  width: ${props => props.width}px;
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
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBlockStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.object,
  ]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Input.defaultProps = {
  disabled: false,
  height: 20,
  placeholder: 'type...',
  required: false,
  type: 'text',
  width: 150
}

export default Input
