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
import Typography from '../Typography'
import Touchable from '../Touchable'

const MenuList = ({
  arrowAlignment,
  listItems,
  onSelectItem,
  ...rest
}) => (
  <Container {...rest}>
    <ListWrapper arrowAlignment={arrowAlignment}>
      {listItems.map(item => (
        <TouchableText
          key={item.key}
          onClick={onSelectItem(item.name)}
        >
          <Typography p={3} color='dark-gunmetal' fontSize='1em' textAlign='left'>
            {item.name}
          </Typography>
        </TouchableText>
      ))}
    </ListWrapper>
  </Container>
)

const arrowAlignment = css`
  ${props => {
    const alignment = _alignArrow()
    return `${alignment}`

    function _alignArrow () {
      const alignments = ['left', 'center', 'right']
      const { arrowAlignment } = props
      if (alignments.includes(arrowAlignment)) {
        switch (arrowAlignment) {
          case 'left':
            return `left: calc(10% + 8px); width: 8px; height: 8px; top: -4px;`
          case 'center':
            return `align-self: center;  width: 8px; height: 8px; top: -4px;`
          default:
            return `right: calc(10% + 8px);  width: 8px; height: 8px; top: -4px;`
        }
      }
      console.warn('Invalid prop: arrowAlignments must be one of these values: left, center, right')
    }
  }}
`

const Container = styled(Box)`
  border-radius: ${themeGet('radii.1')}px;
  position: relative;
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
  display: flex;
  flex-direction: column;
  &:after {
    ${arrowAlignment}
    box-shadow: 1px -1px 1px 0 rgba(22, 29, 37, 0.35);
    background-color: ${themeGet('colors.white')};
    content: '';
    display: block;
    position: absolute;
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  & > :nth-child(n + 2) {
    border-top: ${themeGet('borders.1')} ${themeGet('colors.azureish-white')};
  }
`

const TouchableText = styled(Touchable)`
  width: 100%;
  &:first-of-type { 
    z-index: 1;
  }
  :hover {
    background-color: ${themeGet('colors.white-smoke')};
  }
`

MenuList.propTypes = {
  arrowAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectItem: PropTypes.func.isRequired,
  theme: PropTypes.object
}
MenuList.defaultProps = {
  arrowAlignment: 'right'
}

export default MenuList
