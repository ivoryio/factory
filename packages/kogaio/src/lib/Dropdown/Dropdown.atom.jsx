import React, { useCallback, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import {
  ConditionalWrap,
  isMobileDevice,
  themed,
  themeGet,
  useBoolean
} from '../utils'

import Icon from '../Icon'
import Modal from '../Modal'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Flex, Space } from '../Responsive'
import { Sublabel } from '../Input/Sublabel'
import List, { dropdownStyle } from './List'
import Option, { DropdownItem } from './Option'

const DUMMY_SPACE = 20
const Dropdown = ({
  autoFocus,
  children,
  containerStyle,
  disabled,
  error,
  id,
  label,
  multiple,
  noBottomSpace,
  onChange,
  placeholder,
  readOnly,
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

  const toggleDropdown = useCallback(
    ev => (disabled ? ev.preventDefault() : toggle()),
    [disabled, toggle]
  )

  const dropdownVariant = useMemo(() => {
    if (disabled) return 'disabled'
    if (error) return 'error'
    if (valid) return 'valid'
    return variant
  }, [disabled, error, valid, variant])

  const selectedValue = useMemo(
    () => (typeof value === 'object' ? value.label : value),
    [value]
  )

  const listProps = {
    handleSelect: onChange,
    isListOpen,
    multiple,
    renderListFooter,
    renderListHeader,
    setListOpen,
    size,
    value: selectedValue,
    variant: dropdownVariant
  }

  const currentValue = useMemo(() => {
    if (selectedValue) return selectedValue
    return readOnly ? '' : placeholder
  }, [placeholder, readOnly, selectedValue])

  return (
    <Flex
      {...containerStyle}
      flexDirection='column'
      position='relative'
      {...rest}>
      {label ? (
        <Label
          as='label'
          className='dropdown-label'
          display='block'
          htmlFor={id}
          variant='inputLabel'
          width='fit-content'>
          {label} {required ? '*' : ''}
        </Label>
      ) : null}
      <Touchable disabled={disabled || readOnly} onClick={toggleDropdown}>
        <Space pl={readOnly ? 0 : 2} pr={2}>
          <SelectedItem
            as='li'
            className={`dropdown-selected dropdown-${
              isListOpen ? 'active' : 'inactive'
            }`}
            error={error}
            readOnly={readOnly}
            variant={dropdownVariant}>
            <Typography
              className={`dropdown-${selectedValue ? 'text' : 'placeholder'}`}
              truncate
              variant='list'>
              {currentValue}
            </Typography>
            {readOnly ? null : (
              <DropdownChevron
                color='independence'
                className='dropdown-text dropdown-chevron'
                fontSize={4}
                isOpen={isListOpen}
                name='arrow_drop_down'
              />
            )}
          </SelectedItem>
        </Space>
      </Touchable>
      {[error, valid].some(item => typeof item === 'string') ? (
        <Space my={1}>
          <Sublabel
            className='input-sublabel'
            content={error || valid}
            type={error ? 'error' : 'valid'}
          />
        </Space>
      ) : (
        <Dummy className='dropdown-dummy-space' hide={noBottomSpace} />
      )}
      <ConditionalWrap
        condition={isMobileDevice}
        wrap={() => (
          <Modal visible={isListOpen}>
            <Space m={0} p={0}>
              <List
                dummySpace={noBottomSpace ? 0 : DUMMY_SPACE}
                isMobile
                {...listProps}>
                {children}
              </List>
            </Space>
          </Modal>
        )}>
        <Space m={0} p={0}>
          <List dummySpace={noBottomSpace ? 0 : DUMMY_SPACE} {...listProps}>
            {children}
          </List>
        </Space>
      </ConditionalWrap>
    </Flex>
  )
}

const Label = styled(Typography)`
  ${themed('Dropdown.label')}
`

const readOnlyStyle = css`
  background-color: transparent;
  border: ${themeGet('borders.1')} transparent;

  &.dropdown-selected,
  &.dropdown-selected:hover {
    background-color: transparent;
    border: ${themeGet('borders.1')} transparent;
    cursor: initial;
  }
`
const SelectedItem = styled(DropdownItem)`
  background-color: ${themeGet('colors.white')};
  z-index: 3;

  .dropdown-placeholder {
    color: ${themeGet('colors.manatee')};
  }

  ${dropdownStyle}
  ${({ readOnly }) => (readOnly ? readOnlyStyle : null)}
`
const rotate = css`
  ${({ isOpen }) =>
    `transition: transform 330ms ease;
      transform: rotate(${!isOpen ? '0deg' : '180deg'})`}
`
const DropdownChevron = styled(Icon)`
  ${rotate}
  ${themed('Dropdown.chevron')}
`

const Dummy = styled.div`
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  height: ${DUMMY_SPACE}px;
  opacity: 0;
  visibility: hidden;
`

Dropdown.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  containerStyle: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  multiple: PropTypes.bool,
  noBottomSpace: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  renderListFooter: PropTypes.func,
  renderListHeader: PropTypes.func,
  required: PropTypes.bool,
  size: PropTypes.number,
  valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  variant: PropTypes.string
}

Dropdown.defaultProps = {
  autoFocus: false,
  children: [],
  disabled: false,
  multiple: false,
  onChange: () => console.warn('* Dropdown expects an onChange function'),
  placeholder: 'Select an option',
  readOnly: false,
  required: false,
  size: 5,
  value: '',
  variant: 'default'
}

Dropdown.Option = Option
Dropdown.displayName = 'Dropdown'
export default Dropdown
