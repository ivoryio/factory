import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../Icon'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Flex, Space } from '../Responsive'
import { ConditionalWrap } from '../utils'
import { effects } from '../Touchable/Touchable.atom'

const ChipBase = ({
  Avatar,
  children,
  color,
  DismissIcon,
  isClickable,
  label,
  isRounded,
  onDismiss,
  ...rest
}) => {
  const Left = ({ isRounded, ...props }) => {
    if (!Avatar) {
      return null
    }
    const Content = cloneElement(Avatar, {
      objectFit: 'contain',
      height: '100%',
      ml: isRounded ? -2 : 0,
      borderRadius: isRounded ? 'round' : 'none'
    })
    return (
      <Flex alignItems="center" height="100%" {...props}>
        {Content}
      </Flex>
    )
  }
  const Center = props => (
    <Space px={3}>
      <Flex justifyContent={!Avatar ? 'flex-start' : 'center'} {...props}>
        <Typography color={color}>{label}</Typography>
      </Flex>
    </Space>
  )
  const Right = ({ color, ...props }) => {
    if (!onDismiss) {
      return null
    }
    const ActionIcon = DismissIcon ? DismissIcon : <Icon />
    const externalProps = DismissIcon && { ...DismissIcon.props }
    const StyledDismiss = cloneElement(ActionIcon, {
      name: 'cancel',
      ...externalProps,
      fontSize: '100%',
      color
    })
    return (
      <Space pr={1}>
        <Flex alignItems="center" height="100%" {...props}>
          <Touchable
            display="flex"
            effect="opacity"
            fontSize="100%"
            onClick={onDismiss}>
            {StyledDismiss}
          </Touchable>
        </Flex>
      </Space>
    )
  }
  return (
    <ChipContainer
      borderRadius={isRounded ? '16' : 'none'}
      justifyContent={!Avatar ? 'flex-start' : 'center'}
      height="24px"
      {...rest}>
      <Left isRounded={isRounded} />
      <Center color={color} />
      <Right color={color} />
    </ChipContainer>
  )
}

const Chip = ({ onClick, touchEffect, ...props }) => {
  const isClickable = onClick && typeof onClick === 'function'
  return (
    <ConditionalWrap
      condition={isClickable}
      wrap={() => (
        <Touchable as="div" effect={touchEffect} onClick={onClick}>
          <ChipBase isClickable={isClickable} {...props} />
        </Touchable>
      )}>
      <ChipBase {...props} />
    </ConditionalWrap>
  )
}

const ChipContainer = styled(Flex)`
  white-space: nowrap;
  align-items: center;
  position: relative;
  width: fit-content;
`
ChipBase.propTypes = {
  Avatar: PropTypes.element,
  children: PropTypes.node,
  color: PropTypes.string,
  DismissIcon: PropTypes.element,
  Icon: PropTypes.element,
  isRounded: PropTypes.bool,
  isClickable: PropTypes.bool,
  label: PropTypes.string,
  onDismiss: PropTypes.func
}

ChipBase.defaultProps = {
  bg: 'brand',
  color: 'white',
  isRounded: false,
  label: 'Hello'
}

Chip.propTypes = {
  Avatar: PropTypes.element,
  color: PropTypes.string,
  DismissIcon: PropTypes.element,
  Icon: PropTypes.element,
  isRounded: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onDismiss: PropTypes.func,
  touchEffect: PropTypes.oneOf(effects)
}

Chip.defaultProps = {
  touchEffect: 'opacity'
}

export default Chip
