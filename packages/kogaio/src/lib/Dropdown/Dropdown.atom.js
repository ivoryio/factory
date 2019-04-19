import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { fontFamily, fontSize, themeGet } from 'styled-system'

import Icon from '../Icon'
import Touchable from '../Touchable'
import { useBoolean } from '../utils'
import Typography from '../Typography'
import { Box, Flex } from '../Responsive'

const Dropdown = ({
  animated,
  cssLabel,
  id,
  error,
  label,
  onChangeOption,
  options,
  placeholder,
  required,
  selectedOption,
  ...rest
}) => {
  const {
    value: isListShown,
    setValue: setListShown,
    toggleValue: toggleList
  } = useBoolean(false)
  const selectOption = option => () => {
    onChangeOption(option)
    setListShown(false)
  }

  useEffect(() => {
    const _handleBackDropClick = ev => {
      const dropdownEl = document.getElementById(id)
      if (dropdownEl) {
        const isClickInside = dropdownEl.contains(ev.target)
        if (!isClickInside) {
          setListShown(false)
        }
      }
    }
    document.addEventListener('click', _handleBackDropClick)
    return () => document.removeEventListener('click', _handleBackDropClick)
  }, [])
  return (
    <Flex flexDirection="column" position="relative" {...rest}>
      <DropdownLabel
        color={error ? 'error' : 'independence'}
        cssLabel={cssLabel}
        htmlFor={id}
        variant="inputLabel">
        {label} {required && '*'}
      </DropdownLabel>
      <Body id={id} error={error} isListShown={isListShown}>
        <SelectedOption onClick={toggleList}>
          <Typography color={selectedOption ? 'dark-gunmetal' : 'manatee'}>
            {selectedOption || placeholder}
          </Typography>
          <Icon
            alignSelf="center"
            color="independence"
            fontSize="1.5em"
            name={isListShown ? 'arrow_drop_up' : 'arrow_drop_down'}
          />
        </SelectedOption>
        {isListShown ? (
          <ListWrapper
            animated={animated}
            boxSizing="border-box"
            flexDirection="column"
            left={0}
            position="absolute"
            width={1}>
            {options.map(option => (
              <Option
                data-testid={option.id}
                id={option.id}
                key={option.id}
                onClick={selectOption(option.name)}>
                <Typography color="dark-gunmetal" fontSize="1em">
                  {option.name}
                </Typography>
              </Option>
            ))}
          </ListWrapper>
        ) : null}
      </Body>
    </Flex>
  )
}

const animated = ({ animated }) => css`
  ${animated &&
    `
      animation: grow 0.3s linear;
      max-height: ${window.innerHeight / 2}px;
      @keyframes grow {
      from {
        max-height: 0;
      }
      to {
        max-height: ${window.innerHeight / 2}px;
      }
    }
  `}
`

const Body = styled(Box)`
  border: solid 1px
    ${props =>
      props.error ? themeGet('colors.error') : themeGet('colors.azure-white')};
  border-top-left-radius: ${themeGet('radii.2', 2)}px;
  border-top-right-radius: ${themeGet('radii.2', 2)}px;
  background-color: ${themeGet('colors.white')};
  display: flex;
  flex-direction: column;
  &:hover {
    border: 1px solid ${themeGet('colors.gunmetal', '#243143')};
  }
`
const DropdownLabel = styled(Typography)`
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  font-family: ${themeGet('fonts.primary')};
  ${fontFamily}
  ${props => props.cssLabel};
`

const SelectedOption = styled(Touchable)`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: ${themeGet('fontSizes.1')};
  justify-content: space-between;
  width: 100%;
  padding: ${themeGet('space.2', 8)}px;
  text-align: left;
  ${fontFamily}
  ${fontSize}
`

const ListWrapper = styled(Flex)`
  ${animated}
  background-color: ${themeGet('colors.white')};
  border: solid 1px ${themeGet('colors.azure-white')};
  border-block-start: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  top: 100%;
  
  & > button:nth-child(n + 1) {
    border-block-start: 1px solid ${themeGet('colors.light-gray')};
  }
  & > button:first-of-type {
    border-block-start: none;
  }
`
const Option = styled(SelectedOption)`
  width: 100%;
  &:hover {
    background-color: ${themeGet('colors.white-smoke')};
  }
`

Dropdown.propTypes = {
  animated: PropTypes.bool,
  cssLabel: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  onChangeOption: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  selectedOption: PropTypes.string
}

Dropdown.defaultProps = {
  animated: false,
  placeholder: 'Choose one option'
}
Dropdown.displayName = 'Dropdown'

export default Dropdown
