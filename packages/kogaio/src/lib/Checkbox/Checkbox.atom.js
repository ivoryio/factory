import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  borders,
  bottom,
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  left,
  letterSpacing,
  lineHeight,
  opacity,
  position,
  right,
  space,
  textAlign,
  themeGet,
  top,
  width,
  zIndex
} from 'styled-system'
import { Box, Flex } from '../Responsive'
const Checkbox = ({
  checkboxPosition,
  checked,
  color,
  disabled,
  id,
  label,
  labelColor,
  onChange,
  size,
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
        onChange={onChange}
        type="checkbox"
      />
      <Placeholder color={color} disabled={disabled} size={size} />
    </Wrapper>
    <Label color={labelColor} disabled={disabled} htmlFor={id}>
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
  ${checkboxPosition === 'right' &&
    `margin-inline-start: ${themeGet('space.2', 8)(props)}px;`}
  ${checkboxPosition === 'left' &&
    `margin-inline-end: ${themeGet('space.2', 8)(props)}px;`}
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
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  ${color}
  ${cursor}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
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

  ${cursor}
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
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...fontFamily.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...fontWeight.propTypes,
  ...fontStyle.propTypes,
  ...letterSpacing.propTypes,
  ...borders.propTypes,
  ...opacity.propTypes,
  ...position.propTypes,
  ...zIndex.propTypes,
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,
  checkboxPosition: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Checkbox.defaultProps = {
  checkboxPosition: 'left',
  color: 'brand',
  disabled: false,
  isChecked: false,
  label: 'Checkbox',
  onChange: () =>
    console.error(
      '* Heads up! You forgot to add an onChange function to <Checkbox />'
    ),
  size: 16
}

export default Checkbox
