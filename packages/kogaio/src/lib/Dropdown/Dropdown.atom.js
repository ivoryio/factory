import React, { Children, cloneElement, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

import { useBoolean } from '../utils'

import Icon from '../Icon'
import { ListItem } from './Option'
import Typography from '../Typography'
import { Box, Flex } from '../Responsive'
const Dropdown = ({
  children,
  error,
  id,
  label,
  onChange: handleSelect,
  placeholder,
  required,
  value,
  ...rest
}) => {
  const {
    value: isListOpen,
    setValue: setListOpen,
    toggleValue: toggle
  } = useBoolean(false)

  const selectOption = option => () => {
    handleSelect(option)
    setListOpen(false)
  }

  useEffect(() => {
    const _handleBackdropClick = ev => {
      const dropdownEl = document.getElementById(id)
      if (dropdownEl) {
        const isClickInside = dropdownEl.contains(ev.target)
        if (!isClickInside) {
          setListOpen(false)
        }
      }
    }
    document.addEventListener('click', _handleBackdropClick)
    return () => document.removeEventListener('click', _handleBackdropClick)
  }, [id, setListOpen])
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
      <Header id={id} error={error} isListShown={isListOpen} onClick={toggle}>
        <SelectedItem>
          <Typography color={value ? 'dark-gunmetal' : 'manatee'}>
            {value || placeholder}
          </Typography>
          <Icon
            alignSelf="center"
            color="independence"
            fontSize="1.5em"
            name={isListOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
          />
        </SelectedItem>
      </Header>
      {isListOpen ? (
        <List
          as="ul"
          boxSizing="border-box"
          flexDirection="column"
          position="absolute"
          width={1}>
          {Children.toArray(children).map(child =>
            cloneElement(child, {
              selectOption
            })
          )}
        </List>
      ) : null}
    </Flex>
  )
}

const Header = styled(Box)`
  border: solid 1px
    ${({ error }) =>
      error ? themeGet('colors.error') : themeGet('colors.azure-white')};
  border-top-left-radius: ${themeGet('radii.2', 2)}px;
  border-top-right-radius: ${themeGet('radii.2', 2)}px;
  background-color: ${themeGet('colors.white')};
  display: flex;
  justify-content: space-between;
`
const List = styled(Flex)`
  background-color: ${themeGet('colors.white')};
  border: solid 1px ${themeGet('colors.azure-white')};
  border-block-start: none;
  border-bottom-left-radius: ${themeGet('radii.2', 2)}px;
  border-bottom-right-radius: ${themeGet('radii.2', 2)}px;
  list-style-type: none;
  margin: 0;
  padding-inline-start: 0;
  top: 100%;
  z-index: 2;

  & > button:nth-child(n + 1) {
    border-block-start: 1px solid ${themeGet('colors.light-gray')};
  }
  & > button:first-of-type {
    border-block-start: none;
  }
`

const SelectedItem = styled(ListItem)`
  width: 100%;
  &:hover {
    background-color: transparent;
  }
`

Dropdown.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.number,
  value: PropTypes.string
}
Dropdown.defaultProps = {
  children: [],
  onChange: () => console.warn('* Dropdown expects an onChange function'),
  placeholder: 'Select an option',
  required: false,
  size: 5
}
Dropdown.displayName = 'Dropdown'

export default Dropdown
