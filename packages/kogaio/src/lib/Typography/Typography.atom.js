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
import typography from './typographyStyle'

const Typography = styled.div`
  color: ${themeGet('colors.dark-gunmetal', '#1b202f')};
  font-family: ${themeGet('fonts.primary')};
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;

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
  ${typography}
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
  variant: PropTypes.string,
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
    'p'
  ]),
  fontFamily: PropTypes.string,
  children: PropTypes.node,
  message: PropTypes.string
}

Typography.defaultProps = {
  as: 'div'
}
Typography.displayName = 'Typography'

/** @component */
export default Typography
