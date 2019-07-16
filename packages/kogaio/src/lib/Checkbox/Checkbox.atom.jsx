import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { color, compose, typography, variant } from 'styled-system'

import { themed, themeGet } from '../utils'
import { Box, Flex } from '../Responsive'

const checkboxStyle = variant({
  scale: 'checkboxes',
  prop: 'variant'
})

const Checkbox = ({
  checkboxPosition,
  checked,
  color,
  disabled,
  error,
  id,
  label,
  labelColor,
  name,
  onChange,
  size,
  valid,
  value,
  variant,
  ...rest
}) => {
  const checkboxVariant = (() => {
    if (disabled) return 'disabled'
    if (error) return 'error'
    if (valid) return 'valid'
    return 'default'
  })()
  return (
    <Flex alignItems="center" {...rest}>
      <Wrapper
        color={color}
        disabled={disabled}
        checkboxPosition={checkboxPosition}
        variant={checkboxVariant}>
        <Input
          checked={checked}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          type="checkbox"
          value={value}
        />
        <Placeholder
          className={`checkbox ${checked ? 'checked' : ''}`}
          color={color}
          disabled={disabled}
          size={size}
          variant={checkboxVariant}
        />
      </Wrapper>
      <Label
        className="checkbox-label"
        color={labelColor}
        disabled={disabled}
        htmlFor={id}
        variant={checkboxVariant}>
        {label}
      </Label>
    </Flex>
  )
}

const checkboxSize = ({ size }) => css`
  width: ${typeof size === 'number' ? `${size}px` : size};
  height: ${typeof size === 'number' ? `${size}px` : size};
`
const checkboxPosition = ({ checkboxPosition, ...props }) => css`
  order: ${checkboxPosition === 'right' ? 1 : 0};
  margin-left: ${checkboxPosition === 'right'
    ? `${themeGet('space.2', 8)(props)}px`
    : null};
  margin-right: ${checkboxPosition === 'left'
    ? `${themeGet('space.2', 8)(props)}px`
    : null};
`

const Wrapper = styled(Box)`
  position: relative;

  input:checked ~ span {
    border: ${themeGet('borders.1', '1px solid')}
      ${({ color }) => themeGet(`colors.${color}`, color)};
  }

  input:checked ~ span:after {
    display: flex;
  }

  ${themed('Checkbox.container')}
  ${checkboxPosition}
  ${checkboxStyle}
`

const Label = styled.label`
  font-size: ${themeGet('fontSizes.1', '1rem')};
  user-select: none;
  pointer-events: auto;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  ${compose(
    color,
    typography
  )}
  ${themed('Checkbox.label')}
  ${checkboxStyle}
`

const cursor = css`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
const Input = styled.input`
  position: absolute;
  opacity: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  ${cursor}
`

const Placeholder = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
  pointer-events: none;

  ${themed('Checkbox')}
  ${color}
  ${checkboxSize}
  ${checkboxStyle}

  :after {
    content: '';
    display: none;
    width: 25%;
    height: 50%;
    border: solid ${({ color }) => themeGet(`colors.${color}`, color)};
    border-width: 0 2px 2px 0;
    -webkit-transform: translate(10%, -10%) rotate(45deg);
    -ms-transform: translate(10%, -10%) rotate(45deg);
    transform: translate(10%, -10%) rotate(45deg);
  }
`

Checkbox.propTypes = {
  ...propTypes.color,
  ...propTypes.typography,
  checkboxPosition: PropTypes.oneOf(['left', 'right']),
  checked: PropTypes.bool.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string
}

Checkbox.defaultProps = {
  checkboxPosition: 'left',
  color: 'brand',
  disabled: false,
  checked: false,
  onChange: () =>
    console.error('* Checkbox component expects an onChange function'),
  size: 16,
  variant: 'default'
}

Checkbox.displayName = 'Checkbox'
export default Checkbox
