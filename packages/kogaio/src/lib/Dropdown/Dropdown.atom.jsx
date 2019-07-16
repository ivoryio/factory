import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import {
  ConditionalWrap,
  isMobileDevice,
  themed,
  themeGet,
  useBoolean
} from '../utils'

import List, { dropdownStyle } from './List'
import Option, { DropdownItem } from './Option'
import Icon from '../Icon'
import Modal from '../Modal'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Flex, Space } from '../Responsive'

const Dropdown = ({
  autoFocus,
  children,
  disabled,
  error,
  id,
  label,
  multiple,
  onChange,
  placeholder,
  renderListFooter,
  renderListHeader,
  required,
  size,
  valid,
  variant,
  value,
  ...rest
}) => {
  const [isListOpen, setListOpen, toggle] = useBoolean(false)

  useEffect(() => {
    if (autoFocus) setListOpen(true)
  }, [autoFocus, setListOpen])

  const toggleDropdown = ev => (disabled ? ev.preventDefault() : toggle())

  const dropdownVariant = (() => {
    if (disabled) return 'disabled'
    if (error) return 'error'
    if (valid) return 'valid'
    return 'default'
  })()

  const listProps = {
    handleSelect: onChange,
    isListOpen,
    listId: id,
    multiple,
    renderListFooter,
    renderListHeader,
    setListOpen,
    size,
    value,
    variant: dropdownVariant
  }

  return (
    <Flex flexDirection="column" position="relative" {...rest}>
      {label ? (
        <Label as="label" htmlFor={id} id="dropdown-label" variant="inputLabel">
          {label} {required && '*'}
        </Label>
      ) : null}
      <Touchable disabled={disabled} onClick={toggleDropdown}>
        <Space px={2}>
          <SelectedItem
            as="li"
            className={`dropdown-selected dropdown-${
              isListOpen ? 'active' : 'inactive'
            }`}
            error={error}
            variant={dropdownVariant}>
            <Typography
              className={`dropdown-${value ? 'text' : 'placeholder'}`}
              truncate
              variant="list">
              {value || placeholder}
            </Typography>
            <DropdownChevron
              color="independence"
              className="dropdown-text dropdown-chevron"
              fontSize={4}
              isOpen={isListOpen}
              name="arrow_drop_down"
            />
          </SelectedItem>
        </Space>
      </Touchable>
      <ConditionalWrap
        condition={isMobileDevice}
        wrap={() => (
          <Modal visible={isListOpen}>
            <Space m={0} p={0}>
              <List isMobile {...listProps}>
                {children}
              </List>
            </Space>
          </Modal>
        )}>
        <Space m={0} p={0}>
          <List {...listProps}>{children}</List>
        </Space>
      </ConditionalWrap>
    </Flex>
  )
}

const Label = styled(Typography)`
  ${themed('Dropdown.label')}
`

const SelectedItem = styled(DropdownItem)`
  background-color: ${themeGet('colors.white')};
  z-index: 3;

  .dropdown-placeholder {
    color: ${themeGet('colors.manatee')};
  }

  ${themed('Dropdown.selected')}
  ${dropdownStyle}
`
const rotate = css`
  ${({ isOpen }) =>
    `transition: transform 0.25s ease;
      transform: rotate(${!isOpen ? '0deg' : '180deg'})`}
`
const DropdownChevron = styled(Icon)`
  ${rotate}
  ${themed('Dropdown.chevron')}
`

Dropdown.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  renderListFooter: PropTypes.func,
  renderListHeader: PropTypes.func,
  required: PropTypes.bool,
  size: PropTypes.number,
  valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.string.isRequired,
  variant: PropTypes.string
}

Dropdown.defaultProps = {
  autoFocus: false,
  children: [],
  disabled: false,
  id: 'iv-dropdown',
  multiple: false,
  onChange: () => console.warn('* Dropdown expects an onChange function'),
  placeholder: 'Select an option',
  required: false,
  size: 5,
  value: '',
  variant: 'default'
}

Dropdown.Option = Option
Dropdown.displayName = 'Dropdown'
export default Dropdown
