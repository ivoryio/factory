import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  borders,
  bottom,
  boxShadow,
  buttonStyle,
  color,
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
import Typography from '../Typography'

const Button = ({
  alignSelf,
  className,
  dataTest,
  display,
  disabled,
  blockSize,
  isLoading,
  justifyContent,
  onClick,
  title,
  type,
  variant,
  ...rest
}) => (
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
    {isLoading ? <Typography color='white' message='loading...' /> : title}
  </StyledBtn>
)

/** @component */
const StyledBtn = styled.button`
  border-radius: ${themeGet('radii.1')}px;
  cursor: pointer;
  font-size: 1rem;
  font-family: Roboto, sans-serif, -apple-system, BlinkMacSystemFont;
  font-weight: bold;
  font-style: normal;
  letter-spacing: normal;
  min-height: 36px;
  line-height: ${themeGet('lineHeights.button', 1.9)};
  text-transform: uppercase;
  width: 160px;
  
  ${buttonStyle}
  ${borders}
  ${bottom}
  ${boxShadow}
  ${color}
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
  ...color.propTypes,
  ...space.propTypes,
  ...height.propTypes,
  bg: PropTypes.string,
  color: PropTypes.string,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
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

export default Button
