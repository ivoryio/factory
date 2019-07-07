import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  border,
  buttonStyle,
  color,
  colorStyle,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { themeGet } from '../utils'

import Icon from '../Icon'
import { Space } from '../Responsive'
import ActivityIndicator from '../ActivityIndicator'

const Button = ({
  children,
  CustomLoading,
  dataTest,
  disabled,
  icon,
  id,
  loading,
  onClick,
  spinnerSize,
  title,
  type,
  variant,
  ...rest
}) => {
  const spinnerColors = (() => {
    switch (variant) {
      case 'outline':
        return {
          background: 'white',
          primary: 'brand'
        }
      case 'validation':
        return {
          background: 'success',
          primary: 'white'
        }
      case 'destructive':
        return {
          background: 'error',
          primary: 'white'
        }
      default:
        return {
          background: disabled ? 'brand-disabled' : 'brand',
          primary: disabled ? 'pastel-blue' : 'white'
        }
    }
  })()
  return (
    <ButtonComponent
      data-test={dataTest}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type}
      variant={variant}
      {...rest}>
      {loading ? (
        CustomLoading || (
          <ActivityIndicator
            colors={spinnerColors}
            size={spinnerSize}
            variant="spinner"
          />
        )
      ) : (
        <>
          {icon && <ButtonIcon icon={icon} variant={variant} />}
          <Space px={3}>
            <label className="button-label" htmlFor={id}>
              {title || children}
            </label>
          </Space>
        </>
      )}
    </ButtonComponent>
  )
}

const ButtonIcon = ({ icon: { color, name, size }, variant }) => {
  const fallbackColor = (() =>
    variant.includes('outline') ? 'brand' : 'white')()
  return (
    <Icon name={name} fontSize={size || 16} color={color || fallbackColor} />
  )
}

const defaultFontStyle = css`
  font-family: ${themeGet('fonts.primary')};
  font-size: ${themeGet('fontSizes.0', '0.75rem')};
  font-weight: ${themeGet('fontWeights.bold')};
  line-height: ${themeGet('lineHeights.button', 2)};
`
const ButtonComponent = styled.button`
  ${defaultFontStyle}
  align-items: center;
  border: none;
  border-radius: ${themeGet('radii.1')}px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-height: 36px;
  text-transform: uppercase;
  width: 160px;

  :active {
    transform: scale(0.965);
  }
  :focus {
    outline-style: none;
    outline-color: transparent;
  }

  ${compose(
    border,
    shadow,
    buttonStyle,
    color,
    colorStyle,
    flexbox,
    layout,
    position,
    space,
    typography
  )}
`

Button.propTypes = {
  ...propTypes.border,
  ...propTypes.buttonStyle,
  ...propTypes.color,
  ...propTypes.colorStyle,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography,
  children: PropTypes.node,
  CustomLoading: PropTypes.element,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  spinnerSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string
}

Button.defaultProps = {
  disabled: false,
  loading: false,
  spinnerSize: '1.5rem',
  type: 'button',
  variant: 'primary'
}

ButtonIcon.propTypes = {
  icon: PropTypes.object,
  variant: PropTypes.string
}

Button.displayName = 'Button'
export default Button
