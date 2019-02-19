import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({
  onClick,
  dataTest,
  padding,
  marginBlockStart,
  marginInlineEnd,
  border,
  borderRadius,
  backgroundColor,
  isLoading,
  minWidth,
  width,
  height,
  disabled,
  title,
  ...rest
}) => (
  <StyledBtn
    onClick={onClick}
    data-test={dataTest}
    marginBlockStart={marginBlockStart}
    marginInlineEnd={marginInlineEnd}
    padding={padding}
    border={border}
    borderRadius={borderRadius}
    minWidth={minWidth}
    height={height}
    width={width}
    disabled={disabled}
    backgroundColor={backgroundColor}
    {...rest}
  >
    {!isLoading ? title : 'Loading...'}
  </StyledBtn>
)

const StyledBtn = styled.button`
  padding: ${props => props.padding};
  margin-block-start: ${props => props.marginBlockStart};
  margin-inline-end: ${props => props.marginInlineEnd};
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  border: ${props => props.border};

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
  }
`

Button.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  dataTest: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBlockStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginInlineEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Button.defaultProps = {
  marginBlockStart: 0,
  marginInlineEnd: 0,
  border: '1px solid #000',
  borderRadius: '6px',
  width: '120px',
  height: '40px',
  backgroundColor: 'charcoal'
}

export default Button
