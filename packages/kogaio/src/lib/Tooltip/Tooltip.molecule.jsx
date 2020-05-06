import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import {
  border,
  color,
  compose,
  layout,
  position,
  space,
  variant,
  shadow
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { themed, themeGet, useBoolean } from '../utils'

import { Flex, Space } from '../Responsive'
import { IconButton, Typography } from '..'

const tooltipStyle = variant({
  scale: 'tooltips',
  prop: 'variant'
})

const Tooltip = ({
  arrow,
  children,
  dismissable,
  fontSize,
  icLeft,
  variant,
  visible,
  ...rest
}) => {
  // #region initialisation
  const [showTooltip, setTooltipShown] = useBoolean(false)
  useEffect(() => {
    setTooltipShown(visible)
  }, [setTooltipShown, visible])
  const hideTooltip = useCallback(() => setTooltipShown(false), [
    setTooltipShown
  ])
  // #endregion
  return showTooltip ? (
    <Container
      arrow={arrow}
      className='tooltip-container'
      variant={variant}
      {...rest}>
      <Space p={4}>
        <Typography
          className='tooltip-text'
          fontSize={fontSize}
          variant='paragraph'>
          {children}
        </Typography>
      </Space>
      {dismissable && (
        <IconButton
          effect='opacity'
          name='cancel'
          fontSize={2}
          onClick={hideTooltip}
          position='absolute'
          right={2}
          top={2}
        />
      )}
    </Container>
  ) : null
}

const _positionArrow = ({ arrow: { direction, size = 8 } }) => {
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

const _alignArrow = ({
  arrow: { direction = 'top', alignment = 'center', size }
}) => {
  const verticalAlignment = ['top', 'center', 'bottom']
  const horizontalAlignment = ['left', 'center', 'right']
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

const _calcArrowSize = ({ arrow: { size } }) => {
  if (size) return `width: ${size}px; height: ${size}px;`
  return 'width: 8px; height: 8px;'
}

const arrowStyle = props => {
  const direction = _positionArrow(props)
  const alignment = _alignArrow(props)
  const size = _calcArrowSize(props)
  return `${direction}; ${alignment}; ${size};`
}

const animatedOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled(Flex)`
  align-items: center;
  animation: ${animatedOpacity} 330ms ease-in-out;
  border-radius: ${themeGet('radii.2', 2)}px;
  flex-direction: column;
  font-size: ${themeGet('fontSizes.3')};
  justify-content: center;
  line-height: ${themeGet('lineHeights.tooltip', 1.6)};
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    ${arrowStyle};

    transform: rotate(-45deg);
    ${themed('Tooltip.arrow')};
  }

  ${tooltipStyle};
  ${themed('Tooltip')};
  ${compose(border, color, layout, position, space, variant, shadow)};
`

Tooltip.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.variant,
  ...propTypes.shadow,
  /** describes tooltip arrow orientation, alignment and size */
  arrow: PropTypes.shape({
    alignment: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'center']),
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    size: PropTypes.number
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]),
  dismissable: PropTypes.bool,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  icLeft: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string)
  ]),
  visible: PropTypes.bool.isRequired
}
Tooltip.defaultProps = {
  arrow: {
    direction: 'top',
    alignment: 'left',
    size: 8
  },
  fontSize: 1,
  variant: 'default'
}
Tooltip.displayName = 'Tooltip'

export default Tooltip
