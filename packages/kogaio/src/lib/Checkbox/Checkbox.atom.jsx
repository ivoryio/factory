import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { color, compose, typography } from 'styled-system'

import { themeGet } from '../utils'
import { Box, Flex } from '../Responsive'

const Checkbox = ({
  checkboxPosition,
  checked,
  color,
  disabled,
  id,
  label,
  labelColor,
  name,
  onChange,
  size,
  value,
  ...rest
}) => (
  <Flex alignItems="center" {...rest}>
    <Wrapper
      color={color}
      disabled={disabled}
      checkboxPosition={checkboxPosition}>
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
        className="checkbox"
        color={color}
        disabled={disabled}
        size={size}
      />
    </Wrapper>
    <Label
      className="checkbox-label"
      color={labelColor}
      disabled={disabled}
      htmlFor={id}>
      {label}
    </Label>
  </Flex>
)

const cursor = css`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
const size = ({ size }) => css`
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

  :hover input ~ span {
    border: ${themeGet('borders.1', '1px solid')}
      ${({ disabled }) =>
        disabled
          ? themeGet('colors.pastel-blue', '#b3c3d4')
          : themeGet('colors.paynes-gray', '#4f5767')};
  }

  input:checked ~ span {
    border: ${themeGet('borders.1', '1px solid')}
      ${({ color }) => themeGet(`colors.${color}`, color)};
  }

  input:checked ~ span:after {
    display: flex;
  }

  ${checkboxPosition}
`

const Label = styled.label`
  color: ${({ disabled }) =>
    disabled
      ? themeGet('colors.pastel-blue', '#b3c3d4')
      : themeGet('colors.gunmetal', '#243143')};

  font-size: ${themeGet('fontSizes.1', '1rem')};
  user-select: none;
  pointer-events: auto;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  ${compose(
    color,
    cursor,
    typography
  )}
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
  background-color: ${({ disabled }) =>
    disabled
      ? themeGet('colors.ghost-white', '#f6f9fb')
      : themeGet('colors.white', '#fff')};
  border-radius: ${themeGet('radii.1', 1)}px;
  border: ${themeGet('borders.1', '1px solid')}
    ${themeGet('colors.pastel-blue', '#b3c3d4')};
  box-shadow: ${themeGet('shadows.input-basic')};
  display: flex;
  justify-content: center;
  pointer-events: none;

  ${compose(
    color,
    cursor
  )}
  ${size}

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
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Checkbox.defaultProps = {
  checkboxPosition: 'left',
  color: 'brand',
  disabled: false,
  checked: false,
  onChange: () =>
    console.error('* Checkbox component expects an onChange function'),
  size: 16
}

Checkbox.displayName = 'Checkbox'
export default Checkbox
