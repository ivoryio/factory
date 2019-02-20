import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  alignItems,
  borderColor,
  borderRadius,
  borders,
  boxShadow,
  color,
  display,
  fontSize,
  fontFamily,
  fontWeight,
  justifyContent,
  height,
  letterSpacing,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  position,
  opacity,
  size,
  textAlign,
  space
} from 'styled-system'

import theme from 'assets/theme'

const Button = ({
  alignSelf,
  dataTest,
  display,
  disabled,
  blockSize,
  isLoading,
  justifyContent,
  onClick,
  theme,
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
    theme={theme}
    {...rest}
  >
    {!isLoading ? title : 'Loading...'}
  </StyledBtn>
)

const StyledBtn = styled.button`
  ${alignItems};
  ${borderColor};
  ${borderRadius};
  ${borders};
  ${boxShadow};
  ${color};
  ${display};
  ${fontSize};
  ${fontFamily};
  ${fontWeight};
  ${justifyContent};
  ${height};
  ${letterSpacing};
  ${minHeight};
  ${maxHeight};
  ${minWidth};
  ${maxWidth};
  ${position};
  ${opacity};
  ${size};
  ${textAlign};
  ${space};
  block-size: ${props => props.blockSize};

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
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  dataTest: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  blockSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ...space.propTypes,
  ...fontSize.propTypes
}

Button.defaultProps = {
  blockSize: '40px',
  theme
}

export default Button
