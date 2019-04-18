import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  space,
  themeGet
} from "styled-system"

import { Space } from '../Responsive'
import Icon from "../Icon"
import Typography from "../Typography"

const CheckBox = ({ isChecked, handleCheck, label, ...props }) => (
  <CheckboxContainer {...props}>
    <Label>
        <HiddenCheckbox checked={isChecked} onChange={handleCheck} />
        <StyledCheckbox checked={isChecked}>
        { isChecked && <Icon
            color='brand'
            name='check'
          />
        }
        </StyledCheckbox>
    </Label>
    <Space pl={{ xs: 1, md: 2 }}>
      <Typography fontSize={1}>
        {label}
      </Typography>
    </Space>
  </CheckboxContainer>
)

const _pickBorder = ({ checked, ...props }) => css`
  ${checked
    ? `border: ${themeGet('borders.1')(props)} ${themeGet('colors.brand')(props)}`
      : `border: ${themeGet('borders.1')(props)} ${themeGet('colors.pastel-blue')(props)}`
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  ${space}
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`
const Label = styled.label`
`
const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  background: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.1')}px;
  transition: all 150ms;
  ${_pickBorder}

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0px 1px rgba(22, 29, 37, 0.05);
  }
`

CheckBox.propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  handleCheck: PropTypes.func
}

export default CheckBox
