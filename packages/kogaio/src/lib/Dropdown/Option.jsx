import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Touchable from '../Touchable'
import { Flex } from '../Responsive'
import Typography from '../Typography'
import { ConditionalWrap, isMobileDevice, themeGet } from '../utils'

const Option = ({
  children,
  color,
  fontSize,
  isSelected,
  label,
  selectedColor,
  selectOption,
  shouldShow,
  value,
  ...props
}) => {
  if (!shouldShow) return null

  return (
    <Touchable
      onMouseUp={!isMobileDevice ? selectOption(value) : null}
      onTouchEnd={isMobileDevice ? selectOption(value) : null}>
      <ListItem
        as="li"
        className="dropdown-item"
        isSelected={isSelected}
        selectedColor={selectedColor}
        {...props}>
        <ConditionalWrap
          condition={
            (children && ['string', 'number'].includes(typeof children)) ||
            label
          }
          wrap={() => (
            <Typography
              color={color}
              fontSize={fontSize}
              truncate
              variant="list">
              {label || children}
            </Typography>
          )}>
          {children}
        </ConditionalWrap>
      </ListItem>
    </Touchable>
  )
}

export const DropdownItem = styled(Flex)`
  align-items: center;
  height: 36px;
  justify-content: space-between;
  text-align: left;
  width: 100%;
`

const ListItem = styled(DropdownItem)`
  background-color: ${({ isSelected, selectedColor }) =>
    isSelected && themeGet(`colors.${selectedColor}`, selectedColor)};
  margin: 0;
  padding-left: ${themeGet('space.2')}px;
  padding-right: ${themeGet('space.2')}px;

  :nth-of-type(n + 1) {
    border-top: ${themeGet('borders.1')} ${themeGet('colors.light-gray')};
  }

  &:hover {
    background-color: ${themeGet('colors.white-smoke')};
  }
`

Option.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  selectedColor: PropTypes.string,
  selectOption: PropTypes.func,
  shouldShow: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

Option.defaultProps = {
  isSelected: false,
  selectedColor: 'ghost-white',
  shouldShow: false
}

Option.displayName = 'DropdownOption'
/** @component */
export default Option
