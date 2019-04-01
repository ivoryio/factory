import React, { useState, createRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
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
import { Flex } from '..//Responsive'
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
    <InputWrapper flexDirection='column' hasLabel={label} width={1} {...rest}>
      {label ? (
        <InputLabel
          cssLabel={cssLabel}
          color='gunmetal'
          htmlFor={id}
          component='span'
          textStyle='inputLabel'
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
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  ${props => props.cssLabel};
  ${textStyle}
`

const inputSize = css`
  ${({ type, minHeight, ...rest }) => {
    const pl = `${themeGet('space.2', 8)(rest)}px`
    const pr = `${themeGet('space.6', 32)(rest)}px`
    return `
      min-height: ${minHeight || 36}px;
      padding-inline-start: ${pl};
      width: ${`calc(100% - ${pl} - ${pr})`};
      padding-inline-end: ${pr};
    `
  }}
`

const StyledInput = styled.input`
  background-color: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.1')}px;
  color: ${themeGet('colors.gunmetal', '#243143')};
  font-family: ${themeGet('fonts.primary')};
  font-size: ${themeGet('fontSizes.1', '0.875em')};
  outline: none;
  ${inputSize}

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
  variant: PropTypes.oneOf(['default', 'valid', 'error', 'disabled'])
}

Input.defaultProps = {
  placeholder: 'Search...',
  textStyle: 'inputLabel',
  type: 'text',
  value: '',
  variant: 'default'
}
Input.displayName = 'Input'

export default Input
