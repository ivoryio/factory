import React from 'react'
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
import Flex from '../Responsive/Flex'
import ActivityIndicator from '../ActivityIndicator'

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
      {...rest}>
      <Flex justifyContent="center" alignItems="center">
        {isLoading ? (
          loadingText || (
            <ActivityIndicator colors={spinnerColors} size={spinnerSize} />
          )
        ) : (
          <>
            {icon && <Icon icon={icon} variant={variant} />}
            {title}
          </>
        )}
      </Flex>
    </StyledBtn>
  )
}

const StyledBtn = styled.button`
  border-radius: ${themeGet('radii.1')}px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  min-height: 36px;
  text-transform: uppercase;
  width: 160px;

  font-family: ${themeGet('fonts.primary')};
  font-size: ${themeGet('fontSizes.0', '0.75rem')};
  font-weight: ${themeGet('fontWeights.2', 'bold')};
  line-height: ${themeGet('lineHeights.button', 2)};

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
  variant: PropTypes.string
}

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  spinnerSize: '1.5rem',
  type: 'button',
  variant: 'primary'
}
Button.displayName = 'Button'

export default Button
