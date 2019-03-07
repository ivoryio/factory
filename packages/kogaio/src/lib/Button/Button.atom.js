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
  width
} from 'styled-system'
import { Text } from '../'

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
    variant={variant}
    {...rest}
  >
    {!isLoading ? title : <Text message='loading...' />}
  </StyledBtn>
)

/** @component */
const StyledBtn = styled.button`
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: Roboto, sans-serif, -apple-system, BlinkMacSystemFont;
  font-weight: 900;
  font-style: normal;
  letter-spacing: normal;
  min-height: 36px;
  line-height: 1.9;
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
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline', 'validation', 'destructive'])
}

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  variant: 'primary'
}

export default Button
