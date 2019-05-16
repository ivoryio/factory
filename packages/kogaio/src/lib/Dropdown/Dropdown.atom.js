import React, { Children, cloneElement, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeGet } from 'styled-system'

import {
  ConditionalWrap,
  randomiser,
  useBoolean,
  isMobileDevice
} from '../utils'

import Icon from '../Icon'
import Modal from '../Modal'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Flex, Space } from '../Responsive'
import Option, { DropdownItem } from './Option'

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
  const [updatedChildren, setUpdatedChildren] = useState(children)

  useEffect(() => {
    if (autoFocus) {
      setListOpen(true)
    }
  }, [autoFocus, setListOpen])

  useEffect(() => {
    const newChildren = Children.toArray(children).map(child =>
      cloneElement(child, {
        selectOption,
        shouldShow: isListOpen,
        isSelected: value.includes(child.props.value)
      })
    )
    setUpdatedChildren(newChildren)

    function selectOption (option) {
      return () => {
        if (multiple) {
          return handleSelect(option)
        }
        handleSelect(option)
        setListOpen(false)
      }
    }
  }, [children, handleSelect, isListOpen, multiple, setListOpen, value])

  useEffect(() => {
    document.addEventListener('click', _handleBackdropClick)
    return () => document.removeEventListener('click', _handleBackdropClick)

    function _handleBackdropClick (ev) {
      const dropdownEl = document.getElementById(id)
      if (dropdownEl && isListOpen) {
        const isClickOutside = !dropdownEl.contains(ev.target)
        if (isClickOutside) {
          setListOpen(false)
        }
      }
    }
  }, [handleSelect, id, isListOpen, multiple, setListOpen])

  const toggleDropdown = ev => {
    if (disabled) {
      return ev.preventDefault()
    }
    toggle()
  }

  const DropdownList = props => (
    <Space m={0} p={0}>
      <List
        animated={animated}
        as="ul"
        id={id}
        isOpen={isListOpen}
        numOfElements={children.length}
        size={size}
        {...props}>
        {updatedChildren}
      </List>
    </Space>
  )

  return (
    <Flex flexDirection="column" position="relative" {...rest}>
      {label && (
        <Typography as="label" htmlFor={id} variant="inputLabel">
          {label} {required && '*'}
        </Typography>
      )}
      <Touchable disabled={disabled} onClick={toggleDropdown}>
        <Space px={2}>
          <SelectedItem
            as="li"
            className="dropdown-selected-item"
            error={error}
            isActive={isListOpen}>
            <Typography
              color={value ? 'dark-gunmetal' : 'manatee'}
              truncate
              variant="list">
              {value || placeholder}
            </Typography>
            <DropdownChevron
              color="independence"
              fontSize={4}
              isOpen={isListOpen}
              name="arrow_drop_down"
            />
          </SelectedItem>
        </Space>
      </Touchable>
      <ConditionalWrap
        condition={isMobileDevice()}
        wrap={() => (
          <Modal visible={isListOpen}>
            <DropdownList isMobile />
          </Modal>
        )}>
        <DropdownList />
      </ConditionalWrap>
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
const animateDrop = ({ animated, isOpen }) =>
  animated
    ? css`
        transform: ${!isOpen
          ? `translateY(-12px); z-index: -1;`
          : `translateY(0); z-index: 2;`};
        transition: transform 0.3s ease;
      `
    : null

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
const List = styled(Flex)`
  background-color: ${themeGet('colors.white')};
  border: ${({ isOpen }) => themeGet(`borders.${isOpen ? 1 : 0}`)}
    ${themeGet('colors.azure-white')};
  border-block-start: none;
  border-bottom-left-radius: ${themeGet('radii.2', 2)}px;
  border-bottom-right-radius: ${themeGet('radii.2', 2)}px;
  flex-direction: column;
  list-style-type: none;
  z-index: 1;
  ${calcSize}
  ${animateDrop}
  ${responsiveListStyle}
`
const selectedBorderStyle = ({ error, isActive }) => css`
  border-top-left-radius: ${themeGet('radii.2', 2)}px;
  border-top-right-radius: ${themeGet('radii.2', 2)}px;
  border: ${themeGet('borders.1')} ${themeGet('colors.azure-white')};
  border-color: ${error && themeGet('colors.error')};
  border-color: ${isActive && themeGet('colors.gunmetal')};
  &:hover {
    border: 1px solid ${themeGet('colors.gunmetal', '#243143')};
  }
`
const SelectedItem = styled(DropdownItem)`
  background-color: ${themeGet('colors.white', '#fff')};
  z-index: 3;
  ${selectedBorderStyle}
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
  id: `iv-dropdown-${randomiser}`,
  multiple: false,
  onChange: () => console.warn('* Dropdown expects an onChange function'),
  placeholder: 'Select an option...',
  required: false,
  size: 5,
  value: ''
}

Dropdown.displayName = 'Dropdown'
Dropdown.Option = Option
export default Dropdown
