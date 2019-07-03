import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { ConditionalWrap, isMobileDevice, themeGet, useBoolean } from '../utils'

import List from './List'
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
  required,
  size,
  value,
  ...rest
}) => {
  const [isListOpen, setListOpen, toggle] = useBoolean(false)

  useEffect(() => {
    if (autoFocus) setListOpen(true)
  }, [autoFocus, setListOpen])

  const toggleDropdown = ev => (disabled ? ev.preventDefault() : toggle())

  const listProps = {
    handleSelect: onChange,
    isListOpen: isListOpen,
    listId: id,
    multiple: multiple,
    setListOpen: setListOpen,
    size: size,
    value: value
  }

  return (
    <Flex flexDirection='column' position='relative' {...rest}>
      {label ? (
        <Typography as='label' htmlFor={id} variant='inputLabel'>
          {label} {required && '*'}
        </Typography>
      ) : null}
      <Touchable disabled={disabled} onClick={toggleDropdown}>
        <Space px={2}>
          <SelectedItem
            as='li'
            className='dropdown-selected-item'
            error={error}
            isActive={isListOpen}>
            <Typography
              color={value ? 'dark-gunmetal' : 'manatee'}
              truncate
              variant='list'>
              {value || placeholder}
            </Typography>
            <DropdownChevron
              color='independence'
              fontSize={4}
              isOpen={isListOpen}
              name='arrow_drop_down'
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
  background-color: ${themeGet('colors.white')};
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
  value: PropTypes.string.isRequired,
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
  value: ''
}

Dropdown.Option = Option
Dropdown.displayName = 'Dropdown'
export default Dropdown
