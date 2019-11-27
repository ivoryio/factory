import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { useBoolean } from '../utils'
import { effects } from '../Touchable/Touchable.atom'

import Icon from '../Icon'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Box, Flex, Space } from '../Responsive'

const Collapsible = ({
  animationDuration,
  children,
  color,
  icon,
  fontSize,
  initialExpanded,
  title,
  Trigger,
  triggerEffect,
  underlayColor,
  ...rest
}) => {
  const [isOpen, _, toggleContainer] = useBoolean(initialExpanded) // eslint-disable-line no-unused-vars

  return (
    <Box bg='transparent' {...rest}>
      <Touchable
        effect={triggerEffect}
        onClick={toggleContainer}
        underlayColor={underlayColor}
        width='fit-content'>
        {Trigger ? (
          Trigger({ isOpen, toggleContainer })
        ) : (
          <Flex alignItems='center' justifyContent='space-between' width={1}>
            <Typography color={color} fontSize={fontSize}>
              {title}
            </Typography>
            <Space ml={3}>
              <ToggleIcon
                color={icon.color || color}
                fontSize={fontSize || icon.size}
                name={icon.name || 'arrow_drop_down_circle'}
                isOpen={isOpen}
              />
            </Space>
          </Flex>
        )}
      </Touchable>
      <Box
        className='collapsible-content-wrapper'
        height='fit-content'
        position='relative'
        visibility={isOpen ? 'visible' : 'hidden'}
        width={1}>
        <Content duration={animationDuration} isOpen={isOpen}>
          {children}
        </Content>
      </Box>
    </Box>
  )
}

const rotate = ({ isOpen }) => css`
  transform: rotate(${!isOpen ? '0deg' : '180deg'});
  transition: transform 330ms ease;
`
const ToggleIcon = styled(Icon)`
  ${rotate}
`

const contentStyle = ({ duration, isOpen }) =>
  !isOpen
    ? css`
        max-height: 0;
        transition: max-height ${duration}ms cubic-bezier(0, 0.6, 0.6, 1);
      `
    : css`
        max-height: ${window.innerHeight}px;
        transition: max-height ${duration}ms ease-in;
      `

const Content = styled(Box)`
  overflow: hidden;
  position: static;

  &::-webkit-scrollbar {
    width: 0;
  }

  ${contentStyle}
`

Collapsible.propTypes = {
  animationDuration: PropTypes.number,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  /** icon: { name: String, color: String, size: oneOf(String, Number) }*/
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.object,
  initialExpanded: PropTypes.bool,
  title: PropTypes.string,
  Trigger: PropTypes.func,
  triggerEffect: PropTypes.oneOf(effects),
  underlayColor: PropTypes.string
}

Collapsible.defaultProps = {
  animationDuration: 330,
  color: 'pastel-blue',
  icon: {
    name: 'arrow_drop_down_circle',
    size: 4
  },
  initialExpanded: false,
  title: 'Collapsible',
  triggerEffect: 'opacity'
}

export default Collapsible
