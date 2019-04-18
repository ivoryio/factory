import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Flex, Space } from '../Responsive'

const ListItem = ({ icon, title, onClick }) => (
  <Space py={1}>
    <Touchable effect='opacity' onClick={onClick}>
      <Flex alignItems='center'>
        <Icon name={icon} fontSize='1.5em' />
        <Space px={4}>
          <Typography variant='list'>{title}</Typography>
        </Space>
      </Flex>
    </Touchable>
  </Space>
)

ListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

ListItem.defaultProps = {
  title: 'List Item'
}

export default ListItem
