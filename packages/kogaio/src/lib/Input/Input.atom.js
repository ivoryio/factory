import React, { useState, createRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  alignContent,
  alignItems,
  alignSelf,
  borderColor,
  borderRadius,
  borders,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  flexBasis,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  letterSpacing,
  lineHeight,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  overflow,
  position,
  right,
  size,
  space,
  textAlign,
  themeGet,
  top,
  width,
  zIndex
} from 'styled-system'

import inputStyle from './inputStyle'

import Typography from '../Typography'
import { InputSublabel } from './InputSublabel'
import { PasswordToggler } from './PasswordToggler'

const Input = ({
  autoComplete,
  className,
  cssLabel,
  dataTestId,
  disabled,
  error,
  withErrorTooltip,
  blockSize,
  id,
  inlineSize,
  label,
  name,
  onChange,
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
    if (disabled) {
      return 'disabled'
    }
    if (error) {
      return 'error'
    }
    return variant
  })()

  const togglePassword = () => {
    inputRef.current.focus()
    if (inputType.includes('password')) {
      return setInputType('text')
    }
    return resetInputType()
  }

  const resetInputType = () => setInputType(type)
  return (
    <InputWrapper hasLabel={label} {...rest}>
      {label ? (
        <InputLabel
          cssLabel={cssLabel}
          color='gunmetal'
          htmlFor={id}
          component='span'
          textStyle='input-label'
        >
          {label} {required && '*'}
        </InputLabel>
      ) : null}
      <Row>
        <StyledInput
          autoComplete={autoComplete}
          borderRadius={borderRadius}
          className={className}
          data-testid={dataTestId}
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
            resetInputType={resetInputType}
            togglePassword={togglePassword}
          />
        ) : null}
      </Row>
      <InputSublabel inputVariant={inputVariant} error={error} valid={valid} />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  ${props => props.hasLabel && space};
`

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const InputLabel = styled(Typography)`
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  font-family: ${themeGet('fonts.complementary')};
  ${props => props.cssLabel};
  ${fontFamily}
`

const StyledInput = styled.input`
  width: 100%;
  border-radius: ${themeGet('radii.1')}px;
  color: ${themeGet('colors.gunmetal', '#243143')};
  padding-inline-end: ${themeGet('space.4', 32)}px;
  padding-inline-start: ${themeGet('space.2', 8)}px;
  min-height: 36px;
  font-size: 0.875em;
  line-height: ${themeGet('lineHeights.input', 2)};
  background-color: ${themeGet('colors.white')};
  outline: none;
  outline-style: none;
  outline-color: transparent;
  font-family: ${themeGet('fonts.complementary')};

  &:focus {
    ~ button > i {
      color: ${themeGet('colors.gunmetal')};
    }
  }

  &::placeholder {
      color: ${themeGet('colors.manatee')};
    }
  }
  
  ${inputStyle}
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${borderColor}
  ${borderRadius}
  ${borders}
  ${bottom}
  ${boxShadow}
  ${color}
  ${display}
  ${flex}
  ${flexBasis}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${height}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${left}
  ${letterSpacing}
  ${lineHeight}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${opacity}
  ${overflow}
  ${position}
  ${right}
  ${size}
  ${textAlign}
  ${top}
  ${width}
  ${zIndex}
  ${props => !props.hasLabel && space}
`

Input.propTypes = {
  ...borderRadius.propTypes,
  ...borders.propTypes,
  ...fontSize.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  autoComplete: PropTypes.string,
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  variant: PropTypes.oneOf(['default', 'valid', 'error', 'disabled'])
}

Input.defaultProps = {
  placeholder: 'Search...',
  type: 'text',
  value: '',
  variant: 'default'
}
Input.displayName = 'Input'

export default Input
