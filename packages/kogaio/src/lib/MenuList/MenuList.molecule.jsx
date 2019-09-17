import React, { Children, cloneElement, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { useBoolean } from '../utils/hooks'
import { themed, themeGet } from '../utils'

import Icon from '../Icon'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Flex, Space } from '../Responsive'

const MenuList = ({
  alignment,
  arrowSize,
  children,
  disabled,
  icon,
  id,
  listStyle,
  onSelect: selectItem,
  ref,
  textAlign,
  Trigger,
  ...rest
}) => {
  const menulistRef = useRef()
  const [isMenuShown, showMenu, toggleMenu] = useBoolean(false)

  useEffect(() => {
    window.addEventListener('click', _handleDocumentBodyClick)
    return () => window.removeEventListener('click', _handleDocumentBodyClick)

    function _handleDocumentBodyClick (ev) {
      const elRef = ref || menulistRef
      if (elRef.current) {
        const isClickInside = elRef.current.contains(ev.target)
        if (!isClickInside) showMenu(false)
      }
    }
  }, [id, ref, showMenu])

  const _selectItem = item => () => {
    selectItem(item)
    showMenu(false)
  }

  return (
    <Container alignment={alignment} ref={ref || menulistRef} {...rest}>
      <Touchable
        disabled={disabled}
        effect={disabled ? 'no-feedback' : 'opacity'}
        onClick={toggleMenu}
        textAlign={alignment}
        width='fit-content'>
        {Trigger || (
          <Icon
            color={icon.color}
            fontSize={`${icon.size}px`}
            name={icon.name}
          />
        )}
      </Touchable>
      {isMenuShown ? (
        <ListWrapper
          as='ul'
          alignment={alignment}
          arrowSize={arrowSize}
          colors='menu-list'
          icSize={icon.size}
          {...listStyle}>
          {Children.toArray(children).map(child =>
            cloneElement(child, {
              alignment,
              onSelect: _selectItem
            })
          )}
        </ListWrapper>
      ) : null}
    </Container>
  )
}

const ListItem = ({
  alignment,
  children,
  color,
  disabled,
  fontFamily,
  fontSize,
  fontWeight,
  icon,
  id,
  label,
  onSelect: selectItem,
  style,
  textAlign,
  textVariant,
  value,
  ...props
}) => (
  <Space px={2}>
    <ItemWrapper
      disabled={disabled}
      onClick={selectItem(value)}
      minHeight='40px'
      width={1}
      {...props}>
      {icon && (
        <Space mr={2}>
          <Icon
            color={icon.color || (disabled ? 'pastel-blue' : 'dark-gunmetal')}
            fontSize={icon.size || 2}
            name={icon.name}
          />
        </Space>
      )}
      <Typography
        as='li'
        color={color || (disabled ? 'pastel-blue' : 'dark-gunmetal')}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign || alignment}
        variant={textVariant}
        width={1}
        {...style}>
        {children || label}
      </Typography>
    </ItemWrapper>
  </Space>
)

const validAlignment = ['left', 'center', 'right']

const alignArrow = css`
  ${props => {
    const alignment = _alignArrow()
    return `${alignment}`

    function _alignArrow () {
      const { alignment, icSize } = props
      if (!validAlignment.includes(alignment))
        return console.error(
          `* Invalid prop ${alignment} passed for alignment. Expected one of ${validAlignment}`
        )
      switch (alignment) {
        case 'left':
          return `left: calc(${icSize}px / 2);`
        case 'center':
          return `align-self: center;`
        default:
          return `right: calc(${icSize + 2}px / 2);`
      }
    }
  }}
`

const alignContent = css`
  ${({ alignment }) => {
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

const alignList = css`
  ${({ alignment }) => {
    switch (alignment) {
      case 'left':
        return 'left: 0;'
      case 'right':
        return 'right: 0;'
      default:
        break
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
  cursor: pointer;
  flex-direction: column;
  list-style-type: none;
  margin-top: ${themeGet('space.2')}px;
  margin-bottom: 0;
  padding-left: 0;
  position: absolute;
  top: 100%;
  /* stylelint-disable */
  ${alignList}
  /* stylelint-enable */

  :after {
    box-shadow: 1px -1px 1px 0 rgba(22, 29, 37, 0.1);
    background-color: ${themeGet('colors.white')};
    content: '';
    display: block;
    position: absolute;
    top: -${({ arrowSize }) => arrowSize / 2}px;
    transform: rotate(-45deg);
    ${alignArrow}
    ${arrowSize}
  }

  & > :nth-child(n + 2) {
    border-top: ${themeGet('borders.1')} ${themeGet('colors.azure-white')};
  }

  ${themed('MenuList')}
`

const ItemWrapper = styled(Touchable)`
  align-items: center;
  display: flex;
  text-align: ${({ alignment }) => alignment};
  white-space: nowrap;

  &:first-of-type {
    z-index: 1;
  }

  :hover {
    background-color: ${({ disabled }) =>
      !disabled && themeGet('colors.white-smoke')};
  }

  ${themed('MenuList.Item')}
`

MenuList.propTypes = {
  alignment: PropTypes.oneOf(validAlignment),
  arrowSize: PropTypes.number,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  icon: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  listStyle: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
  ref: PropTypes.object,
  textAlign: PropTypes.oneOf(validAlignment),
  Trigger: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.element
  ])
}

ListItem.propTypes = {
  alignment: PropTypes.oneOf(validAlignment),
  children: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string
  }),
  onSelect: PropTypes.func,
  style: PropTypes.object,
  textAlign: PropTypes.oneOf(validAlignment),
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
  textVariant: 'list'
}

MenuList.Item = ListItem
MenuList.displayName = 'MenuList'
export default MenuList
