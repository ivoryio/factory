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
import Text from '../Text'
import { Tooltip, Icon } from '../'
import theme from '../assets/theme'

const Input = ({
  autoComplete,
  dataTest,
  className,
  cssLabel,
  disabled,
  error,
  withErrorLabel,
  blockSize,
  id,
  inlineSize,
  label,
  name,
  onChange,
  placeholder,
  placeholderTextColor,
  required,
  type,
  value,
  variant,
  ...rest
}) => {
  const inputRef = createRef()
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

  const _toggleShowPassword = () => {
    inputRef.current.focus()
    if (inputType.includes('password')) {
      return setInputType('text')
    }
    return setInputType(type)
  }

  return (
    <InputWrapper hasLabel={label} {...rest}>
      {label ? (
        <InputLabel cssLabel={cssLabel} htmlFor={id} fontSize='0.8rem'>
          {label}
        </InputLabel>
      ) : null}
      <Row>
        <StyledInput
          autoComplete={autoComplete}
          borderRadius={borderRadius}
          className={className}
          data-testid={dataTest}
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
        {type === 'password' ? (
          <Icon
            position='absolute'
            name='visibility'
            color='#cdd3d9'
            colorActive='#484848'
            cursor='pointer'
            onMouseDown={_toggleShowPassword}
            onMouseUp={_toggleShowPassword}
            onTouchStart={_toggleShowPassword}
            onTouchEnd={_toggleShowPassword}
            fontSize='1.25em'
            right={8}
          />
        ) : null}
      </Row>
      {withErrorLabel ? (
        <ErrorWrapper>
          <Icon name='error_outline' fontSize='0.85em' />
          <Text ml='4px' textStyle='error'>
            {error}
          </Text>
        </ErrorWrapper>
      ) : (
        <Tooltip
          arrow={{ alignment: 'right' }}
          isShown={!!error}
          variant='error'
          position='absolute'
          top='calc(100% + 6px)'
          right='0'
          width={1}
        >
          {error}
        </Tooltip>
      )}
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  ${props => props.hasLabel && space}
`

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const InputLabel = styled.label`
  font-size: 0.875em;
  color: ${themeGet('colors.dark-gunmetal')};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
  font-family: Roboto, sans-serif, -apple-system, BlinkMacSystemFont;
  ${props => props.cssLabel};
`

const StyledInput = styled.input`
  width: 100%;
  border-radius: 3px;
  padding-inline-start: 12px;
  padding-inline-end: 30px;
  height: 36px;
  font-size: 0.875em;
  line-height: 2;
  background-color: themeGet('colors.white');
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  outline: none;
  outline-style: none;
  outline-color: transparent;
  font-family: Roboto, sans-serif, -apple-system, BlinkMacSystemFont;

  &:focus {
    ~ i {
      color: #484848;
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

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;

  & > i {
    color: ${themeGet('colors.error')};
  }
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
  theme: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'valid', 'error', 'disabled'])
}

Input.defaultProps = {
  placeholder: 'Search...',
  theme,
  type: 'text',
  value: '',
  variant: 'default'
}

export default Input
