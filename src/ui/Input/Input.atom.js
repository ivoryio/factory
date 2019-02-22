import React from 'react'
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
  themeGet,
  textAlign,
  top,
  width,
  zIndex
} from 'styled-system'

import { Text } from '../Text'
import theme from 'assets/theme'

const Input = ({
  autoComplete,
  dataTest,
  className,
  disabled,
  error,
  blockSize,
  inlineSize,
  label,
  name,
  onChange,
  placeholder,
  placeholderTextColor,
  required,
  type,
  value,
  ...rest
}) => (
  <InputWrapper hasLabel={label} {...rest}>
    {label ? <Text message={label} fontSize={12} /> : null}
    <StyledInput
      autoComplete={autoComplete}
      borderRadius={borderRadius}
      className={className}
      data-testid={dataTest}
      disabled={disabled}
      error={error}
      hasLabel={label}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      required={required}
      type={type}
      value={value}
      {...rest}
    />
    {error ? (
      <Text message={error} fontSize={10} mt='5px' ml='3px' type='error' />
    ) : null}
  </InputWrapper>
)

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${props => props.hasLabel && space}
`

const StyledInput = styled.input`
  border: 1px solid #d3d3d3;
  padding: 15px 10px;
  max-width: 100%;
  border-radius: 6px;
  margin-block-start: 5px;
  border-color: ${props => props.error && themeGet('colors.error')};
  ::placeholder {
    color: ${props => props.error && 'red'};
  }
  &:focus {
    outline: none;
    outline-style: none;
    outline-color: transparent;
    border: 1px solid ${props =>
    props.error ? themeGet('colors.error') : '#484848'};
    ::placeholder {
      color: ${props => (props.error ? themeGet('colors.error') : '#484848')};
    }
    color: ${props => (props.error ? themeGet('colors.error') : '#484848')};
  }

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
  autoComplete: PropTypes.string,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
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
  ...width.propTypes
}

Input.defaultProps = {
  disabled: false,
  placeholder: 'search...',
  required: false,
  type: 'text',
  value: '',
  theme
}

export default Input
