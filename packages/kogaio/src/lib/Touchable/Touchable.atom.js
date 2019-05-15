import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  alignItems,
  alignSelf,
  borderRadius,
  borders,
  color,
  display,
  flex,
  flexDirection,
  fontSize,
  height,
  justifyContent,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  right,
  size,
  space,
  themeGet,
  top,
  width,
  zIndex
} from 'styled-system'
import { useBoolean } from '../utils'

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
  handleDragAttempt,
  underlayColor,
  type,
  ...rest
}) => {
  const { value: isHoldingClick, setValue: setIsHoldingClick } = useBoolean(
    false
  )

  const _handleMouseDown = ev => {
    setIsHoldingClick(true)
    typeof onMouseDown === 'function' && onMouseDown(ev)
  }
  const _handleMouseUp = ev => {
    setIsHoldingClick(false)
    typeof onMouseUp === 'function' && onMouseUp(ev)
  }
  const _handleMouseLeave = () => {
    if (isHoldingClick && typeof handleDragAttempt === 'function') {
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
      type={type}
      underlayColor={underlayColor}
      {...rest}>
      {children}
    </Wrapper>
  )
}

const touchableWithEffect = css`
  ${({ effect, activeOpacity, underlayColor, ...rest }) => {
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
            background-color: ${themeGet(`colors.${underlayColor}`)(rest)};
            color: ${themeGet('colors.white')(rest)}
          }
          :active {
            opacity: ${activeOpacity};
            color: ${themeGet('colors.pale-white')(rest)};
            background-color: ${themeGet(`colors.${underlayColor}`)(rest)};
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
  ${alignItems}
  ${alignSelf}
  ${borderRadius}
  ${borders}
  ${color}
  ${display}
  ${flex}
  ${flexDirection}
  ${fontSize}
  ${height}
  ${justifyContent}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${right}
  ${size}
  ${space}
  ${top}
  ${width}
  ${zIndex}
  ${touchableWithEffect}
`

export const effects = ['opacity', 'highlight', 'no-feedback']

Touchable.propTypes = {
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...borderRadius.propTypes,
  ...borders.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...flexDirection.propTypes,
  ...fontSize.propTypes,
  ...height.propTypes,
  ...justifyContent.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  activeOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  effect: PropTypes.oneOf(effects).isRequired,
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
