import styled from 'styled-components'

import { Flex } from '../Responsive'

const TopBar = styled(Flex)`
  width: 100%;
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
