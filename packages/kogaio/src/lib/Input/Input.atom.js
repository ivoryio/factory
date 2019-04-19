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
  textStyle,
  themeGet,
  top,
  width,
  zIndex
} from 'styled-system'

import inputStyle from './inputStyle'

import Typography from '../Typography'
import { InputSublabel } from './InputSublabel'
import { Flex } from '../Responsive'
import { PasswordToggler } from './PasswordToggler'

const Input = ({
  autoComplete,
  className,
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
  textIndent,
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
    <InputWrapper flexDirection="column" hasLabel={label} width={1} {...rest}>
      {label ? (
        <InputLabel
          color="gunmetal"
          htmlFor={id}
          as="span"
          variant="inputLabel">
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
          textIndent={textIndent}
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

const InputWrapper = styled(Flex)`
  ${props => props.hasLabel && space};
`

const Row = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const InputLabel = styled(Typography)`
  ${textStyle}
`

const addHorizontalPadding = () => props => `
  padding-inline-start: ${themeGet('space.2', 8)(props)}px;
  padding-inline-end: ${themeGet('space.8', 32)(props)}px;
`
const StyledInput = styled.input`
  ${addHorizontalPadding}
  background-color: ${themeGet('colors.white')};
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
  ...textStyle.propTypes,
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
  variant: PropTypes.string
}

Input.defaultProps = {
  minHeight: 36,
  placeholder: 'Search...',
  type: 'text',
  value: '',
  variant: 'default'
}
Input.displayName = 'Input'

export default Input
