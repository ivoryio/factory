import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import Touchable from '../Touchable'
import { effects } from '../Touchable/Touchable.atom'

const IconButton = ({
  alignItems,
  color,
  display,
  justifyContent,
  effect,
  height,
  name,
  fontSize,
  onClick,
  onDragAttempt,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  underlayColor,
  width,
  ...rest
}) => (
  <Touchable
    alignItems={alignItems}
    display={display}
    effect={effect}
    height={height}
    justifyContent={justifyContent}
    onClick={onClick}
    onDragAttempt={onDragAttempt}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    underlayColor={underlayColor}
    width={width}>
    <Icon color={color} name={name} fontSize={fontSize} {...rest} />
  </Touchable>
)

IconButton.propTypes = {
  alignItems: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  effect: PropTypes.oneOf(effects),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justifyContent: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onClick: PropTypes.func,
  onDragAttempt: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  underlayColor: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
}

IconButton.defaultProps = {
  alignItems: 'center',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  effect: 'opacity'
}
IconButton.displayName = 'IconButton'

export default IconButton
