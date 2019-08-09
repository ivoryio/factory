import React, { Children, cloneElement, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { themeGet, useBoolean } from '../utils'

import Icon from '../Icon'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Flex, Space } from '../Responsive'

const MenuList = ({
  alignment,
  children,
  disabled,
  containerStyle,
  Trigger,
  icon,
  id,
  listItems,
  onSelect: selectItem,
  ref,
  ...rest
}) => {
  const menulistRef = useRef()
  const [isMenuShown, showMenu, toggleMenu] = useBoolean(false)

  useEffect(() => {
    window.addEventListener('click', _handleDocumentBodyClick)
    return () => window.removeEventListener('click', _handleDocumentBodyClick)

    function _handleDocumentBodyClick (ev) {
      if (menulistRef.current) {
        const isClickInside = menulistRef.current.contains(ev.target)
        if (!isClickInside) showMenu(false)
      }
    }
  }, [id, showMenu])

  const _selectItem = item => () => {
    selectItem(item)
    showMenu(false)
  }

  return (
    <Container
      {...containerStyle}
      alignment={alignment}
      ref={ref || menulistRef}>
      <Space px={2}>
        <Touchable disabled={disabled} effect="opacity" onClick={toggleMenu}>
          {Trigger || (
            <Icon
              color={icon.color}
              fontSize={`${icon.size}px`}
              name={icon.name}
            />
          )}
        </Touchable>
      </Space>
      {isMenuShown ? (
        <ListWrapper
          alignment={alignment}
          colors="menu-list"
          icSize={icon.size}
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

const ListItem = ({
  children,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  id,
  label,
  onSelect: selectItem,
  textVariant,
  value,
  ...props
}) => (
  <ItemWrapper onClick={selectItem(value)} {...props}>
    <Typography
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      p={4}
      variant={textVariant}>
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

const Container = styled(Flex)`
  align-items: ${alignContent};
  flex-direction: column;
  justify-content: ${alignContent};
  position: relative;
`

const ListWrapper = styled(Flex)`
  border-radius: ${themeGet('radii.1', 1)}px;
  flex-direction: column;
  position: absolute;
  top: 100%;

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
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node,
  containerStyle: PropTypes.object,
  disabled: PropTypes.bool,
  icon: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  listItems: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
  ref: PropTypes.object,
  Trigger: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.element
  ])
}
ListItem.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onSelect: PropTypes.func,
  textVariant: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

MenuList.defaultProps = {
  alignment: 'center',
  arrowSize: 8,
  icon: {
    name: 'notification_important',
    color: 'gunmetal',
    size: 24
  },
  zIndex: 3
}
ListItem.defaultProps = {
  color: 'dark-gunmetal',
  textVariant: 'list'
}

MenuList.displayName = 'MenuList'
MenuList.Item = ListItem
export default MenuList
