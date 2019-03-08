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
      <TouchablePlaceholder onClick={toggleDropdown} px={2}>
        <Typography color='manatee' fontSize='1em'>
          {selectedOption || placeholder}
        </Typography>
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
            <ButtonWrapper
              key={option.key}
              onClick={selectOption(option.name)}
              p={2}
            >
              <Typography color='dark-gunmetal' fontSize='1em'>
                {option.name}
              </Typography>
            </ButtonWrapper>
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
  border: ${themeGet('borders.1')} ${themeGet('colors.azureish-grey')};
  ${props => (props.showList ? containerTopPadding : containerVerticalPadding)};
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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-block-start: ${themeGet('space.1')}px;
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
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  selectedOption: PropTypes.string,
  onChangeOption: PropTypes.func.isRequired
}

Dropdown.defaultProps = {
  placeholder: 'Choose one option'
}
export default Dropdown
