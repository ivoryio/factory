import React, { useState, createRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
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
import { themed, themeGet } from '../utils'

import { Sublabel } from './Sublabel'
import Icon from '../Icon'
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
  icLeft,
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
    <InputContainer flexDirection="column" hasLabel={label} width={1} {...rest}>
      {label ? (
        <InputLabel
          as="label"
          className="input-label"
          color="gunmetal"
          htmlFor={id}
          variant="inputLabel"
          width="fit-content">
          {label} {required && '*'}
        </InputLabel>
      ) : null}
      <Row>
        <InputComponent
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className="input"
          disabled={disabled}
          error={error}
          hasLabel={label}
          hasIcLeft={icLeft}
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
        {icLeft ? (
          <Icon
            className="input-icleft"
            fontSize={3}
            left={2}
            name={icLeft}
            pointerEvents="none"
            position="absolute"
            tabIndex="-1"
          />
        ) : null}
        {type === 'password' && value ? (
          <PasswordToggler
            error={error}
            inputType={inputType}
            onDragAttempt={resetInputType}
            toggle={togglePassword}
            tabIndex="-1"
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
    </InputContainer>
  )
}

const InputContainer = styled(Flex)`
  ${themed('Input.container')}
`

const InputLabel = styled(Typography)`
  ${themed('Input.label')}
`

const Row = styled(Flex)`
  align-items: center;
  position: relative;
  width: 100%;
  ${themed('Input.wrapper')}
`

const addSpaceAroundInputArea = css`
  text-indent: ${({ hasIcLeft }) =>
    hasIcLeft ? themeGet('space.8', 32) : themeGet('space.2', 8)}px;
  padding-right: ${themeGet('space.8', 32)}px;
`
const InputComponent = styled.input`
  ${addSpaceAroundInputArea}
  border-radius: ${themeGet('radii.1', 1)}px;
  box-sizing: border-box;
  color: ${themeGet('colors.gunmetal', '#243143')};
  font-family: ${themeGet('fonts.primary')};
  font-size: ${themeGet('fontSizes.1', '0.875rem')};
  outline: none;
  width: 100%;
  
  ::placeholder {
      color: ${themeGet('colors.pastel-blue')};
    }

    ~.input-icleft {
      color: ${themeGet('colors.pastel-blue')};
    }

  :focus {
    ~ button > i, ~ .input-icleft {
      color: ${themeGet('colors.gunmetal')};
    }
  }
  
  ${themed('Input')}
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
  icLeft: PropTypes.string,
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
