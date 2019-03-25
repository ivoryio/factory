import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  alignContent,
  alignItems,
  alignSelf,
  background,
  border,
  borders,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  order,
  overflow,
  position,
  right,
  size,
  space,
  textAlign,
  themeGet,
  top,
  width,
  zIndex
} from 'styled-system'
import { Flex, Space } from '../Responsive'

import Card from '../Card'
import Image from '../Image'
import ListItem from './ListItem'
import Typography from '../Typography'

const SideMenu = ({ imgSrc, imgSize, list, title, subtitle, ...rest }) => (
  <Space p={3}>
    <Container colors='card-white' {...rest}>
      <Top alignItems='center'>
        <Image size={imgSize} src={imgSrc} />
        <Space px={3}>
          <Column>
            <Typography textStyle='h3'>{title}</Typography>
            <Typography textStyle='paragraph'>{subtitle}</Typography>
          </Column>
        </Space>
      </Top>
      <Space mt={4}>
        <Column justifyContent='center'>
          {list.map(item => (
            <ListItem
              key={item.title}
              icon={item.icon}
              onClick={item.onClick}
              title={item.title}
            />
          ))}
        </Column>
      </Space>
    </Container>
  </Space>
)

const Container = styled(Card)`
  box-shadow: ${themeGet('shadows.card-highlight')};
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${background}
  ${border}
  ${borders}
  ${bottom}
  ${boxShadow}
  ${color}
  ${display}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${height}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${opacity}
  ${order}
  ${overflow}
  ${position}
  ${right}
  ${size}
  ${space}
  ${textAlign}
  ${top}
  ${width}
  ${zIndex}
`

const Top = styled(Flex)``

const Column = styled(Flex)`
  flex-direction: column;
`

SideMenu.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...background.propTypes,
  ...border.propTypes,
  ...borders.propTypes,
  ...bottom.propTypes,
  ...boxShadow.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...height.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes,
  ...justifySelf.propTypes,
  ...left.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...opacity.propTypes,
  ...order.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
  imgSrc: PropTypes.string,
  imgSize: PropTypes.arrayOf(PropTypes.number),
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

SideMenu.defaultProps = {
  imgSize: [40]
}
SideMenu.displayName = 'SideMenu'

export default SideMenu
