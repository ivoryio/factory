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
  const handleShowListChange = () => setShowList(!showList)
  const selectOption = option => () => {
    onChangeOption(option)
    handleShowListChange()
  }
  const arrowPicker = () =>
    showList ? (
      <Icon alignSelf='center' color='independence' fontSize='1.5em' name='arrow_drop_down' />
    ) : (
      <Icon alignSelf='center' color='independence' fontSize='1.5em' name='arrow_drop_up' />
    )

  return (
    <Container showList={showList} {...rest}>
      <TouchablePlaceholder onClick={handleShowListChange}>
        <Text
          color='manatee'
          fontFamily='Roboto'
          fontSize='1em'
          ml={2}
        >
          {selectedOption || placeholder}
        </Text>
        {arrowPicker()}
      </TouchablePlaceholder>
      {showList && (
        <ListWrapper>
          {options.map(option => (
            <TouchableText key={option.key} onClick={selectOption(option.name)}>
              <Text color='dark-gunmetal' fontFamily='Roboto' fontSize='1em' ml={2}>
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
  padding-bottom: ${themeGet('space.1')}px;
  padding-top: ${themeGet('space.1')}px;
`
const containerTopPadding = css`
  padding-top: ${themeGet('space.1')}px;
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
  margin-top: ${themeGet('space.1')}px;
  & > button {
    border-top: 1px solid ${themeGet('colors.azureish-grey')};
  }
`
const TouchableText = styled(Touchable)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: ${themeGet('space.2')}px;
  padding-top: ${themeGet('space.2')}px;
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
