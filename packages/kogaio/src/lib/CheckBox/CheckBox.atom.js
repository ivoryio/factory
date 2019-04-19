import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { fontSize, space, themeGet } from "styled-system";

import { Space } from "../Responsive";
import Icon from "../Icon";
import Typography from "../Typography";

const CheckBox = ({
  boxSize,
  colors,
  CustomIcon,
  isChecked,
  handleCheck,
  tick,
  label,
  ...props
}) => (
  <Container {...props}>
    <CustomCheckbox
      activeColor={colors.active}
      boxSize={boxSize}
      bgColor={colors.background}
      checked={isChecked}
      unCheckedColor={colors.unChecked}
    >
      <CheckboxInput
        type='checkbox'
        checked={isChecked}
        onChange={handleCheck}
      />
      {isChecked && (CustomIcon ? <CustomIcon /> : <Icon color={colors.active} fontSize={1} name={'check'} />)}
    </CustomCheckbox>
    <Space pl={{ xs: 1, md: 2 }}>
      <Typography
        color={colors.label}
        fontSize={2}
      >
        {label}
      </Typography>
    </Space>
  </Container>
)

const _pickBorder = ({ activeColor, unCheckedColor, checked, ...props }) => css`
  ${ checked
    ? `border: ${themeGet('borders.1')(props)} ${themeGet(`colors.${activeColor}`)(props)}`
      : `border: ${themeGet('borders.1')(props)} ${themeGet(`colors.${unCheckedColor}`)(props)}`
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  ${fontSize}
  ${space}
`
const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`
const CustomCheckbox = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 0px 0px rgba(22, 29, 37, 0.05);
  background: ${props => themeGet(`colors.${props.bgColor}`)};
  border-radius: ${themeGet("radii.1")}px;
  width: ${props => props.boxSize}px;
  height: ${props => props.boxSize}px;
  ${_pickBorder}

`

CheckBox.propTypes = {
  boxSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  CustomIcon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.object
  ]),
  handleCheck: PropTypes.func,
  colors: PropTypes.objectOf(PropTypes.string),
  tick: PropTypes.string,
  isChecked: PropTypes.bool,
  label: PropTypes.string
}

CheckBox.defaultProps = {
  boxSize: 14,
  colors: {
    active: "brand",
    background: "white",
    label: "gunmetal",
    unChecked: "pastel-blue"
  },
  tick: "check",
  label: "Checkbox"
}

export default CheckBox
