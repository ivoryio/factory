import React, { Children, cloneElement, isValidElement, useEffect } from 'react'
import PropTypes from 'prop-types'
import { variant } from 'styled-system'
import styled, { css } from 'styled-components'

import { themeGet } from '../utils'

import { Flex } from '../Responsive'

export const dropdownStyle = variant({
  scale: 'dropdowns',
  prop: 'variant'
})

const List = ({
  children,
  handleSelect,
  isListOpen,
  listId,
  multiple,
  setListOpen,
  size,
  value,
  ...props
}) => {
  useEffect(() => {
    document.addEventListener('click', _handleBackdropClick)
    return () => document.removeEventListener('click', _handleBackdropClick)

    function _handleBackdropClick (ev) {
      const dropdownEl = document.getElementById(listId)
      if (dropdownEl && isListOpen) {
        const isClickOutside = !dropdownEl.contains(ev.target)
        if (isClickOutside) setListOpen(false)
      }
    }
  }, [isListOpen, listId, multiple, setListOpen])

  const selectOption = option => () => {
    if (multiple) return handleSelect(option)

    handleSelect(option)
    setListOpen(false)
  }
  return (
    <Container
      as='ul'
      className='dropdown-list'
      id={listId}
      isOpen={isListOpen}
      numOfElements={children.length}
      size={size}
      {...props}>
      {Children.toArray(children).map(child =>
        isValidElement(child)
          ? cloneElement(child, {
              selectOption,
              shouldShow: isListOpen,
              isSelected: value.includes(child.props.value)
            })
          : null
      )}
    </Container>
  )
}

const calcSize = () => ({ isOpen, numOfElements, size }) => {
  const GUTTER = 4
  const ITEM_HEIGHT = 36
  if (!isOpen) return `max-height: 0; visibility: hidden;`
  if (numOfElements <= size)
    return `max-height: ${size * ITEM_HEIGHT + GUTTER}px;`
  return `
    max-height: ${size * ITEM_HEIGHT + GUTTER * 2}px;
    overflow-y: auto;
    scroll-behavior: smooth;
  `
}

const responsiveListStyle = ({ isMobile }) => css`
  top: ${({ isMobile }) => (isMobile ? '50%' : '100%')};
  position: ${({ isMobile }) => (isMobile ? 'fixed' : 'absolute')};
  width: 100%;
  ${isMobile
    ? `
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
  `
    : null};
`

const Container = styled(Flex)`
  background-color: ${themeGet('colors.white')};
  border: ${({ isOpen }) => themeGet(`borders.${isOpen ? 1 : 0}`)}
    ${themeGet('colors.azure-white')};
  border-block-start: none;
  border-bottom-left-radius: ${themeGet('radii.2', 2)}px;
  border-bottom-right-radius: ${themeGet('radii.2', 2)}px;
  flex-direction: column;
  height: auto;
  list-style-type: none;
  z-index: 2;

  ${calcSize}
  ${responsiveListStyle}
  ${dropdownStyle}
`

List.propTypes = {
  children: PropTypes.node.isRequired,
  handleSelect: PropTypes.func.isRequired,
  isListOpen: PropTypes.bool.isRequired,
  listId: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  setListOpen: PropTypes.func,
  size: PropTypes.number,
  value: PropTypes.string
}

export default List
