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
import Text from '../Text'
import Touchable from '../Touchable'

const Dropdown = ({
  handleSelectionChange,
  options,
  placeholder,
  selectedOption,
  ...rest
}) => {
  const [showList, setShowList] = useState(false)
  const handleShowListChange = () => setShowList(!showList)
  const onClickOption = option => () => {
    handleSelectionChange(option)
    handleShowListChange(!showList)
  }
  return (
    <Container {...rest}>
      <StyledTouchable onClick={handleShowListChange}>
        <Text fontFamily='Roboto' fontSize='1em'>
          {selectedOption || placeholder}
        </Text>
      </StyledTouchable>
      {showList && (
        <ListWrapper>
          {options.map(option => (
            <OptionWrapper key={option.key}>
              <TouchableText
                onClick={onClickOption(option.name)}
              >
                <Text fontFamily='Roboto' fontSize='1em'>
                  {option.name}
                </Text>
              </TouchableText>
            </OptionWrapper>
          ))}
        </ListWrapper>
      )}
    </Container>
  )
}

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgba(22, 29, 37, 0.35);
  position: relative;
  &:after {
    box-shadow: 1px -1px 1px 0 rgba(22, 29, 37, 0.35);
    background-color: ${themeGet('colors.white')};
    content: '';
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    top: -3px;
    right: 25px;
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
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

const StyledTouchable = styled(Touchable)`
  background-color: ${themeGet('colors.white')};
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`

const ListWrapper = styled.div`
  align-items: center;
  background-color: ${themeGet('colors.white')};
  display: flex;
  flex-direction: column;
  & > :nth-child(n + 2) {
    border-top: 1px solid ${themeGet('colors.azureish-white')};
  }
`
const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`
const TouchableText = styled(Touchable)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 5px
  width: 85%;
`

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  selectedOption: PropTypes.string,
  handleSelectionChange: PropTypes.func.isRequired
}

Dropdown.defaultProps = {
  placeholder: 'Pick one option, please'
}
export default Dropdown
