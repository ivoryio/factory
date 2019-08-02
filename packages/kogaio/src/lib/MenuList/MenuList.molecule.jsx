import React, { Children, cloneElement, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  border,
  compose,
  color,
  colorStyle,
  flexbox,
  layout,
  position,
  space
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { themeGet, useBoolean } from '../utils'

import Icon from '../Icon'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Box, Space } from '../Responsive'

const MenuList = ({
  alignment,
  children,
  containerStyle,
  Trigger,
  icColor,
  icName,
  icSize,
  id,
  listItems,
  onSelect: selectItem,
  ...rest
}) => {
  const [isMenuShown, showMenu, toggleMenu] = useBoolean(false)

  useEffect(() => {
    window.addEventListener('click', _handleDocumentBodyClick)
    return () => window.removeEventListener('click', _handleDocumentBodyClick)

    function _handleDocumentBodyClick (ev) {
      const bodyEl = document.getElementById(id)
      if (bodyEl) {
        const isClickInside = bodyEl.contains(ev.target)
        if (!isClickInside) showMenu(false)
      }
    }
  }, [id, showMenu])

  const _selectItem = item => () => {
    selectItem(item)
    showMenu(false)
  }

  return (
    <Container {...containerStyle} alignment={alignment} id={id}>
      <Space px={2}>
        <Touchable effect="opacity" onClick={toggleMenu}>
          {Trigger || (
            <Icon color={icColor} fontSize={`${icSize}px`} name={icName} />
          )}
        </Touchable>
      </Space>
      {isMenuShown ? (
        <ListWrapper
          alignment={alignment}
          colors="menu-list"
          icSize={icSize}
          {...rest}>
          {Children.toArray(children).map(child =>
            cloneElement(child, {
              onSelect: _selectItem
            })
          )}
        </ListWrapper>
      ) : null}
    </Container>
  )
}

const ListItem = ({ children, id, label, onSelect: selectItem, value }) => (
  <ItemWrapper onClick={selectItem(value)}>
    <Typography color="dark-gunmetal" p={4} variant="list">
      {children || label}
    </Typography>
  </ItemWrapper>
)

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

const arrowSize = ({ arrowSize }) => css`
  width: ${arrowSize}px;
  height: ${arrowSize}px;
`

const Container = styled(Box)`
  align-items: ${alignContent};
  display: flex;
  flex-direction: column;
  justify-content: ${alignContent};
  position: relative;

  ${compose(
    flexbox,
    border,
    color,
    colorStyle,
    layout,
    position,
    space
  )}
`

const ListWrapper = styled(Box)`
  border-radius: ${themeGet('radii.1', 1)}px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  z-index: 3;

  &:after {
    box-shadow: 1px -1px 1px 0 rgba(22, 29, 37, 0.35);
    background-color: ${themeGet('colors.white')};
    content: '';
    display: block;
    position: absolute;
    top: -${props => props.arrowSize / 2}px;
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    ${alignArrow}
    ${arrowSize}
  }

  & > :nth-child(n + 2) {
    border-top: ${themeGet('borders.1')} ${themeGet('colors.azure-white')};
  }

  ${compose(
    border,
    color,
    colorStyle,
    space
  )}
`

const ItemWrapper = styled(Touchable)`
  width: 100%;
  white-space: nowrap;
  &:first-of-type {
    z-index: 1;
  }
  :hover {
    background-color: ${themeGet('colors.white-smoke')};
  }
`

MenuList.propTypes = {
  ...propTypes.border,
  ...propTypes.compose,
  ...propTypes.color,
  ...propTypes.colorStyle,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node,
  containerStyle: PropTypes.object,
  icName: PropTypes.string,
  icColor: PropTypes.string,
  icSize: PropTypes.number,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onSelect: PropTypes.func.isRequired,
  Trigger: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.element
  ])
}
ListItem.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  label: PropTypes.string,
  onSelect: PropTypes.func,
  value: PropTypes.string
}
MenuList.defaultProps = {
  alignment: 'center',
  icName: 'notification_important',
  icSize: 24
}
MenuList.displayName = 'MenuList'
MenuList.Item = ListItem
export default MenuList
