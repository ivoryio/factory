import React, { Children, cloneElement, isValidElement, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { variant } from 'styled-system'
import styled, { css } from 'styled-components'

import { themed, themeGet } from '../utils'

import { Flex } from '../Responsive'

export const dropdownStyle = variant({
  scale: 'dropdowns',
  prop: 'variant'
})

const List = ({
  children,
  className,
  dummySpace,
  handleSelect,
  isListOpen,
  multiple,
  renderListFooter,
  renderListHeader,
  setListOpen,
  size,
  value,
  variant,
  ...props
}) => {
  const listRef = useRef()

  useEffect(() => {
    window.addEventListener('click', _handleBackdropClick)
    return () => window.removeEventListener('click', _handleBackdropClick)

    function _handleBackdropClick (ev) {
      if (listRef && listRef.current && isListOpen) {
        const isClickOutside = !listRef.current.contains(ev.target)
        if (isClickOutside) setListOpen(false)
      }
    }
  }, [isListOpen, listRef, multiple, setListOpen])

  const selectOption = option => () => {
    if (multiple) return handleSelect(option)

    handleSelect(option)
    setListOpen(false)
  }
<<<<<<< HEAD

=======
  console.log(props)
>>>>>>> 713790d0d1b51e859646c4f7f41feba7240e32ac
  return (
    <Container
      as='ul'
      className={`${className} dropdown-list`}
      dummySpace={dummySpace}
      isOpen={isListOpen}
      numOfElements={children.length}
      ref={listRef}
      size={size}
      variant={variant}
      {...props}>
      {typeof renderListHeader === 'function' && isListOpen
        ? renderListHeader({ isListOpen, setListOpen })
        : null}
      {Children.toArray(children).map(child =>
        isValidElement(child)
          ? cloneElement(child, {
              selectOption,
              shouldShow: isListOpen,
              isSelected: value.includes(child.props.value)
            })
          : null
      )}
      {typeof renderListFooter === 'function' && isListOpen
        ? renderListFooter({ isListOpen, setListOpen })
        : null}
    </Container>
  )
}

const calcSize = () => ({ isOpen, numOfElements, size }) => {
  const GUTTER = 4
  const ITEM_HEIGHT = 40
  if (!isOpen) return `max-height: 0; visibility: hidden;`
  if (numOfElements <= size)
    return `max-height: ${size * ITEM_HEIGHT + GUTTER}px;`
  return `
    max-height: ${size * ITEM_HEIGHT - GUTTER * 2}px;
    overflow-y: auto;
    scroll-behavior: smooth;
  `
}

const responsiveListStyle = ({ isMobile }) => css`
  top: calc(
    ${({ dummySpace, isMobile }) =>
      isMobile ? `50% - ${dummySpace}px` : `100% - ${dummySpace}px`}
  );
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
  ${themed('Dropdown.list')}
`

List.propTypes = {
  children: PropTypes.node.isRequired,
  dummySpace: PropTypes.number,
  handleSelect: PropTypes.func.isRequired,
  isListOpen: PropTypes.bool.isRequired,
  multiple: PropTypes.bool,
  renderListFooter: PropTypes.func,
  renderListHeader: PropTypes.func,
  setListOpen: PropTypes.func,
  size: PropTypes.number,
  value: PropTypes.string
}

export default List
