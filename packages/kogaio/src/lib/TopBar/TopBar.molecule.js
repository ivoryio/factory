import styled from 'styled-components'
import PropTypes from 'prop-types'
import { size, textAlign } from 'styled-system'
import { Flex } from '../Responsive'

const TopBar = styled(Flex)`
  width: 100%;
  ${size}
  ${textAlign}
`

TopBar.propTypes = {
  ...size.propTypes,
  ...textAlign.propTypes,
  as: PropTypes.oneOf(['header', 'div', 'span'])
}

TopBar.defaultProps = {
  color: 'pastel-blue',
  bg: 'gunmetal',
  py: 3
}
TopBar.displayName = 'TopBar'

/** @component  */
export default TopBar
