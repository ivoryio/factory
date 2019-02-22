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
  justifyLeft,
  justifyMiddle,
  justifyRight,
  flexDirectionLeft,
  flexDirectionMiddle,
  flexDirectionRight,
  alignItemsLeft,
  alignItemsMiddle,
  alignItemsRight,
  ...rest
}) => (
  <StyledHeader {...rest}>
    { left ? 
      <LeftSection
        justifyLeft={justifyLeft}
        flexDirectionLeft={flexDirectionLeft}
        alignItemsLeft={alignItemsLeft}
      >
        {left}
      </LeftSection>
        : <LeftSection />
    }
    { middle ? 
      <MiddleSection
        justifyMiddle={justifyMiddle}
        flexDirectionMiddle={flexDirectionMiddle}
        alignItemsMiddle={alignItemsMiddle}
      >
        {middle}
      </MiddleSection>
        : <MiddleSection />
    }
    { right ? 
      <RightSection
        justifyRight={justifyRight}
        flexDirectionRight={flexDirectionRight}
        alignItemsRight
      >
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
  justify-content: ${props =>
    props.justifyLeft ? props.justifyLeft : 'center'};
  flex-direction: ${props => props.flexDirectionLeft ? props.flexDirectionLeft : 'row'};
  align-items: ${props => props.alignItemsLeft ? props.alignItemsLeft : 'center'};
  align-content: center;
  flex-wrap: wrap;
`
const MiddleSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${props => props.justifyMiddle ? props.justifyMiddle : 'center'};
  flex-direction: ${props => props.flexDirectionMiddle ? props.flexDirectionMiddle : 'row'};
  align-items: ${props => props.alignItemsMiddle ? props.alignItemsMiddle : 'center'};
  align-self: center;
  flex-wrap: wrap;
`
const RightSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${props => props.justifyRight ? props.justifyRight : 'center'};
  flex-direction: ${props => props.flexDirectionRight ? props.flexDirectionRight : 'row'};
  align-items: ${props => props.alignItemsRight ? props.alignItemsRight : 'center'};
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
  justifyLeft: PropTypes.string,
  justifyMiddle: PropTypes.string,
  justifyRight: PropTypes.string,
  flexDirectionLeft: PropTypes.string,
  flexDirectionMiddle: PropTypes.string,
  flexDirectionRight: PropTypes.string,
  alignItemsLeft: PropTypes.string,
  alignItemsMiddle: PropTypes.string,
  alignItemsRight: PropTypes.string
}

export default Header
