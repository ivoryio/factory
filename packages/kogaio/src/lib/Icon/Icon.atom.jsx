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
  user-select: none;
  pointer-events: ${({ pointerEvents }) => pointerEvents};
  ${compose(
    color,
    layout,
    position,
    space,
    typography
  )}
`

Icon.propTypes = {
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography,
  dataTest: PropTypes.string,
  onClick: PropTypes.func,
  pointerEvents: PropTypes.string,
  src: PropTypes.string,
  tabIndex: PropTypes.string
}

Icon.defaultProps = {
  className: '',
  fontSize: '1em',
  name: 'image',
  color: 'gunmetal'
}
Icon.displayName = 'Icon'

export default Icon
