import React, { useState, useRef } from 'react'
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
  containerStyle,
  disabled,
  error,
  icLeft,
  icRight,
  id,
  label,
  name,
  noBottomSpace,
  onChange,
  passwordView,
  placeholder,
  placeholderTextColor,
  readOnly,
  ref,
  required,
  type,
  valid,
  value,
  variant,
  ...rest
}) => {
  const inputRef = useRef()
  const [inputType, setInputType] = useState(type)

  const inputVariant = (() => {
    if (disabled) return 'disabled'
    else if (error) return 'error'
    else if (valid) return 'valid'
    return variant
  })()

  const togglePassword = ev => {
    ev.preventDefault()
    const elRef = ref || inputRef
    if (document.activeElement !== elRef.current) elRef.current.focus()
    if (inputType.includes('password')) return setInputType('text')
    return resetInputType()
  }
  const resetInputType = () => setInputType(type)

  return (
    <InputContainer
      {...containerStyle}
      flexDirection='column'
      hasLabel={label}
      width={1}
      {...rest}>
      {label ? (
        <InputLabel
          as='label'
          className='input-label'
          color='gunmetal'
          display='block'
          htmlFor={id}
          variant='inputLabel'
          width='fit-content'>
          {label} {required ? '*' : ''}
        </InputLabel>
      ) : null}
      <Row>
        <InputComponent
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className='input'
          disabled={readOnly || disabled}
          error={error}
          hasLabel={label}
          hasIcLeft={icLeft}
          hasIcRight={icRight}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={readOnly ? '' : placeholder}
          placeholderTextColor={placeholderTextColor}
          readOnly={readOnly}
          ref={ref || inputRef}
          required={required}
          type={inputType}
          value={value}
          variant={inputVariant}
          {...rest}
        />
        {icLeft ? (
          <Icon
            className='input-custom-icon'
            color='pastel-blue'
            fontSize={3}
            left={2}
            name={icLeft}
            pointerEvents='none'
            position='absolute'
            tabIndex='-1'
          />
        ) : null}
        <Flex className='input-right' position='absolute' right={2}>
          {icRight ? (
            <Space mr={1}>
              <Icon
                className='input-custom-icon'
                color='pastel-blue'
                fontSize={3}
                name={icRight}
                pointerEvents='none'
                tabIndex='-1'
              />
            </Space>
          ) : null}
          {type === 'password' && value ? (
            <PasswordToggler
              error={error}
              inputType={inputType}
              onDrag={resetInputType}
              toggle={togglePassword}
              tabIndex='-1'
              viewOption={passwordView}
            />
          ) : null}
        </Flex>
      </Row>
      {[error, valid].some(item => typeof item === 'string') ? (
        <Space my={1}>
          <Sublabel
            className='input-sublabel'
            content={error || valid}
            type={error ? 'error' : 'valid'}
          />
        </Space>
      ) : (
        <Dummy id='input-dummy-space' hide={noBottomSpace} />
      )}
    </InputContainer>
  )
}

const readOnlyStyle = css`
  background-color: transparent;
  border: ${themeGet('borders.1')} transparent;
  box-shadow: none;
  :focus,
  :hover {
    border: ${themeGet('borders.1')} transparent;
  }
  padding-left: 0;
`

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
  padding-left: ${({ hasIcLeft }) =>
    hasIcLeft ? themeGet('space.8', 32) : themeGet('space.2', 8)}px;
  padding-right: ${({ hasIcRight, type }) =>
    hasIcRight || type === 'password' ? themeGet('space.8', 32) : 0}px;
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

  :focus {
    ~ .input-right  i,
    ~ .input-custom-icon {
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
  ${({ readOnly }) => (readOnly ? readOnlyStyle : null)}
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
  containerStyle: PropTypes.object,
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
  onChange: PropTypes.func,
  passwordView: PropTypes.oneOf(['peek', 'toggle']),
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  readOnly: PropTypes.bool,
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
  minHeight: 40,
  noBottomSpace: false,
  passwordView: 'peek',
  placeholder: 'Search',
  readOnly: false,
  type: 'text',
  value: '',
  variant: 'default'
}

Input.displayName = 'Input'
/** @component */
export default Input
