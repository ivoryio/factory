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
  name,
  fontSize,
  onClick,
  width,
  ...rest
}) => (
  <Touchable
    alignItems={alignItems}
    display={display}
    effect={effect}
    justifyContent={justifyContent}
    onClick={onClick}
    width={width}>
    <Icon color={color} name={name} fontSize={fontSize} {...rest} />
  </Touchable>
)

IconButton.propTypes = {
  alignItems: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  effect: PropTypes.oneOf(effects),
  justifyContent: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
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
  effect: 'opacity',
  icSize: '1em'
}
IconButton.displayName = 'IconButton'

export default IconButton
