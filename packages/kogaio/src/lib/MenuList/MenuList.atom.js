import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  alignItems,
  alignSelf,
  borderColor,
  borderRadius,
  borders,
  bottom,
  color,
  colorStyle,
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
  arrowAlignment,
  listItems,
  onSelectItem,
  ...rest
}) => (
  <Container arrowAlignment={arrowAlignment} {...rest}>
    <ListWrapper>
      {listItems.map(item => (
        <TouchableText
          key={item.key}
          onClick={onSelectItem(item.name)}
        >
          <Text p={3} color='dark-gunmetal' fontSize='1em' textAlign='left'>
            {item.name}
          </Text>
        </TouchableText>
      ))}
    </ListWrapper>
  </Container>
)

const arrowVerticalAlignment = css`
  ${props => {
    const alignment = _alignArrow()
    return `${alignment}`

    function _alignArrow () {
      const alignments = ['left', 'center', 'right']
      const { arrowAlignment } = props
      if (alignments.includes(arrowAlignment)) {
        switch (arrowAlignment) {
          case 'left':
            return `left: 25px;`
          case 'center':
            return `align-self: center;`
          default:
            return `right: 25px;`
        }
      }
      console.warn('Invalid prop: arrowAlignments must be one of these values: left, center, right')
    }
  }}
`

const Container = styled(Box)`
  border-radius: ${themeGet('radii.1')}px;
  display: flex;
  flex-direction: column;
  position: relative;
  &:after {
    ${arrowVerticalAlignment}
    box-shadow: 1px -1px 1px 0 rgba(22, 29, 37, 0.35);
    background-color: ${themeGet('colors.white')};
    content: '';
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    top: -4px;
    z-index: 98;
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
  ${colorStyle}
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
  ${position}
  ${right}
  ${space}
  ${top}
`

const ListWrapper = styled.div`
  z-index: 99;
  & > :nth-child(n + 2) {
    border-top: ${themeGet('borders.1')} ${themeGet('colors.azureish-white')};
  }
`

const TouchableText = styled(Touchable)`
  width: 100%;
  :hover {
    background-color: ${themeGet('colors.white-smoke')};
  }
`

MenuList.propTypes = {
  arrowAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectItem: PropTypes.func.isRequired
}
MenuList.defaultProps = {
  arrowAlignment: 'right'
}

export default MenuList
