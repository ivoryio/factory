import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import Touchable from '../Touchable'
import { effects } from '../Touchable/Touchable.atom'

const IconButton = ({
  alignItems,
  bottom,
  color,
  display,
  justifyContent,
  effect,
  height,
  name,
  fontSize,
  left,
  onClick,
  onDragAttempt,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  position,
  right,
  tabIndex,
  top,
  underlayColor,
  width,
  ...rest
}) => (
  <Touchable
    alignItems={alignItems}
    bottom={bottom}
    display={display}
    effect={effect}
    height={height}
    justifyContent={justifyContent}
    left={left}
    onClick={onClick}
    onDragAttempt={onDragAttempt}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    position={position}
    right={right}
    tabIndex={tabIndex}
    top={top}
    underlayColor={underlayColor}
    width={width}>
    <Icon color={color} name={name} fontSize={fontSize} {...rest} />
  </Touchable>
)

IconButton.propTypes = {
  alignItems: PropTypes.string,
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  display: PropTypes.string,
  effect: PropTypes.oneOf(effects),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justifyContent: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  onClick: PropTypes.func,
  onDragAttempt: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  position: PropTypes.string,
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tabIndex: PropTypes.string,
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
  effect: 'opacity'
}
IconButton.displayName = 'IconButton'

export default IconButton
