import React, { useState } from 'react'
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

import { Box } from '../Responsive'
import Icon from '../Icon'
import Text from '../Text'
import Touchable from '../Touchable'

const Dropdown = ({
  onChangeOption,
  options,
  placeholder,
  selectedOption,
  ...rest
}) => {
  const [showList, setShowList] = useState(false)
  const toggleDropdown = () => setShowList(!showList)
  const selectOption = option => () => {
    onChangeOption(option)
    toggleDropdown()
  }

  return (
    <Container showList={showList} {...rest}>
      <TouchablePlaceholder onClick={toggleDropdown} pl={2}>
        <Text
          color='manatee'
          fontSize='1em'
        >
          {selectedOption || placeholder}
        </Text>
        <Icon
          alignSelf='center'
          color='independence'
          fontSize='1.5em'
          name={showList ? 'arrow_drop_down' : 'arrow_drop_up'}
        />
      </TouchablePlaceholder>
      {showList && (
        <ListWrapper>
          {options.map(option => (
            <TouchableText key={option.key} onClick={selectOption(option.name)} pl={2}>
              <Text color='dark-gunmetal' fontSize='1em'>
                {option.name}
              </Text>
            </TouchableText>
          ))}
        </ListWrapper>
      )}
    </Container>
  )
}

const containerVerticalPadding = css`
  padding-block-end: ${themeGet('space.1')}px;
  padding-block-start: ${themeGet('space.1')}px;
`
const containerTopPadding = css`
  padding-block-start: ${themeGet('space.1')}px;
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: ${themeGet('colors.white')};
  border-radius: ${themeGet('space.1')}px;
  box-shadow: 0 1px 2px 0 rgba(102, 113, 123, 0.21), 0 0 0 1px rgba(102, 113, 123, 0.25);
  border: solid 1px ${themeGet('colors.azureish-grey')};
  ${props => props.showList ? containerTopPadding : containerVerticalPadding};
  ${alignItems}
  ${alignSelf}
  ${borderColor}
  ${borderRadius}
  ${borders}
  ${bottom}
  ${color}
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

const TouchablePlaceholder = styled(Touchable)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-start: ${themeGet('space.1')}px;
  & > button {
    border-block-start: 1px solid ${themeGet('colors.azureish-grey')};
  }
`
const TouchableText = styled(Touchable)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-block-end: ${themeGet('space.2')}px;
  padding-block-start: ${themeGet('space.2')}px;
  :hover {
    background-color: ${themeGet('colors.white-smoke')};
  }
`

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  selectedOption: PropTypes.string,
  onChangeOption: PropTypes.func.isRequired
}

Dropdown.defaultProps = {
  placeholder: 'Choose one option'
}
export default Dropdown
