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
  top,
  width,
  zIndex
} from 'styled-system'

import Icon from '../Icon'
import icons from 'assets/icons'
import inputStyle from './variants'
import Text from '../Text'
import theme from '../assets/theme'

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
  variant,
  ...rest
}) => {
  const [inputType, setInputType] = useState(type)
  const inputRef = createRef()
  const _selectVariant = () => {
    if (disabled) {
      return 'disabled'
    }
    if (error) {
      return 'error'
    }
    return variant
  }
  const _toggleShowPassword = () => {
    inputRef.current.focus()
    if (inputType.includes('password')) {
      return setInputType('text')
    }
    return setInputType(type)
  }
  return (
    <InputWrapper hasLabel={label} {...rest}>
      {label ? <Text message={label} fontSize='0.8rem' /> : null}
      <Row>
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
          ref={inputRef}
          required={required}
          type={inputType}
          value={value}
          variant={_selectVariant()}
          {...rest}
        />
        {type === 'password' && (
          <Icon
            alignSelf='center'
            position='absolute'
            name='visibility'
            color='#cdd3d9'
            colorActive='#484848'
            onMouseDown={_toggleShowPassword}
            onMouseUp={_toggleShowPassword}
            onTouchStart={_toggleShowPassword}
            onTouchEnd={_toggleShowPassword}
            size={[18, 18]}
            right={12}
          />
        )}
      </Row>
      {error ? (
        <ErrorWrapper>
          <Icon
            alignSelf='center'
            alt='error-input'
            borderRadius='50%'
            size={[20, 20]}
            src={icons.errorOutline}
          />
          <Text message={error} fontSize='0.6rem' ml='2px' type='error' />
        </ErrorWrapper>
      ) : null}
    </InputWrapper>
  )
}

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 3px;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${props => props.hasLabel && space}
`

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`

const StyledInput = styled.input`
  padding: 15px 10px;
  width: 100%;
  border-radius: 3px;
  margin-block-start: 5px;
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
  variant: PropTypes.string,
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
  placeholder: 'Search...',
  type: 'text',
  value: '',
  variant: 'primary',
  theme
}

export default Input
