import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  alignContent,
  alignItems,
  alignSelf,
  background,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  borders,
  bottom,
  color,
  colorStyle,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  order,
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
import BarIcon from './BarIcon'
import Typography from '../Typography'
import { Flex, Space } from '../Responsive'

const TopBar = ({
  color,
  IconLeft,
  icLeft,
  IconRight,
  icRight,
  icSize,
  onClickLeft,
  onClickRight,
  title,
  ...rest
}) => (
  <Space p={3}>
    <Container
      color={color}
      alignItems='center'
      justifyContent='space-between'
      {...rest}
    >
      <Left>
        {IconLeft || (
          <BarIcon
            color={color}
            name={icLeft}
            fontSize={icSize}
            onClick={onClickLeft}
          />
        )}
        <Space px={3}>
          <Typography color={color} textStyle='h3'>
            {title}
          </Typography>
        </Space>
      </Left>
      <Right>
        {IconRight || (
          <BarIcon
            color={color}
            name={icRight}
            fontSize={icSize}
            onClick={onClickRight}
          />
        )}
      </Right>
    </Container>
  </Space>
)

const Container = styled(Flex)`
  background-color: ${themeGet('colors.independence', '#4f5767')};
  color: ${themeGet('colors.white')};
  width: 360px;
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${background}
  ${backgroundImage}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${backgroundSize}
  ${borders}
  ${bottom}
  ${color}
  ${colorStyle}
  ${flex}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${order}
  ${position}
  ${right}
  ${size}
  ${space}
  ${textAlign}
  ${top}
  ${width}
  ${zIndex}
`

const Left = styled(Flex)`
  align-items: center;
`

const Right = styled(Flex)`
  align-items: center;
`

TopBar.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...background.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...backgroundSize.propTypes,
  ...borders.propTypes,
  ...bottom.propTypes,
  ...color.propTypes,
  ...colorStyle.propTypes,
  ...flex.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes,
  ...justifySelf.propTypes,
  ...left.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...order.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
  color: PropTypes.string,
  icLeft: PropTypes.string,
  IconLeft: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  icRight: PropTypes.string,
  IconRight: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  icSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
}

TopBar.defaultProps = {
  color: 'white',
  icSize: '1.5em',
  title: 'Dummy title'
}
TopBar.displayName = 'TopBar'

export default TopBar
