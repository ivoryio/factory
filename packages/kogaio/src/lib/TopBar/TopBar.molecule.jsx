import styled from 'styled-components'

import { themed } from '../utils'
import { Flex } from '../Responsive'

const TopBar = styled(Flex)`
  width: 100%;
  ${themed('TopBar')};
`

TopBar.defaultProps = {
  as: 'header',
  color: 'pastel-blue',
  bg: 'gunmetal',
  py: 3
}

TopBar.displayName = 'TopBar'
/** @component  */
export default TopBar
