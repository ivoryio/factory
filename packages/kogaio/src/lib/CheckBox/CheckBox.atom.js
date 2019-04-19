import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { fontSize, space, themeGet } from "styled-system";

import { Space } from "../Responsive";
import Icon from "../Icon";
import Typography from "../Typography";

const CheckBox = ({
  checkbox,
  defaultTick,
  label,
  CustomTick,
  isChecked,
  handleCheck,
  ...props
}) => (
  <Container {...props}>
    <CustomCheckbox
      activeColor={checkbox.checkedBorderColor}
      boxSize={checkbox.size}
      bgColor={checkbox.background}
      checked={isChecked}
      unCheckedColor={checkbox.unCheckedBorderColor}
    >
      <CheckboxInput
        type='checkbox'
        checked={isChecked}
        onChange={handleCheck}
      />
      {isChecked && (CustomTick ? <CustomTick /> : <Icon color={defaultTick.color} fontSize={1} name={defaultTick.name} />)}
    </CustomCheckbox>
    <Space pl={{ xs: 1, md: 2 }}>
      <Typography
        color={label.color}
        fontSize={2}
      >
        {label.title}
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
  checkbox: PropTypes.objectOf(PropTypes.string),
  defaultTick: PropTypes.objectOf(PropTypes.string),
  CustomTick: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.object
  ]),
  handleCheck: PropTypes.func,
  isChecked: PropTypes.bool,
  label: PropTypes.objectOf(PropTypes.string)
}

CheckBox.defaultProps = {
  checkbox: {
    size: 14,
    background: "white",
    checkedBorderColor: "brand",
    unCheckedBorderColor: "pastel-blue"
  },
  defaultTick: {
    color: 'brand',
    name: "check"
  },
  label: {
    title: 'Checkbox',
    color: 'gunmetal'
  }
}

export default CheckBox
