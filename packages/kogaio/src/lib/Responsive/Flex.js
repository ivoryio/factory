import React from 'react'
import styled from 'styled-components'
import {
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  justifyItems,
  justifySelf,
  order
} from 'styled-system'

import Box from './Box'

const Flex = props => <StyledFlex {...props} />

const StyledFlex = styled(Box)`
  display: flex;
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${flex}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${order}
  
`

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...flex.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes,
  ...justifySelf.propTypes,
  ...order.propTypes
}
Flex.displayName = 'Flex'

export default Flex
