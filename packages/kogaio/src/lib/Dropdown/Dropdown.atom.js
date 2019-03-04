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
  size,
  themeGet,
  top,
  space
} from 'styled-system'

import { Box } from '../Responsive'
import Text from '../Text'

const Dropdown = ({
  placeholder,
  options,
  selectedOption,
  handleSelectionChange,
  ...rest
}) => {
  const [showList, setShowList] = useState(false)
  const handleShowListChange = () => setShowList(!showList)
  const onClickOption = option => () => {
    handleSelectionChange(option)
    handleShowListChange(!showList)
  }
  return (
    <Container {...rest} id='container'>
      <Placeholder onClick={handleShowListChange}>
        <Text fontFamily='Roboto' fontSize='20px'>
          {selectedOption || placeholder}
        </Text>
      </Placeholder>
      {showList && (
        <ListWrapper>
          {options.map(option => (
            <OptionWrapper
              key={option.key}
              onClick={onClickOption(option.name)}
            >
              <TextWrapper>
                <Text fontFamily='Roboto' fontSize='20px'>
                  {option.name}
                </Text>
              </TextWrapper>
            </OptionWrapper>
          ))}
        </ListWrapper>
      )}
    </Container>
  )
}

const Container = styled(Box)`
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgba(22, 29, 37, 0.35);
  position: relative;
  &:after {
    color: ${themeGet('colors.azureish-white')};
    background-color: ${themeGet('colors.white')};
    content: '';
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    border-top: 1px solid;
    border-right: 1px solid;
    top: -5px;
    right: 15px;
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
  ${size}
  ${space}
  ${top}
`

const Placeholder = styled.div`
  background-color: ${themeGet('colors.white')};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const ListWrapper = styled.div`
  background-color: ${themeGet('colors.white')};
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :nth-child(n + 2) {
    border-top: 1px solid ${themeGet('colors.azureish-white')};
  }
`
const OptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const TextWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  selectedOption: PropTypes.string,
  handleSelectionChange: PropTypes.func.isRequired
}

Dropdown.defaultProps = {
  placeholder: 'Pick one option, please',
  width: '300px'
}
export default Dropdown