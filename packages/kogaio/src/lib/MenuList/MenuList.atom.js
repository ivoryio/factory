import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  alignItems,
  alignSelf,
  borderColor,
  borderRadius,
  borders,
  bottom,
  color,
  display,
  flex,
  flexBasis,
  justifyContent,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  overflow,
  position,
  right,
  themeGet,
  top,
  space
} from 'styled-system'

import { Box } from '../Responsive'
import Text from '../Text'
import Touchable from '../Touchable'

const MenuList = ({
  listItems,
  onSelectItem,
  ...rest
}) => (
  <Container {...rest}>
    <ListWrapper>
      {listItems.map(item => (
        <TouchableText
          key={item.key}
          onClick={onSelectItem(item.name)}
        >
          <Text mx={3} color='dark-gunmetal' fontFamily='Roboto' fontSize='1em' textAlign='left'>
            {item.name}
          </Text>
        </TouchableText>
      ))}
    </ListWrapper>
  </Container>
)

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgba(22, 29, 37, 0.35);
  position: relative;
  &:after {
    box-shadow: 1px -1px 1px 0 rgba(22, 29, 37, 0.35);
    background-color: ${themeGet('colors.white')};
    content: '';
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    top: -4px;
    right: 25px;
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  ${alignItems}
  ${alignSelf}
  ${borderColor}
  ${borderRadius}
  ${borders}
  ${bottom}
  ${color}
  ${display}
  ${flex}
  ${flexBasis}
  ${justifyContent}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${opacity}
  ${overflow}
  ${position}
  ${right}
  ${space}
  ${top}
`

const ListWrapper = styled.div`
  align-items: center;
  background-color: ${themeGet('colors.white')};
  display: flex;
  flex-direction: column;
  & > :nth-child(n + 2) {
    border-top: 1px solid ${themeGet('colors.azureish-white')};
  }
`

const TouchableText = styled(Touchable)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: ${themeGet('space.3')}px;
  padding-top: ${themeGet('space.3')}px;
  width: 100%;
  z-index: 99;
  :hover {
    background-color: ${themeGet('colors.white-smoke')}
  }
`

MenuList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectItem: PropTypes.func.isRequired
}

export default MenuList
