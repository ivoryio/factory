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

const Anchor = ({ className, children, href, target, rel, ...rest }) => (
  <StyledAnchor
    className={className}
    href={href}
    target={target}
    rel={rel}
    {...rest}
  >
    {children}
  </StyledAnchor>
)

const StyledAnchor = styled.a`
  box-shadow: 0 1px 0 ${themeGet('colors.highlight', '#3498db')};
  font-family: Roboto, Times, sans, sans-serif;
  font-weight: 900;
  letter-spacing: normal;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  :link {
    color: ${themeGet('colors.info')}
  }
  :hover {
    transform: scale(1.02);
    font-weight: normal;
  }
  :visited{
    color: ${themeGet('colors.brand-hover')};
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
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
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
  zIndex
}

Anchor.defaultProps = {
  fontSize: '0.9rem'
}

export default Anchor
