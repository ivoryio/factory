import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  alignContent,
  alignItems,
  color,
  display,
  height,
  justifyContent,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  space
} from 'styled-system'

const Header = ({ left, middle, right, ...rest }) => (
  <StyledHeader {...rest}>
    {left ? <LeftSection>{left}</LeftSection> : null}
    {middle ? <CentralSection>{middle}</CentralSection> : null}
    {right ? <RightSection>{right}</RightSection> : null}
  </StyledHeader>
)

const StyledHeader = styled.div`
  width: 100%;
  ${alignContent}
  ${alignItems}
  ${color}
  ${display}
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
  position: absolute;
  width: 33.33%;
`
const CentralSection = styled.div`
  position: absolute;
  width: 33.33%;
`
const RightSection = styled.div`
  position: absolute;
  width: 33.33%;
`

Header.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...height.propTypes,
  ...justifyContent.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...space.propTypes,
  left: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  middle: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  right: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default Header
