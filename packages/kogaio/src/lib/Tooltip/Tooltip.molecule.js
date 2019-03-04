import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import {
  borders,
  bottom,
  boxShadow,
  color,
  height,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  overflow,
  position,
  right,
  space,
  top,
  width,
  zIndex
} from 'styled-system'

import Box from '../Responsive/Box'
import { Icon, Text, Touchable } from '../'
import tooltipStyle from './tooltipStyle'

const Tooltip = ({
  arrow,
  children,
  fontSize,
  icLeft,
  isShown,
  variant,
  ...rest
}) => {
  const [showTooltip, setTooltipShown] = useState(false)
  const leftIcon = (() => {
    switch (variant) {
      case 'success':
        return 'assignment_turned_in'
      case 'error':
        return 'assignment_late'
      default:
        return 'assignment'
    }
  })()
  useEffect(
    () => {
      setTooltipShown(isShown)
    },
    [isShown]
  )
  const hideTooltip = () => setTooltipShown(false)
  return showTooltip ? (
    <Container arrow={arrow} variant={variant} {...rest}>
      <Body>
        <Icon
          name={leftIcon}
          fontSize='1em'
          position='absolute'
          top={8}
          left={8}
        />
        <Touchable position='absolute' top={8} right={8} onClick={hideTooltip}>
          <Icon
            color='#cdd3d9'
            colorActive='#636f7c'
            cursor='pointer'
            name='cancel'
            fontSize='1em'
          />
        </Touchable>
        <Text className='tooltip-text' px={36} py={2} fontSize={fontSize}>
          {children}
        </Text>
      </Body>
    </Container>
  ) : null
}

const _positionAndAlignArrow = () => props => {
  const direction = _positionArrow()
  const alignment = _alignArrow()
  return `${direction}; ${alignment};`

  function _positionArrow () {
    const { direction } = props.arrow
    switch (direction) {
      case 'right':
        return 'right: -5px; border-right: 1px solid; border-bottom: 1px solid;'
      case 'bottom':
        return 'bottom: -5px; border-bottom: 1px solid; border-left: 1px solid;'
      case 'left':
        return 'left: -5px; border-left: 1px solid; border-top: 1px solid;'
      default:
        return 'top: -5px; border-top: 1px solid; border-right: 1px solid;'
    }
  }
  function _alignArrow () {
    const verticalAlignment = ['top', 'center', 'bottom']
    const horizontalAlignment = ['left', 'center', 'right']
    const { direction = 'top', alignment = 'center' } = props.arrow
    if (['left', 'right'].includes(direction)) {
      if (!verticalAlignment.includes(alignment)) {
        console.error(
          `* Invalid '${alignment}' alignment prop passed to ${direction} direction. Expected one of ${verticalAlignment}`
        )
        return 'top: calc(50% - 6px);'
      }
      if (alignment.includes('center')) return 'top: calc(50%  - 6px);'
      return `${alignment}: 16px;`
    }
    if (['top', 'bottom'].includes(direction)) {
      if (!horizontalAlignment.includes(alignment)) {
        console.error(
          `* Invalid '${alignment}' alignment prop passed to ${direction} direction. Expected one of ${horizontalAlignment} `
        )
        return 'left: calc(50% - 6px);'
      }
      if (alignment.includes('center')) return 'left: calc(50% - 6px);'
      return `${alignment}: 16px;`
    }
  }
}

const arrowStyle = css`
  ${_positionAndAlignArrow}
`

const animatedOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled(Box)`
  border-radius: 2px;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  padding: 4px;
  position: relative;
  animation: ${animatedOpacity} 0.2s ease-in-out;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    ${arrowStyle}

    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  ${borders}
  ${bottom}
  ${boxShadow}
  ${color}
  ${height}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${opacity}
  ${overflow}
  ${position}
  ${right}
  ${space}
  ${top}
  ${tooltipStyle}
  ${width}
  ${zIndex}
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  line-height: 1.6;
  font-size: 1.25rem;
`

Tooltip.propTypes = {
  /** describes tooltip arrow orientation and alignment */
  arrow: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]),
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  icLeft: PropTypes.string,
  isShown: PropTypes.bool.isRequired,
  variant: PropTypes.string
}
Tooltip.defaultProps = {
  arrow: {
    direction: 'top',
    alignment: 'left'
  },
  fontSize: '12px',
  icLeft: 'assignment',
  variant: 'error'
}

export default Tooltip
