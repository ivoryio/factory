import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  alignContent,
  alignItems,
  alignSelf,
  borders,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  flexDirection,
  flexWrap,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  letterSpacing,
  lineHeight,
  opacity,
  position,
  right,
  space,
  textAlign,
  themeGet,
  top,
  verticalAlign,
  zIndex
} from 'styled-system'

import Text from '../Text'
import theme from '../assets/theme'

const Anchor = ({
  children,
  fontSize,
  fontWeight,
  href,
  target,
  rel,
  ...rest
}) => (
  <StyledAnchor href={href} target={target} rel={rel} {...rest}>
    <Text textStyle='link' fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Text>
  </StyledAnchor>
)

const StyledAnchor = styled.a`
  box-shadow: 0 1px 0 ${themeGet('colors.highlight', '#3498db')};
  letter-spacing: normal;
  text-align: center;
  text-decoration: none;

  :hover {
    transform: scale(1.02);
    font-weight: normal;
  }
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${borders}
  ${bottom}
  ${boxShadow}
  ${color}
  ${display}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${left}
  ${letterSpacing}
  ${lineHeight}
  ${opacity}
  ${position}
  ${right}
  ${space}
  ${textAlign}
  ${top}
  ${verticalAlign}
  ${zIndex}
`

Anchor.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...borders.propTypes,
  ...bottom.propTypes,
  ...boxShadow.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontStyle.propTypes,
  ...fontWeight.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes,
  ...justifySelf.propTypes,
  ...left.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...opacity.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...top.propTypes,
  ...verticalAlign.propTypes,
  theme: PropTypes.object.isRequired,
  zIndex
}

Anchor.defaultProps = {
  fontSize: '0.9rem',
  theme
}

export default Anchor
