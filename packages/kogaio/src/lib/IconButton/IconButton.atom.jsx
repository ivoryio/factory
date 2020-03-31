import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import Touchable, { effects } from '../Touchable'

const IconButton = ({
  alignItems,
  as,
  bottom,
  color,
  disabled,
  display,
  justifyContent,
  effect,
  height,
  name,
  fontSize,
  left,
  onClick,
  onDrag,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  pointerEvents,
  position,
  right,
  tabIndex,
  title,
  top,
  underlayColor,
  width,
  ...rest
}) => (
  <Touchable
    alignItems={alignItems}
    as={as}
    bottom={bottom}
    disabled={disabled}
    display={display}
    effect={effect}
    height={height}
    justifyContent={justifyContent}
    left={left}
    onClick={onClick}
    onDrag={onDrag}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    position={position}
    right={right}
    tabIndex={tabIndex}
    title={title}
    top={top}
    underlayColor={underlayColor}
    width={width}>
    <Icon
      color={color}
      name={name}
      fontSize={fontSize}
      pointerEvents={pointerEvents}
      {...rest}
    />
  </Touchable>
)

IconButton.propTypes = {
  alignItems: PropTypes.string,
  as: PropTypes.string,
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  display: PropTypes.string,
  effect: PropTypes.oneOf(effects),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justifyContent: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  onClick: PropTypes.func,
  onDrag: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  pointerEvents: PropTypes.string,
  position: PropTypes.string,
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tabIndex: PropTypes.string,
  title: PropTypes.string,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  underlayColor: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
}

IconButton.defaultProps = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  effect: 'opacity',
  pointerEvents: 'none'
}
IconButton.displayName = 'IconButton'

export default IconButton
