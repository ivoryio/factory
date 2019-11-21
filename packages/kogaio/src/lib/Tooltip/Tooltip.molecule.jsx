import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
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
  const hideTooltip = () => setTooltipShown(false)
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
    ${arrowStyle}

    transform: rotate(-45deg);
    ${themed('Tooltip.arrow')}
  }

  ${tooltipStyle}
  ${themed('Tooltip')}
  ${compose(border, color, layout, position, space, variant, shadow)}
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
  variant: PropTypes.string,
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
