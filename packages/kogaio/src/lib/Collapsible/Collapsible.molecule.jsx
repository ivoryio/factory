import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { effects } from '../Touchable/Touchable.atom'
import Icon from '../Icon'
import Touchable from '../Touchable'
import Typography from '../Typography'
import { Box, Flex, Space } from '../Responsive'

const Collapsible = ({
  animated,
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
  const collapsibleRef = useRef()
  const [isOpen, setIsOpen] = useState(initialExpanded)
  const maxHeight = useCollapsibleHeight(collapsibleRef, {
    initialExpanded
  })

  const toggleContainer = () => {
    setIsOpen(prevOpen => !prevOpen)
  }

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
        <Content
          animated={animated}
          className='collapsible-content'
          duration={animationDuration}
          isOpen={isOpen}
          maxHeight={maxHeight}
          ref={collapsibleRef}>
          {children}
        </Content>
      </Box>
    </Box>
  )
}

const useCollapsibleHeight = (collapsibleRef, { initialExpanded }) => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (collapsibleRef.current && initialExpanded) {
      setHeight(() => collapsibleRef.current.scrollHeight)
    }
  }, [collapsibleRef, initialExpanded])

  const observerConfig = useRef({
    attributes: true,
    characterData: true,
    childlist: true,
    subtree: true
  })
  const observer = useRef(
    new MutationObserver(mutations => {
      setHeight(() => mutations[0].target.scrollHeight)
    })
  )
  useEffect(() => {
    const heightObserver = observer.current
    heightObserver.observe(collapsibleRef.current, observerConfig.current)
    return () => {
      heightObserver.disconnect()
    }
  }, [collapsibleRef, observer])

  return height
}

const rotate = ({ isOpen }) => css`
  transform: rotate(${!isOpen ? '0deg' : '180deg'});
  transition: transform 330ms ease;
`
const ToggleIcon = styled(Icon)`
  ${rotate};
`

const contentHeight = ({ isOpen, maxHeight }) =>
  !isOpen
    ? css`
        max-height: 0;
      `
    : css`
        max-height: ${maxHeight}px;
      `
const animateAction = ({ animated, duration, isOpen }) => {
  if (animated) {
    return !isOpen
      ? css`
          transition: max-height ${duration}ms cubic-bezier(0, 0.6, 0.6, 1);
        `
      : css`
          transition: max-height ${duration}ms ease-in;
        `
  }
  return null
}

const Content = styled(Box)`
  overflow: hidden;
  position: static;

  &::-webkit-scrollbar {
    width: 0;
  }

  ${contentHeight};
  ${animateAction};
`

Collapsible.propTypes = {
  animated: PropTypes.bool,
  animationDuration: PropTypes.number,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** icon: { name: String, color: String, size: oneOf(String, Number) }*/
  icon: PropTypes.object,
  initialExpanded: PropTypes.bool,
  title: PropTypes.string,
  Trigger: PropTypes.func,
  triggerEffect: PropTypes.oneOf(effects),
  underlayColor: PropTypes.string
}

Collapsible.defaultProps = {
  animated: true,
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
