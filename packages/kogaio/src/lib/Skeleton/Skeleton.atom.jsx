import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Box } from '../Responsive'
import { ConditionalWrap, themeGet } from '../utils'

const Skeleton = ({
  bg,
  className,
  count,
  duration,
  height,
  highlight,
  round,
  width,
  Wrapper,
  ...passedProps
}) => {
  const elements = Array.from({ length: count }, (_, ix) => (
    <SkeletonItem
      as='span'
      bg={bg}
      borderRadius={width && height && round ? 'round' : 4}
      className={`skeleton-item ${className}`}
      duration={duration}
      height={height}
      highlight={highlight}
      key={`${Math.random()
        .toString(36)
        .substring(7)}-ix`}
      width={width || 1}
      {...passedProps}>
      &zwnj;
    </SkeletonItem>
  ))

  return (
    <ConditionalWrap
      condition={typeof Wrapper === 'function'}
      wrap={() => Wrapper(elements)}>
      {elements}
    </ConditionalWrap>
  )
}

export const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(100% + 200px) 0;
  }
`
const background = ({ bg }) => themeGet(`Skeleton.${bg}`, bg)
const highlight = ({ highlight }) =>
  themeGet(`Skeleton.${highlight}`, highlight)

export const SkeletonItem = styled(Box)`
  animation: ${skeletonKeyframes} ${({ duration }) => String(duration)}s
    ease-in-out infinite;
  background-color: ${background};
  background-image: linear-gradient(
    90deg,
    ${background},
    ${highlight},
    ${background}
  );
  background-repeat: no-repeat;
  background-size: 200px 100%;
  display: inline-block;
  line-height: 1;
`

Skeleton.propTypes = {
  bg: PropTypes.string,
  className: PropTypes.string,
  count: PropTypes.number,
  duration: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  highlight: PropTypes.string,
  round: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  Wrapper: PropTypes.func
}

Skeleton.defaultProps = {
  bg: 'background',
  count: 1,
  duration: 1.2,
  height: null,
  highlight: 'highlight',
  round: false,
  width: null,
  Wrapper: null
}

Skeleton.displayName = 'Skeleton'
export default Skeleton
