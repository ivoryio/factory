import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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

import { Box } from '../Responsive'
import Icon from '../Icon'
import Typography from '../Typography'
import Touchable from '../Touchable'

const Dropdown = ({
  onChangeOption,
  options,
  placeholder,
  selectedOption,
  optionVerticalPadding,
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
      <TouchablePlaceholder onClick={toggleDropdown} px={2} py={optionVerticalPadding}>
        <Typography
          color={selectedOption ? 'black' : 'manatee'}
          fontSize='1em'>
          {selectedOption || placeholder}
        </Typography>
        <Icon
          alignSelf='center'
          color='independence'
          fontSize='1.5em'
          name={showList ? 'arrow_drop_down' : 'arrow_drop_up'}
        />
      </TouchablePlaceholder>
      {showList ? (
        <ListWrapper>
          {options.map(option => (
            <ButtonWrapper
              key={option.key}
              onClick={selectOption(option.name)}
              px={2}
              py={optionVerticalPadding}
            >
              <Typography color='dark-gunmetal' fontSize='1em'>
                {option.name}
              </Typography>
            </ButtonWrapper>
          ))}
        </ListWrapper>
      ) : null}
    </Container>
  )
}

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  border: ${themeGet('borders.1')} ${themeGet('colors.azureish-grey')};
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

const TouchablePlaceholder = styled(Touchable)`
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
  & > button {
    border-block-start: 1px solid ${themeGet('colors.azureish-grey')};
  }
`
const ButtonWrapper = styled(Touchable)`
  text-align: left;
  width: 100%;
  :hover {
    background-color: ${themeGet('colors.white-smoke')};
  }
`

Dropdown.propTypes = {
  onChangeOption: PropTypes.func.isRequired,
  optionVerticalPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  selectedOption: PropTypes.string
}

Dropdown.defaultProps = {
  optionVerticalPadding: 2,
  placeholder: 'Choose one option'
}
export default Dropdown
