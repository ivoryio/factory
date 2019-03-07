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
  overflow,
  position,
  right,
  themeGet,
  top,
  space
} from 'styled-system'

import theme from '../assets/theme'
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
    {listItems ? <ListWrapper>
      {listItems.map(item => (
        <TouchableText
          key={item.key}
          onClick={onSelectItem(item.name)}
        >
          <Text mx={3} color='dark-gunmetal' fontSize='1em' textAlign='left'>
            {item.name}
          </Text>
        </TouchableText>
      ))}
    </ListWrapper> : null}
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
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  position: relative;
  &:after {
    ${arrowVerticalAlignment}
    box-shadow: 1px -1px 1px 0 rgba(22, 29, 37, 0.35);
    background-color: ${themeGet('colors.white')};
    content: '';
    display: block;
    position: absolute;
    width: ${themeGet('space.2')}px;
    height: ${themeGet('space.2')}px;
    top: -4px;
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
  ${overflow}
  ${position}
  ${right}
  ${space}
  ${top}
`

const ListWrapper = styled.div`
  align-items: center;
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
  arrowAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectItem: PropTypes.func.isRequired,
  theme
}
MenuList.defaultProps = {
  arrowAlignment: 'right'
}

export default MenuList
