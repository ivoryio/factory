import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  alignContent,
  alignItems,
  alignSelf,
  color,
  height,
  justifyContent,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  space,
  themeGet
} from 'styled-system'

const Header = ({ className, left, center, right, ...rest }) => (
  <StyledHeader className={className} {...rest}>
    {<LeftSection>{left}</LeftSection>}
    {<MiddleSection>{center}</MiddleSection>}
    {<RightSection>{right}</RightSection>}
  </StyledHeader>
)

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-self: center;
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${height}
  ${justifyContent}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${space}
`

const LeftSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  ${color};
`
const MiddleSection = styled.div`
  align-self: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: ${themeGet('space.1')}px;
  margin-right: ${themeGet('space.1')}px;
  ${color};
`
const RightSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  ${color};
`

Header.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...color.propTypes,
  ...height.propTypes,
  ...justifyContent.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...space.propTypes,
  className: PropTypes.string,
  left: PropTypes.node,
  middle: PropTypes.node,
  right: PropTypes.node
}

export default Header
