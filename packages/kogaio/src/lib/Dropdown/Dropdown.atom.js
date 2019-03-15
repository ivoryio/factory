import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  alignItems,
  alignSelf,
  borderColor,
  borderRadius,
  borders,
  bottom,
  color,
  colorStyle,
  display,
  flex,
  flexBasis,
  justifyContent,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  overflow,
  position,
  right,
  themeGet,
  top,
  space
} from 'styled-system'

import { Box, Space } from '../Responsive'
import Icon from '../Icon'
import Typography from '../Typography'
import Touchable from '../Touchable'
import { useBoolean } from '../utils'

const Dropdown = ({
  animated,
  id,
  onChangeOption,
  options,
  placeholder,
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
      const isClickInside = dropdownEl.contains(ev.target)
      if (!isClickInside) {
        setListShown(false)
      }
    }
    document.addEventListener('click', _handleBackDropClick)
    return () => document.removeEventListener('click', _handleBackDropClick)
  }, [])

  return (
    <Container isListShown={isListShown} id={id} {...rest}>
      <Space p={2}>
        <SelectedOption onClick={toggleList}>
          <Typography color={selectedOption ? 'dark-gunmetal' : 'manatee'}>
            {selectedOption || placeholder}
          </Typography>
          <Icon
            alignSelf='center'
            color='independence'
            fontSize='1.5em'
            name={isListShown ? 'arrow_drop_down' : 'arrow_drop_up'}
          />
        </SelectedOption>
      </Space>
      {isListShown ? (
        <ListWrapper animated={animated}>
          {options.map(option => (
            <Space key={option.key} p={2}>
              <Option onClick={selectOption(option.name)}>
                <Typography color='dark-gunmetal' fontSize='1em'>
                  {option.name}
                </Typography>
              </Option>
            </Space>
          ))}
        </ListWrapper>
      ) : null}
    </Container>
  )
}

const animated = css`
  ${props =>
    props.animated &&
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

const Container = styled(Box)`
  border: solid 1px ${themeGet('colors.azureish-grey')};
  border-radius: ${themeGet('radii.2', 4)}px;
  background-color: ${themeGet('colors.white')};
  display: flex;
  flex-direction: column;

  ${alignItems}
  ${alignSelf}
  ${borderColor}
  ${borderRadius}
  ${borders}
  ${bottom}
  ${color}
  ${colorStyle}
  ${display}
  ${flex}
  ${flexBasis}
  ${justifyContent}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${opacity}
  ${overflow}
  ${position}
  ${right}
  ${space}
  ${top}
`
const SelectedOption = styled(Touchable)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${animated}

  & > button:nth-child(n + 1) {
    border-block-start: 1px solid ${themeGet('colors.light-gray')};
  }
`
const Option = styled(SelectedOption)`
  text-align: left;
  width: 100%;
  &:hover {
    background-color: ${themeGet('colors.white-smoke')};
  }
`

Dropdown.propTypes = {
  animated: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChangeOption: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  selectedOption: PropTypes.string
}

Dropdown.defaultProps = {
  animated: false,
  placeholder: 'Choose one option'
}
export default Dropdown
