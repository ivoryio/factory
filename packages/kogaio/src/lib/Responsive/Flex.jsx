import styled from 'styled-components'
import { flexbox } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import Box from './Box'

const Flex = styled(Box)`
  display: flex;
  ${flexbox}
`

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...propTypes.flexbox
}
Flex.displayName = 'Flex'

/** @component  */
export default Flex
