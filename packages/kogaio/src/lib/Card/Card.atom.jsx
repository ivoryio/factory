import styled from 'styled-components'
import {
  border,
  color,
  colorStyle,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
  variant
} from 'styled-system'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import { themed } from '../utils'

const cardStyle = variant({
  key: 'cards'
})

const Card = styled.div`
  ${cardStyle};
  ${colorStyle};
  ${themed('Card')};
  ${compose(
    border,
    color,
    compose,
    flexbox,
    layout,
    position,
    shadow,
    space,
    typography
  )};
`

Card.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.compose,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography,
  cardStyle: PropTypes.string,
  colorStyle: PropTypes.string,
  children: PropTypes.node
}

Card.defaultProps = {}
Card.displayName = 'Card'

/** @component */
export default Card
