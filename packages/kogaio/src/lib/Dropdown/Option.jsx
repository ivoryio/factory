import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Touchable from '../Touchable'
import { Flex, Space } from '../Responsive'
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
    <ListItem
      as='li'
      className='dropdown-item'
      isSelected={isSelected}
      selectedColor={selectedColor}
      {...props}>
      <Space m={0} px={2}>
        <Touchable
          onMouseUp={!isMobileDevice ? selectOption(value) : null}
          onTouchEnd={isMobileDevice ? selectOption(value) : null}
          textAlign='left'
          width={1}>
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
                variant='list'>
                {label || children}
              </Typography>
            )}>
            {children}
          </ConditionalWrap>
        </Touchable>
      </Space>
    </ListItem>
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

  :hover {
    background-color: ${themeGet('colors.white-smoke')};
  }
  :nth-of-type(n + 2) {
    border-top: ${themeGet('borders.1')} ${themeGet('colors.light-gray')};
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
