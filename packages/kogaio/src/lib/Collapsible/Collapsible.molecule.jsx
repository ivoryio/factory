import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { useBoolean } from '../utils'
import { effects } from '../Touchable/Touchable.atom'

import Icon from '../Icon'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Box, Flex } from '../Responsive'

const Collapsible = ({
  animationDuration,
  children,
  color,
  icon,
  fontSize,
  isExpanded,
  title,
  trigger,
  triggerEffect,
  underlayColor,
  ...rest
}) => {
  const [isOpen, _, toggleContainer] = useBoolean(isExpanded) // eslint-disable-line no-unused-vars
  return (
    <Box bg="transparent" {...rest}>
      <Touchable
        effect={triggerEffect}
        onClick={toggleContainer}
        underlayColor={underlayColor}
        width={1}>
        {trigger || (
          <Flex alignItems="center" justifyContent="space-between" width={1}>
            <Typography color={color} fontSize={fontSize}>
              {title}
            </Typography>
            <ToggleIcon
              color={icon.color || color}
              fontSize={fontSize || icon.size}
              name={icon.name || 'arrow_drop_down_circle'}
              isOpen={isOpen}
            />
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
    `transition: transform 0.25s ease; transform: rotate(${
      !isOpen ? '0deg' : '180deg'
    })`}
`
const ToggleIcon = styled(Icon)`
  ${rotate}
`

const Content = styled(Box)`
  max-height: ${({ isOpen }) => (!isOpen ? 0 : `${window.innerHeight}px`)};
  transition: max-height ${({ duration }) => duration}s
    ${({ isOpen }) => (!isOpen ? 'cubic-bezier(0, 1, 0, 1)' : 'ease-in-out')};
  overflow: hidden;
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
  trigger: PropTypes.node,
  triggerEffect: PropTypes.oneOf(effects),
  underlayColor: PropTypes.string
}

Collapsible.defaultProps = {
  animationDuration: 0.25,
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
