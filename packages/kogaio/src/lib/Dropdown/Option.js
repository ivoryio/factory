import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import PropTypes from 'prop-types'

import Touchable from '../Touchable'
import { Space } from '../Responsive'
import Typography from '../Typography'
import { SelectedItem } from './Dropdown.atom'

const Option = ({
  children,
  isSelected,
  label,
  selectOption,
  value,
  ...props
}) => (
  <ItemWrapper height="fit-content" onClick={selectOption(value)} {...props}>
    <Space m={0} px={2}>
      <ListItem isSelected={isSelected}>
        {['number', 'string'].includes(typeof children) ? (
          <Typography color="dark-gunmetal" fontSize="1em">
            {children || label}
          </Typography>
        ) : (
          children
        )}
      </ListItem>
    </Space>
  </ItemWrapper>
)

const ItemWrapper = styled(Touchable)`
  &:nth-of-type(n + 2) {
    border-block-start: 1px solid ${themeGet('colors.light-gray')};
  }
`

export const ListItem = styled(SelectedItem)`
  background-color: ${({ isSelected }) =>
    isSelected && themeGet('colors.ghost-white', '#f6f9fb')};
  &:hover {
    background-color: ${themeGet('colors.white-smoke')};
  }
`

Option.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  selectOption: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

Option.defaultProps = {
  isSelected: false,
  label: 'Option placeholder'
}

/** @component */
export default Option
