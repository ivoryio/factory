import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { fontSize, space, themeGet } from "styled-system";

import { Space } from "../Responsive";
import Icon from "../Icon";
import Typography from "../Typography";

const CheckBox = ({
  activeColor,
  bgColor,
  disabledColor,
  boxSize,
  isChecked,
  handleCheck,
  iconName,
  label,
  labelColor,
  ...props
}) => (
  <CheckboxContainer {...props}>
    <Label>
      <HiddenCheckbox checked={isChecked} onChange={handleCheck} />
      <StyledCheckbox
        activeColor={activeColor}
        bgColor={bgColor}
        disabledColor={disabledColor}
        boxSize={boxSize}
        checked={isChecked}
      >
        {isChecked && <Icon color={activeColor} fontSize={1} name={iconName} />}
      </StyledCheckbox>
    </Label>
    <Space pl={{ xs: 1, md: 2 }}>
      <Typography
        color={labelColor}
        fontSize={2}
      >
        {label}
      </Typography>
    </Space>
  </CheckboxContainer>
)

const _pickBorder = ({ activeColor, disabledColor, checked, ...props }) => css`
  ${ checked
    ? `border: ${themeGet('borders.1')(props)} ${themeGet(`colors.${activeColor}`)(props)}`
      : `border: ${themeGet('borders.1')(props)} ${themeGet(`colors.${disabledColor}`)(props)}`
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  ${fontSize}
  ${space}
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;
const Label = styled.label``;
const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${props => themeGet(`colors.${props.bgColor}`)};
  border-radius: ${themeGet("radii.1")}px;
  transition: all 150ms;
  width: ${props => props.boxSize}px;
  height: ${props => props.boxSize}px;
  ${_pickBorder}

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0px 1px 0px 0px rgba(22, 29, 37, 0.05);
  }
`;

CheckBox.propTypes = {
  boxSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bgColor: PropTypes.string,
  disabledColor: PropTypes.string,
  handleCheck: PropTypes.func,
  activeColor: PropTypes.string,
  iconName: PropTypes.string,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  labelColor: PropTypes.string
}

CheckBox.defaultProps = {
  boxSize: 14,
  activeColor: "brand",
  bgColor: "white",
  disabledColor: "pastel-blue",
  iconName: "check",
  labelColor: "gunmetal"
}

export default CheckBox
