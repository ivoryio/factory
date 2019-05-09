import React, { Children, cloneElement, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

import { useBoolean } from '../utils'

import Icon from '../Icon'
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
  const selectedValue = typeof value === 'object' ? value.join(', ') : value
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
        <Header error={error}>
          <Space px={2}>
            <SelectedItem>
              <SelectedLabel
                color={selectedValue ? 'dark-gunmetal' : 'manatee'}>
                {selectedValue || placeholder}
              </SelectedLabel>
              <Icon
                alignSelf="center"
                color="independence"
                fontSize="1.5em"
                name={isListOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
              />
            </SelectedItem>
          </Space>
        </Header>
      </Touchable>
      {isListOpen ? (
        <Space m={0} p={0}>
          <List
            as="ul"
            id={id}
            isOpen={isListOpen}
            numOfElements={children.length}
            size={size}
            width={1}>
            {Children.toArray(children).map(child =>
              cloneElement(child, {
                selectOption,
                isSelected: selectedValue.includes(child.props.value)
              })
            )}
          </List>
        </Space>
      ) : null}
    </Flex>
  )
}

const Header = styled(Flex)`
  background-color: ${themeGet('colors.white', '#fff')};
  border: solid 1px
    ${({ error }) =>
      error ? themeGet('colors.error') : themeGet('colors.azure-white')};
  border-top-left-radius: ${themeGet('radii.2', 2)}px;
  border-top-right-radius: ${themeGet('radii.2', 2)}px;
  justify-content: space-between;
`
const calcSize = () => ({ numOfElements, size }) => {
  const GUTTER = 4
  const ITEM_HEIGHT = 36
  if (numOfElements <= size) {
    return `max-height: ${size * ITEM_HEIGHT + GUTTER}px;`
  }
  return `max-height: ${size * ITEM_HEIGHT + GUTTER * 2}px; overflow-y: auto;`
}
const List = styled(Flex)`
  background-color: ${themeGet('colors.white')};
  border: solid 1px ${themeGet('colors.azure-white')};
  border-block-start: none;
  border-bottom-left-radius: ${themeGet('radii.2', 2)}px;
  border-bottom-right-radius: ${themeGet('radii.2', 2)}px;
  box-sizing: border-box;
  flex-direction: column;
  list-style-type: none;
  position: absolute;
  top: 100%;
  z-index: 2;
  ${calcSize}
`

export const SelectedItem = styled(Flex)`
  align-items: center;
  background-color: ${({ isSelected }) => isSelected && 'pink'};
  font-size: ${themeGet('fontSizes.1')};
  height: 36px;
  justify-content: space-between;
  text-align: left;
  width: 100%;
`

const SelectedLabel = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}
Dropdown.defaultProps = {
  autoFocus: false,
  children: [],
  disabled: false,
  multiple: false,
  onChange: () => console.warn('* Dropdown expects an onChange function'),
  placeholder: 'Select an option...',
  required: false,
  size: 5
}
Dropdown.displayName = 'Dropdown'

export default Dropdown
