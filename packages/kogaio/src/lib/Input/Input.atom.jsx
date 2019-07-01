import React, { useState, createRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  typography,
  variant
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { themeGet } from '../utils'

import { Sublabel } from './Sublabel'
import Typography from '../Typography'
import { Flex, Space } from '../Responsive'
import { PasswordToggler } from './PasswordToggler'

const inputStyle = variant({
  scale: 'inputs',
  prop: 'variant'
})

const Input = ({
  autoComplete,
  autoFocus,
  className,
  disabled,
  error,
  id,
  label,
  name,
  noBottomSpace,
  onChange,
  passwordView,
  placeholder,
  placeholderTextColor,
  ref,
  required,
  type,
  valid,
  value,
  variant,
  ...rest
}) => {
  const inputRef = ref || createRef()
  const [inputType, setInputType] = useState(type)

  const inputVariant = (() => {
    if (disabled) return 'disabled'
    else if (error) return 'error'
    else if (valid) return 'valid'
    return variant
  })()

  const togglePassword = ev => {
    ev.preventDefault()
    if (document.activeElement !== inputRef.current) inputRef.current.focus()
    if (inputType.includes('password')) return setInputType('text')
    return resetInputType()
  }
  const resetInputType = () => setInputType(type)

  return (
    <Flex flexDirection="column" hasLabel={label} width={1} {...rest}>
      {label ? (
        <InputLabel
          as="label"
          className="input-label"
          color="gunmetal"
          htmlFor={id}
          variant="inputLabel">
          {label} {required && '*'}
        </InputLabel>
      ) : null}
      <Row>
        <InputComponent
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={`input ${className}`}
          disabled={disabled}
          error={error}
          hasLabel={label}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          ref={inputRef}
          required={required}
          type={inputType}
          value={value}
          variant={inputVariant}
          {...rest}
        />
        {type === 'password' && value ? (
          <PasswordToggler
            error={error}
            inputType={inputType}
            onDragAttempt={resetInputType}
            toggle={togglePassword}
            viewOption={passwordView}
          />
        ) : null}
      </Row>
      {[error, valid].some(item => typeof item === 'string') ? (
        <Space my={1}>
          <Sublabel
            className="input-sublabel"
            content={error || valid}
            type={error ? 'error' : 'valid'}
          />
        </Space>
      ) : (
        <Dummy hide={noBottomSpace} />
      )}
    </Flex>
  )
}

const Row = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
`

const InputLabel = styled(Typography)``

const addHorizontalPadding = () => props => `
  padding-left: ${themeGet('space.2', 8)(props)}px;
  padding-right: ${themeGet('space.8', 32)(props)}px;
`
const InputComponent = styled.input`
  ${addHorizontalPadding}
  border-radius: ${themeGet('radii.1', 1)}px;
  box-sizing: border-box;
  color: ${themeGet('colors.gunmetal', '#243143')};
  font-family: ${themeGet('fonts.primary')};
  font-size: ${themeGet('fontSizes.1', '0.875rem')};
  outline: none;
  width: 100%;
  
  &:focus {
    ~ button > i {
      color: ${themeGet('colors.gunmetal')};
    }
  }

  &::placeholder {
      color: ${themeGet('colors.pastel-blue')};
    }
  }
  
  ${compose(
    border,
    color,
    flexbox,
    inputStyle,
    layout,
    position,
    shadow,
    typography
  )}
`

const Dummy = styled.div`
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  height: 20px;
  opacity: 0;
  visibility: hidden;
`

Input.propTypes = {
  ...propTypes.inputStyle,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.typography,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  /** dummy space added for consistent spacing with validated inputs.
   *
   * remove space by setting this to true */
  noBottomSpace: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  passwordView: PropTypes.oneOf(['peek', 'toggle']),
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  variant: PropTypes.string
}

Input.defaultProps = {
  autoFocus: false,
  minHeight: 36,
  noBottomSpace: false,
  passwordView: 'peek',
  placeholder: 'Search',
  type: 'text',
  value: '',
  variant: 'default'
}

Input.displayName = 'Input'
/** @component */
export default Input
