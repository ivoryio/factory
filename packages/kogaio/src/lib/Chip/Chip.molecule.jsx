import React, { cloneElement, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ConditionalWrap } from '../utils'

import Icon from '../Icon'
import Touchable, { effects } from '../Touchable'
import Typography from '../Typography'
import { Flex, Space } from '../Responsive'

const Chip = ({ onClick, touchEffect, ...props }) => {
  const isClickable = useMemo(() => onClick && typeof onClick === 'function', [
    onClick
  ])
  return (
    <ConditionalWrap
      condition={isClickable}
      wrap={() => (
        <Touchable as='div' effect={touchEffect} onClick={onClick}>
          <ChipBase isClickable={isClickable} {...props} />
        </Touchable>
      )}>
      <ChipBase {...props} />
    </ConditionalWrap>
  )
}

const ChipBase = ({
  Avatar,
  children,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  DismissIcon,
  isClickable,
  label,
  isRounded,
  onDismiss,
  textStyle,
  ...rest
}) => (
  <ChipContainer
    borderRadius={isRounded ? '16' : 'none'}
    justifyContent={!Avatar ? 'flex-start' : 'center'}
    height='24px'
    {...rest}>
    {Avatar ? <Left Avatar={Avatar} isRounded={isRounded} /> : null}
    <Center
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      hasAvatar={!!Avatar}
      label={label}
      textStyle={textStyle}
    />
    {onDismiss && typeof onDismiss === 'function' ? (
      <Right color={color} onDismiss={onDismiss} />
    ) : null}
  </ChipContainer>
)

const Left = ({ Avatar, isRounded, ...props }) => {
  const Content = cloneElement(Avatar, {
    objectFit: 'contain',
    height: '100%',
    ml: isRounded ? -2 : 0,
    borderRadius: isRounded ? 'round' : 'none'
  })
  return (
    <Flex alignItems='center' height='100%' {...props}>
      {Content}
    </Flex>
  )
}

const Center = ({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  hasAvatar,
  label,
  textStyle,
  ...props
}) => (
  <Space px={3}>
    <Flex justifyContent={!hasAvatar ? 'flex-start' : 'center'} {...props}>
      <Typography
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textStyle={textStyle}>
        {label}
      </Typography>
    </Flex>
  </Space>
)

const Right = ({ color, DismissIcon, fontSize, onDismiss, ...props }) => {
  const externalProps = useMemo(() => DismissIcon && { ...DismissIcon.props }, [
    DismissIcon
  ])
  const StyledDismiss = cloneElement(DismissIcon, {
    ...externalProps,
    color
  })
  return (
    <Space mr={1}>
      <Flex
        alignItems='center'
        height='100%'
        justifyContent='center'
        {...props}>
        <Touchable display='flex' effect='opacity' onClick={onDismiss}>
          {StyledDismiss}
        </Touchable>
      </Flex>
    </Space>
  )
}

const ChipContainer = styled(Flex)`
  white-space: nowrap;
  align-items: center;
  width: fit-content;
`

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

ChipBase.propTypes = {
  Avatar: PropTypes.element,
  children: PropTypes.node,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  DismissIcon: PropTypes.element,
  Icon: PropTypes.element,
  isRounded: PropTypes.bool,
  isClickable: PropTypes.bool,
  label: PropTypes.string,
  onDismiss: PropTypes.func,
  textStyle: PropTypes.string
}

Left.propTypes = {
  Avatar: PropTypes.element,
  isRounded: PropTypes.bool
}

Center.propTypes = {
  color: PropTypes.string,
  hasAvatar: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.string,
  label: PropTypes.string,
  textStyle: PropTypes.string
}

Right.propTypes = {
  color: PropTypes.string,
  DismissIcon: PropTypes.element,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.string,
  onDismiss: PropTypes.func
}

Chip.defaultProps = {
  touchEffect: 'opacity'
}

ChipBase.defaultProps = {
  bg: 'brand',
  color: 'white',
  fontFamily: 'primary',
  isRounded: false,
  label: 'Placeholder'
}

Center.defaultProps = {
  fontSize: 0,
  textStyle: 'caps'
}

Right.defaultProps = {
  DismissIcon: <Icon color='white' fontSize={3} name='cancel' />
}

export default Chip
