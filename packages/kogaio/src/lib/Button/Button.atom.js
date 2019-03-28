import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  borders,
  bottom,
  boxShadow,
  buttonStyle,
  color,
  colorStyle,
  display,
  fontSize,
  fontFamily,
  fontWeight,
  justifyContent,
  height,
  left,
  letterSpacing,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  position,
  right,
  opacity,
  size,
  textAlign,
  top,
  space,
  themeGet,
  width
} from 'styled-system'

import Icon from './Icon'
import ActivityIndicator from '../ActivityIndicator'
import { Flex } from '../Responsive'

const Button = ({
  alignSelf,
  className,
  dataTest,
  display,
  disabled,
  blockSize,
  icon,
  isLoading,
  justifyContent,
  Loading,
  spinnerSize,
  loadingText,
  onClick,
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
    <StyledBtn
      data-test={dataTest}
      className={className}
      disabled={disabled}
      display={display}
      blockSize={blockSize}
      justifyContent={justifyContent}
      onClick={onClick}
      type={type}
      variant={variant}
      {...rest}
    >
      <Flex justifyContent='center' alignItems='center'>
        {isLoading ? (
          loadingText || (
            <ActivityIndicator size={spinnerSize} colors={spinnerColors} />
          )
        ) : (
          <Fragment>
            {icon && <Icon icon={icon} variant={variant} />}
            {title}
          </Fragment>
        )}
      </Flex>
    </StyledBtn>
  )
}

/** @component */
const StyledBtn = styled.button`
  border-radius: ${themeGet('radii.1')}px;
  cursor: pointer;
  font-size: 1rem;
  font-family: ${themeGet('fonts.complementary')};
  font-weight: bold;
  font-style: normal;
  letter-spacing: normal;
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
  
  ${buttonStyle}
  ${borders}
  ${bottom}
  ${boxShadow}
  ${color}
  ${colorStyle}
  ${display}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${justifyContent}
  ${height}
  ${left}
  ${letterSpacing}
  ${minHeight}
  ${maxHeight}
  ${minWidth}
  ${maxWidth}
  ${position}
  ${opacity}
  ${right}
  ${size}
  ${textAlign}
  ${space}
  ${top}
  ${width}
`
Button.propTypes = {
  ...buttonStyle.propTypes,
  ...borders.propTypes,
  ...bottom.propTypes,
  ...boxShadow.propTypes,
  ...color.propTypes,
  ...colorStyle.propTypes,
  ...display.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...justifyContent.propTypes,
  ...height.propTypes,
  ...left.propTypes,
  ...letterSpacing.propTypes,
  ...minHeight.propTypes,
  ...maxHeight.propTypes,
  ...minWidth.propTypes,
  ...maxWidth.propTypes,
  ...position.propTypes,
  ...opacity.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...textAlign.propTypes,
  ...space.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  bg: PropTypes.string,
  color: PropTypes.string,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  Loading: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  onClick: PropTypes.func,
  spinnerSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'outline', 'validation', 'destructive'])
}

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  type: 'button',
  variant: 'primary'
}
Button.displayName = 'Button'

export default Button
