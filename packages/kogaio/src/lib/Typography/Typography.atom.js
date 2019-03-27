import React from 'react'
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

const Typography = ({ children, component, message, ...rest }) => (
  <StyledText as={component} {...rest}>
    {message || children}
  </StyledText>
)

/** @component */
const StyledText = styled.div`
  color: ${themeGet('colors.dark-gunmetal', '#1b202f')};
  font-family: ${themeGet('fonts.primary')};
  ${textStyle}
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
  textStyle: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'input-label',
    'input-label-gray',
    'link',
    'paragraph',
    'subtitle',
    'caption',
    'list'
  ]),
  fontFamily: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  component: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'span',
    'div',
    'p'
  ]),
  message: PropTypes.string
}

Typography.defaultProps = {
  component: 'div'
}
Typography.displayName = 'Typography'

export default Typography
