import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  letterSpacing,
  lineHeight,
  opacity,
  size,
  space,
  textAlign,
  textStyle,
  themeGet
} from 'styled-system'
import { variant } from 'styled-system'

const typographyStyle = variant({
  key: 'typography'
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

  ${color}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${fontStyle}
  ${letterSpacing}
  ${lineHeight}
  ${opacity}
  ${size}
  ${space}
  ${textAlign}
  ${textStyle}
  ${typographyStyle}
`

Typography.propTypes = {
  ...textStyle.propTypes,
  ...color.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...fontStyle.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...opacity.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'label',
    'span',
    'div',
    'p',
    'pre'
  ]),
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
