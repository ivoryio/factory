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

const Header = ({
  left,
  middle,
  right,
  ...rest
}) => (
  <StyledHeader {...rest}>
    { left ? 
      <LeftSection>
        {left}
      </LeftSection>
        : <LeftSection />
    }
    { middle ? 
      <MiddleSection>
        {middle}
      </MiddleSection>
        : <MiddleSection />
    }
    { right ? 
      <RightSection>
        {right}
      </RightSection>
        : <RightSection />
    }
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
  ${color}
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
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`
const MiddleSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
`
const RightSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
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
  left: PropTypes.node,
  middle: PropTypes.node,
  right: PropTypes.node
}

export default Header
