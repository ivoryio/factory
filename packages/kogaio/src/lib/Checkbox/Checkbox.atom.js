import React, { useState } from 'react'
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

const Checkbox = ({
  checkboxPosition,
  disabled,
  isChecked,
  label,
  onChange,
  size,
  ...rest
}) => {
  const [checked, setIsChecked] = useState(isChecked)
  const _handleCheckboxChange = ({ target }) => {
    setIsChecked(target.checked)
    onChange(target.checked)
  }
  return (
    <Container disabled={disabled} {...rest}>
      <CheckboxInput
        checked={checked}
        disabled={disabled}
        onChange={_handleCheckboxChange}
        type="checkbox"
      />
      <Checkmark
        checkboxPosition={checkboxPosition}
        disabled={disabled}
        size={size}
      />
      {label}
    </Container>
  )
}

const cursor = css`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
const Container = styled.label`
  align-items: center;
  color: ${({ disabled }) =>
    disabled
      ? themeGet('colors.pastel-blue', '#b3c3d4')
      : themeGet('colors.gunmetal', '#243143')};
  
  display: flex;
  font-size: ${themeGet('fontSizes.1', '1rem')};
  position: relative
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  :hover input ~ span {
    border: ${themeGet('borders.1', '1px solid')} ${({ disabled }) =>
  disabled
    ? themeGet('colors.pastel-blue', '#b3c3d4')
    : themeGet('colors.paynes-gray', '#4f5767')};
  }

  input:checked ~ span {
    border: ${themeGet('borders.1', '1px solid')} ${themeGet(
  'colors.brand',
  '#66bb6a'
)};
  }

  input:checked ~ span:after {
    display: flex;
  }

  ${bottom}
  ${color}
  ${cursor}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${left}
  ${letterSpacing}
  ${lineHeight}
  ${opacity}
  ${position}
  ${right}
  ${space}
  ${top}
  ${width}
  ${zIndex}
`

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  ${cursor}
`

const size = css`
  ${({ size }) =>
    typeof size === 'number'
      ? `
  width: ${size}px;
  height: ${size}px;
`
      : `
  width: ${size};
  height: ${size};
`}
`
const checkboxPosition = ({ checkboxPosition, ...props }) => css`
  ${checkboxPosition === 'right'
    ? `
    margin-inline-start: ${themeGet('space.2', 8)(props)}px;
    order: 1;
  `
    : `
    margin-inline-end: ${themeGet('space.2', 8)(props)}px;
    order: 0;
  `}
`
const Checkmark = styled.span`
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
  position: relative;
  ${checkboxPosition}
  ${borders}
  ${color}
  ${cursor}
  ${size}


  :after {
    content: '';
    display: none;
    width: 25%;
    height: 50%;
    border: solid ${themeGet('colors.brand', '#66bb6a')};
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
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Checkbox.defaultProps = {
  checkboxPosition: 'left',
  disabled: false,
  isChecked: false,
  label: 'Checkbox',
  onChange: () =>
    console.warn(
      '* Heads up! You forgot to add an onChange functino to Checkbox />'
    ),
  size: 16
}

export default Checkbox
