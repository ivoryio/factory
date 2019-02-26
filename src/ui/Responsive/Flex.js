import React from 'react'
import styled from 'styled-components'
import {
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent
} from 'styled-system'
import Box from './Box'

/** @component */

const Flex = props => <StyledFlex {...props} />

const StyledFlex = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
}

export default Flex
