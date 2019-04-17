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
  themeGet,
  top,
  width,
  zIndex
} from 'styled-system'

import Box from '../Responsive/Box'
import { Icon, Typography, Touchable } from '../'
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
  // #region initialisation
  const [showTooltip, setTooltipShown] = useState(false)
  useEffect(
    () => {
      setTooltipShown(isShown)
    },
    [isShown]
  )
  // #endregion
  // #region functions
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
  const hideTooltip = () => setTooltipShown(false)
  // #endregion
  // #region render
  return showTooltip ? (
    <Container arrow={arrow} className='iv-tooltip' variant={variant} {...rest}>
      <Body>
        <Icon
          name={leftIcon}
          fontSize='1em'
          position='absolute'
          top='8px'
          left='8px'
        />
        <Typography
          className='tooltip-text'
          px={8}
          py={2}
          fontSize={fontSize}
          textStyle='paragraph'
        >
          {children}
        </Typography>
        <Touchable
          effect='opacity'
          position='absolute'
          top='8px'
          right='8px'
          onClick={hideTooltip}
        >
          <Icon name='cancel' fontSize='1em' />
        </Touchable>
      </Body>
    </Container>
  ) : null
  // #endregion
}

const arrowStyle = css`
  ${props => {
    const direction = _positionArrow()
    const alignment = _alignArrow()
    const size = _calcArrowSize()
    return `${direction}; ${alignment}; ${size};`

    function _positionArrow () {
      const { direction, size = 8 } = props.arrow
      const position = -(size / 2 + 1)
      switch (direction) {
        case 'right':
          return `right: ${position}px; border-right: 1px solid; border-bottom: 1px solid;`
        case 'bottom':
          return `bottom: ${position}px; border-bottom: 1px solid; border-left: 1px solid;`
        case 'left':
          return `left: ${position}px; border-left: 1px solid; border-top: 1px solid;`
        default:
          return `top: ${position}px; border-top: 1px solid; border-right: 1px solid;`
      }
    }

    function _alignArrow () {
      const verticalAlignment = ['top', 'center', 'bottom']
      const horizontalAlignment = ['left', 'center', 'right']
      const { direction = 'top', alignment = 'center', size } = props.arrow
      if (['left', 'right'].includes(direction)) {
        if (!verticalAlignment.includes(alignment)) {
          console.error(
            `* Invalid '${alignment}' alignment prop passed to ${direction} direction. Expected one of ${verticalAlignment}`
          )
          return `top: calc(50% - ${size / 2}px);`
        }
        if (alignment.includes('center')) return 'top: calc(50%  - 6px);'
        return `${alignment}: 16px;`
      }
      if (['top', 'bottom'].includes(direction)) {
        if (!horizontalAlignment.includes(alignment)) {
          console.error(
            `* Invalid '${alignment}' alignment prop passed to ${direction} direction. Expected one of ${horizontalAlignment} `
          )
          return `left: calc(50% - ${size / 2}px);`
        }
        if (alignment.includes('center')) return 'left: calc(50% - 6px);'
        return `${alignment}: 16px;`
      }
    }
    function _calcArrowSize () {
      const { size } = props.arrow
      if (size) {
        return `width: ${size}px; height: ${size}px;`
      }
      return 'width: 8px; height: 8px;'
    }
  }}
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
  border-radius: ${themeGet('radii.2', 2)}px;
  box-shadow: ${themeGet('shadows.input-basic')};
  padding: ${themeGet('space.1')}px;
  position: relative;
  animation: ${animatedOpacity} 0.2s ease-in-out;

  &:after {
    content: '';
    display: block;
    position: absolute;
    ${arrowStyle}

    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  ${tooltipStyle}
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
  line-height: ${themeGet('lineHeights.tooltip', 1.6)};
  font-size: 1.25rem;
`

Tooltip.propTypes = {
  ...borders.propTypes,
  ...bottom.propTypes,
  ...boxShadow.propTypes,
  ...color.propTypes,
  ...height.propTypes,
  ...left.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...opacity.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...space.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
  /** describes tooltip arrow orientation, alignment and size */
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
    alignment: 'left',
    size: 8
  },
  fontSize: '12px',
  icLeft: 'assignment',
  variant: 'error'
}
Tooltip.displayName = 'Tooltip'

export default Tooltip
