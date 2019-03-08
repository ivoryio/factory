import React, { useState, useEffect } from 'react'
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
  space,
  width
} from 'styled-system'

import Icon from '../Icon'
import { Box } from '../Responsive'
import Touchable from '../Touchable'
import Typography from '../Typography'

const MenuList = ({
  alignment,
  CustomToggler,
  icName,
  icSize,
  id,
  listItems,
  onSelectItem,
  ...rest
}) => {
  // #region initialisation
  const [isMenuShown, showMenu] = useState(false)
  useEffect(() => {
    window.addEventListener('click', _handleDocumentBodyClick)
  }, [])
  // #endregion

  // #region functions
  const _toggleMenuList = () => showMenu(!isMenuShown)

  const _selectItem = item => () => {
    onSelectItem(item)
    _toggleMenuList()
  }
  const _handleDocumentBodyClick = ev => {
    const bodyEl = document.getElementById(id)
    const isClickInside = bodyEl.contains(ev.target)
    if (!isClickInside) {
      showMenu(false)
    }
  }
  // #endregion

  // #region render
  return (
    <Container id={id} alignment={alignment} {...rest}>
      {CustomToggler ? (
        <CustomToggler onClick={_toggleMenuList} />
      ) : (
        <Touchable onClick={_toggleMenuList} px='6px'>
          {<Icon name={icName} fontSize={`${icSize}px`} />}
        </Touchable>
      )}
      {isMenuShown ? (
        <ListWrapper alignment={alignment} icSize={icSize} {...rest}>
          {listItems.map(item => (
            <TouchableText key={item.id} onClick={_selectItem(item.name)}>
              <Typography
                p={3}
                color='dark-gunmetal'
                fontSize='1em'
                textAlign='left'
              >
                {item.name}
              </Typography>
            </TouchableText>
          ))}
        </ListWrapper>
      ) : null}
    </Container>
  )
  // #endregion
}

const alignContent = css`
  ${props => {
    const { alignment } = props
    switch (alignment) {
      case 'left':
        return 'flex-start'
      case 'right':
        return 'flex-end'
      default:
        return 'center'
    }
  }}
`

const alignArrow = css`
  ${props => {
    const alignment = _alignArrow()
    return `${alignment}`

    function _alignArrow () {
      const alignments = ['left', 'center', 'right']
      const { alignment, icSize } = props
      if (alignments.includes(alignment)) {
        switch (alignment) {
          case 'left':
            return `left: calc(${icSize}px /2);`
          case 'center':
            return `align-self: center;`
          default:
            return `right: calc(${icSize + 2}px / 2);`
        }
      }
      console.error(
        `* Invalid prop ${alignment} passed for alignment. Expected one of values ${alignments}`
      )
    }
  }}
`

const arrowSize = css`
  ${props =>
    `width: ${props.arrowSize}px;
    height: ${props.arrowSize}px;`}
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: ${alignContent};
  align-items: ${alignContent};
  ${alignItems}
  ${alignSelf}
  ${bottom}
  ${display}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${right}
  ${space}
  ${top}
  ${width}
`

const ListWrapper = styled(Box)`
  border-radius: ${themeGet('radii.1')}px;
  position: relative;
  display: flex;
  flex-direction: column;
  &:after {
    box-shadow: 1px -1px 1px 0 rgba(22, 29, 37, 0.35);
    background-color: ${themeGet('colors.white')};
    content: '';
    display: block;
    position: absolute;
    top: -${props => props.arrowSize / 2}px;
    ${arrowSize};
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    ${alignArrow}
  }
  & > :nth-child(n + 2) {
    border-top: ${themeGet('borders.1')} ${themeGet('colors.azureish-white')};
  }
  ${borderColor}
  ${borderRadius}
  ${borders}
  ${color}
  ${colorStyle}
  ${opacity}
  ${space}
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
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  icName: PropTypes.string,
  icSize: PropTypes.number,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectItem: PropTypes.func.isRequired,
  CustomToggler: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.element
  ])
}
MenuList.defaultProps = {
  alignment: 'center',
  icName: 'notification_important',
  icSize: 24
}

export default MenuList
