import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import PropTypes from 'prop-types'
import Touchable from '../Touchable'
import Typography from '../Typography'

const Option = ({ children, label, selectOption, value, ...props }) => (
  <Touchable onClick={selectOption(value)} {...props}>
    <ListItem>
      {['number', 'string'].includes(typeof children) ? (
        <Typography color="dark-gunmetal" fontSize="1em">
          {children || label}
        </Typography>
      ) : (
        children
      )}
    </ListItem>
  </Touchable>
)

Option.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  selectOption: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

Option.defaultProps = {
  label: 'Option placeholder'
}

export const ListItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: ${themeGet('fontSizes.1')};
  justify-content: space-between;
  padding: ${themeGet('space.2', 8)}px;
  text-align: left;
  &:hover {
    background-color: ${themeGet('colors.white-smoke')};
  }
`
export default Option
