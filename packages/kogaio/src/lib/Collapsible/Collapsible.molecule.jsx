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
  isExpanded,
  title,
  Trigger,
  triggerEffect,
  underlayColor,
  ...rest
}) => {
  const [isOpen, _, toggleContainer] = useBoolean(isExpanded) // eslint-disable-line no-unused-vars
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
      <Content duration={animationDuration} isOpen={isOpen}>
        {children}
      </Content>
    </Box>
  )
}

const rotate = css`
  ${({ isOpen }) =>
    ` transform: rotate(${!isOpen ? '0deg' : '180deg'});
      transition: transform 330ms ease; 
    `}
`
const ToggleIcon = styled(Icon)`
  ${rotate}
`

const Content = styled(Box)`
  max-height: ${({ isOpen }) => (!isOpen ? 0 : `${window.innerHeight}px`)};
  overflow: hidden;
  transition: max-height ${({ duration }) => duration}ms
    ${({ isOpen }) => (isOpen ? 'ease-in' : 'cubic-bezier(0, .6, .6, 1)')};
`

Collapsible.propTypes = {
  animationDuration: PropTypes.number,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  /** icon: { name: String, color: String, size: oneOf(String, Number) }*/
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.object,
  isExpanded: PropTypes.bool,
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
  isExpanded: false,
  title: 'Collapsible',
  triggerEffect: 'opacity'
}

export default Collapsible
