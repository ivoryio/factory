import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  alignItems,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  order
} from 'styled-system'
import Box from './Box'
import theme from '../assets/theme'

const Flex = props => <StyledFlex {...props} />

const StyledFlex = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${flex}
  ${justifyContent}
  ${order}
`

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...flex.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...order.propTypes,
  theme: PropTypes.object.isRequired
}

Flex.defaultProps = {
  theme
}

export default Flex
