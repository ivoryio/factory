import React, { Children, cloneElement, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeGet } from 'styled-system'

import { useBoolean } from '../utils'

import Icon from '../Icon'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Flex, Space } from '../Responsive'

const Dropdown = ({
  animated,
  autoFocus,
  children,
  disabled,
  error,
  id,
  label,
  multiple,
  onChange: handleSelect,
  placeholder,
  required,
  size,
  value,
  ...rest
}) => {
  const {
    value: isListOpen,
    setValue: setListOpen,
    toggleValue: toggle
  } = useBoolean(false)
  useEffect(() => {
    if (autoFocus) {
      setListOpen(true)
    }
  }, [autoFocus, setListOpen])

  useEffect(() => {
    const _handleBackdropClick = ev => {
      const dropdownEl = document.getElementById(id)
      if (dropdownEl && isListOpen) {
        const isClickInside = dropdownEl.contains(ev.target)
        if (!isClickInside) {
          setListOpen(false)
        }
      }
    }
    document.addEventListener('click', _handleBackdropClick)
    return () => document.removeEventListener('click', _handleBackdropClick)
  }, [id, isListOpen, setListOpen])

  const selectOption = option => () => {
    if (multiple) {
      return handleSelect(option)
    }
    handleSelect(option)
    setListOpen(false)
  }

  const toggleDropdown = ev => {
    if (disabled) {
      return ev.preventDefault()
    }
    toggle()
  }
  return (
    <Flex flexDirection="column" position="relative" {...rest}>
      {label && (
        <Typography
          as="label"
          color={error ? 'error' : 'independence'}
          htmlFor={id}
          variant="inputLabel">
          {label} {required && '*'}
        </Typography>
      )}
      <Touchable disabled={disabled} onClick={toggleDropdown}>
        <Space px={2}>
          <SelectedItem
            as="li"
            className="dropdown-selected-item"
            error={error}>
            <Typography
              color={value ? 'dark-gunmetal' : 'manatee'}
              truncate
              variant="list">
              {value || placeholder}
            </Typography>
            <DropdownChevron
              color="independence"
              fontSize="1.5em"
              isOpen={isListOpen}
              name="arrow_drop_down"
            />
          </SelectedItem>
        </Space>
      </Touchable>
      <Space m={0} p={0}>
        <List
          animated={animated}
          as="ul"
          id={id}
          isOpen={isListOpen}
          numOfElements={children.length}
          size={size}
          width={1}>
          {Children.toArray(children).map(child =>
            cloneElement(child, {
              selectOption,
              shouldShow: isListOpen,
              isSelected: value.includes(child.props.value)
            })
          )}
        </List>
      </Space>
    </Flex>
  )
}

const calcSize = () => ({ isOpen, numOfElements, size }) => {
  const GUTTER = 4
  const ITEM_HEIGHT = 36
  if (!isOpen) {
    return `max-height: 0; visibility: hidden;`
  }
  if (numOfElements <= size) {
    return `max-height: ${size * ITEM_HEIGHT + GUTTER}px;`
  }
  return `
    max-height: ${size * ITEM_HEIGHT + GUTTER * 2}px;
    overflow-y: auto;
    scroll-behavior: smooth;
  `
}
const animateDrop = () => ({ animated, isOpen }) => {
  if (!animated) {
    return null
  }
  return `
  transform: ${
    !isOpen
      ? `
      translateY(-12px);
      z-index: -1;
    `
      : `translateY(0);
        z-index: 2;`
  };
  transition: transform 0.3s ease;
  `
}
const List = styled(Flex)`
  background-color: ${themeGet('colors.white')};
  border: ${({ isOpen }) => themeGet(`borders.${isOpen ? 1 : 0}`)}
    ${themeGet('colors.azure-white')};
  border-block-start: none;
  border-bottom-left-radius: ${themeGet('radii.2', 2)}px;
  border-bottom-right-radius: ${themeGet('radii.2', 2)}px;
  flex-direction: column;
  list-style-type: none;
  position: absolute;
  top: 100%;
  z-index: 1;
  ${calcSize}
  ${animateDrop}
`
export const DropdownItem = styled(Flex)`
  align-items: center;
  height: 36px;
  justify-content: space-between;
  text-align: left;
  width: 100%;
`
const SelectedItem = styled(DropdownItem)`
  background-color: ${themeGet('colors.white', '#fff')};
  border: ${themeGet('borders.1')}
    ${({ error }) => themeGet(`colors.${error ? 'error' : 'azure-white'}`)};
  border-top-left-radius: ${themeGet('radii.2', 2)}px;
  border-top-right-radius: ${themeGet('radii.2', 2)}px;
  z-index: 3;
`
const rotate = css`
  ${({ isOpen }) =>
    `transition: transform 0.25s ease;
      transform: rotate(${!isOpen ? '0deg' : '180deg'})`}
`
const DropdownChevron = styled(Icon)`
  ${rotate}
`

Dropdown.propTypes = {
  animated: PropTypes.bool,
  autoFocus: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.number,
  value: PropTypes.string.isRequired
}
Dropdown.defaultProps = {
  animated: false,
  autoFocus: false,
  children: [],
  disabled: false,
  multiple: false,
  onChange: () => console.warn('* Dropdown expects an onChange function'),
  placeholder: 'Select an option...',
  required: false,
  size: 5,
  value: ''
}
Dropdown.displayName = 'Dropdown'

export default Dropdown
