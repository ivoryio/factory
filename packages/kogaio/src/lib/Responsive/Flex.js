import React from 'react'
import styled from 'styled-components'
import {
  alignItems,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  order,
  position
} from 'styled-system'
import Box from './Box'

const Flex = props => <StyledFlex {...props} />

const StyledFlex = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${flex}
  ${justifyContent}
  ${order}
  ${position}
`

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...flex.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...order.propTypes,
  ...position.propTypes
}
Flex.displayName = 'Flex'

export default Flex
