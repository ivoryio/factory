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
import { flexGrow, flexShrink } from '../utils'
import Box from './Box'

const Flex = styled(Box)`
  display: flex;
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${flexBasis}
  ${flexDirection}
  ${flexGrow}
  ${flexShrink}
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

/** @component  */
export default Flex
