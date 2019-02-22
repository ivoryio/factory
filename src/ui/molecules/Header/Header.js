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
  space
} from 'styled-system'

const Header = ({ className, left, middle, right, ...rest }) => (
  <StyledHeader className={className} {...rest}>
    {<LeftSection {...rest}>{left || null}</LeftSection>}
    {<MiddleSection {...rest}>{middle || null}</MiddleSection>}
    {<RightSection {...rest}>{right || null}</RightSection>}
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
  margin-left: 2px;
  margin-right: 2px;
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
