import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { themeGet, useBoolean } from '../utils'

const Touchable = ({
  activeOpacity,
  as,
  children,
  effect,
  onClick,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  onDragAttempt: handleDragAttempt,
  tabIndex,
  underlayColor,
  type,
  ...rest
}) => {
  const [isBeingPressed, setIsBeingPressed] = useBoolean(false)

  const _handleMouseDown = ev => {
    setIsBeingPressed(true)
    typeof onMouseDown === 'function' && onMouseDown(ev)
  }
  const _handleMouseUp = ev => {
    setIsBeingPressed(false)
    typeof onMouseUp === 'function' && onMouseUp(ev)
  }
  const _handleMouseLeave = () => {
    if (isBeingPressed && typeof handleDragAttempt === 'function') {
      return handleDragAttempt()
    }
  }
  return (
    <Wrapper
      activeOpacity={activeOpacity}
      as={as}
      effect={effect}
      onClick={onClick}
      onMouseDown={onClick ? null : _handleMouseDown}
      onMouseUp={onClick ? null : _handleMouseUp}
      onMouseLeave={_handleMouseLeave}
      onTouchStart={onClick ? null : onTouchStart}
      onTouchEnd={onClick ? null : onTouchEnd}
      tabIndex={tabIndex}
      type={type}
      underlayColor={underlayColor}
      {...rest}>
      {children}
    </Wrapper>
  )
}

const touchableWithEffect = ({
  effect,
  activeOpacity,
  underlayColor,
  ...rest
}) => css`
  ${() => {
    switch (effect) {
      case 'opacity':
        return `
          :hover,
          :active {
            opacity: ${activeOpacity};
          }
          `
      case 'highlight':
        return `
          :hover {
            background-color: ${themeGet(
              `colors.${underlayColor}`,
              underlayColor
            )(rest)};
            color: ${themeGet('colors.white')(rest)}
          }
          :active {
            color: ${themeGet('colors.pale-white')(rest)};
            background-color: ${themeGet(
              `colors.${underlayColor}`,
              underlayColor
            )(rest)};
          }
          `
      default:
        return `:active {
            transform: scale(1);
          }`
    }
  }}}
`

const Wrapper = styled.button`
  background: transparent;
  border: none;
  font-size: inherit;
  margin: 0;
  padding: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  box-shadow: none;

  &:focus {
    outline: none;
  }
  :active {
    transform: scale(0.985);
  }
  ${compose(
    border,
    color,
    flexbox,
    layout,
    position,
    space,
    typography
  )}
  ${touchableWithEffect}
`

export const effects = ['opacity', 'highlight', 'no-feedback']

Touchable.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography,
  activeOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  as: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  effect: PropTypes.oneOf(effects).isRequired,
  onClick: PropTypes.func,
  onDragAttempt: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  tabIndex: PropTypes.string,
  type: PropTypes.string,
  underlayColor: PropTypes.string
}

Touchable.defaultProps = {
  activeOpacity: 0.75,
  disabled: false,
  effect: 'no-feedback',
  type: 'button'
}
Touchable.displayName = 'Touchable'

export default Touchable
