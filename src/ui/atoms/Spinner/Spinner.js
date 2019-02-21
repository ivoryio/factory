import React from 'react'
import styled from 'styled-components'

import {
  borderRadius,
  color,
  fontSize,
  height,
  position,
  size,
  space,
  width
} from 'styled-system'

const Spinner = props => (
  <StyledSpinner {...props} />
)

const StyledSpinner = styled.div`
  ${borderRadius}
  ${color}
  ${fontSize}
  ${height}
  ${position}
  ${size}
  ${space}
  ${width}
  background: -moz-linear-gradient(
    left,
    #4dace9 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #4dace9 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(left, #4dace9 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(
    left,
    #4dace9 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    #4dace9 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: spin 1.4s infinite linear;
  animation: spin 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  &:before {
    width: 50%;
    height: 50%;
    background: #4dace9;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: #f5fffa;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`

Spinner.propTypes = {
  ...borderRadius.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...height.propTypes,
  ...position.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...width.propTypes
}

Spinner.defaultProps = {
  borderRadius: 15,
  bg: '#4dace9',
  fontSize: 10,
  height: '2em',
  mx: 'auto',
  my: 6,
  width: '2em',
}

export default Spinner