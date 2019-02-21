import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  alignItems,
  borderColor,
  borderRadius,
  borders,
  bottom,
  boxShadow,
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
import theme from 'assets/theme'
/** For a better understanding of available props, check styled-system (https://github.com/jxnblk/styled-system/blob/master/docs/table.md)  */
const Button = ({
  alignSelf,
  dataTest,
  display,
  disabled,
  blockSize,
  isLoading,
  justifyContent,
  onClick,
  title,
  ...rest
}) => (
  <StyledBtn
    data-test={dataTest}
    disabled={disabled || isLoading}
    display={display}
    blockSize={blockSize}
    justifyContent={justifyContent}
    onClick={onClick}
    {...rest}
  >
    {!isLoading ? title : 'Loading...'}
  </StyledBtn>
)

/** @component */
const StyledBtn = styled.button`
  ${alignItems}
  ${borderColor}
  ${borderRadius}
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

  :active {
    transform: scale(0.965);
  }
  :focus {
    outline-style: none;
    outline-color: transparent;
  }

  :disabled {
    opacity: 0.5;
    filter: grayscale(50%);
    cursor: not-allowed;
  }
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
  theme: PropTypes.object,
  title: PropTypes.string.isRequired
}

Button.defaultProps = {
  theme,
  isLoading: false,
  disabled: false
}

export default Button
