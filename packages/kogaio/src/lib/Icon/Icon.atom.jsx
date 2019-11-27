import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  color,
  compose,
  layout,
  position,
  space,
  typography
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { themed } from '../utils'

const Icon = ({ className, name, pointerEvents, tabIndex, ...rest }) => (
  <StyledIcon
    className={`material-icons${' '}${className}`}
    pointerEvents={pointerEvents}
    tabIndex={tabIndex}
    {...rest}>
    {name}
  </StyledIcon>
)

const StyledIcon = styled.i`
  pointer-events: ${({ pointerEvents }) => pointerEvents};
  user-select: none;
  ${themed('Icon')}
  ${compose(color, layout, position, space, typography)}
`

Icon.propTypes = {
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography,
  onClick: PropTypes.func,
  pointerEvents: PropTypes.string,
  src: PropTypes.string,
  tabIndex: PropTypes.string
}

Icon.defaultProps = {
  className: '',
  name: 'image'
}
Icon.displayName = 'Icon'

export default Icon
