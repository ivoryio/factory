import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  color,
  compose,
  layout,
  space,
  textStyle,
  typography,
  variant
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { themed, themeGet } from '../utils'

const typographyStyle = variant({
  scale: 'typography',
  prop: 'variant'
})

const handleTruncate = () => ({ truncate }) =>
  truncate &&
  `
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const Typography = styled.div`
  color: ${themeGet('colors.dark-gunmetal', '#1b202f')};
  font-family: ${themeGet('fonts.primary')};
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  ${handleTruncate}

  ${themed('Typography')}
  ${compose(
    color,
    layout,
    space,
    textStyle,
    typography,
    variant
  )}
  ${typographyStyle}
`

Typography.propTypes = {
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.textStyle,
  ...propTypes.typography,
  ...propTypes.variant,
  as: PropTypes.string,
  children: PropTypes.node,
  fontFamily: PropTypes.string,
  truncate: PropTypes.bool,
  variant: PropTypes.string
}

Typography.defaultProps = {
  as: 'div'
}
Typography.displayName = 'Typography'

/** @component */
export default Typography
