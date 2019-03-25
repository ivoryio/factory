import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { themeGet } from 'styled-system'
import { hexToRgbA } from '../utils/helpers'

const ActivityIndicator = ({
  colors: { background, primary },
  size,
  ...rest
}) => (
  <Spinner background={background} primary={primary} size={size} {...rest} />
)

const backgroundColour = (() => ({ background }) =>
  themeGet(`colors.${background}`))()
const primaryColour = (() => ({ primary }) => themeGet(`colors.${primary}`))()
const complementaryColour = (() => ({ background, ...props }) => {
  const hex = themeGet(`colors.${background}`)(props) || background
  return hexToRgbA(hex, 0)
})()

const spinnerSize = css`
  ${({ size }) => {
    const validSize = ['number', 'string']
    if (!validSize.includes(typeof size)) {
      return console.error(
        `* Unexpected type of value ${size} passed to ActivityIndicator. Expected one of ${validSize}`
      )
    }
    if (typeof size === 'number') {
      return `width: ${size}px; height: ${size}px;`
    }
    return `width: ${size}; height: ${size};`
  }}
`

const Spinner = styled.div`
  font-size: 10px;
  text-indent: -9999em;
  ${spinnerSize}
  border-radius: 50%;
  background: ${primaryColour};
  background: -moz-linear-gradient(
    left,
    ${primaryColour} 10%,
    ${complementaryColour} 42%
  );
  background: -webkit-linear-gradient(
    left,
    ${primaryColour} 10%,
    ${complementaryColour} 42%
  );
  background: -o-linear-gradient(
    left,
    ${primaryColour} 10%,
    ${complementaryColour} 42%
  );
  background: -ms-linear-gradient(
    left,
    ${primaryColour} 10%,
    ${complementaryColour} 42%
  );
  background: linear-gradient(
    to right,
    ${primaryColour} 10%,
    ${complementaryColour} 42%
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
    background: ${primaryColour};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: ${backgroundColour};
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
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

ActivityIndicator.propTypes = {
  colors: PropTypes.object,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

ActivityIndicator.defaultProps = {
  size: '2em'
}
ActivityIndicator.displayName = 'ActivityIndicator'

export default ActivityIndicator
