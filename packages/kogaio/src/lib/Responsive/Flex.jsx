import styled from 'styled-components'
import { flexbox } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import Box from './Box'
import { themed } from '../utils'

const Flex = styled(Box)`
  display: flex;
  ${themed('Flex')}
  ${flexbox}
`

Flex.propTypes = {
  ...propTypes.flexbox
}
Flex.displayName = 'Flex'

/** @component  */
export default Flex
