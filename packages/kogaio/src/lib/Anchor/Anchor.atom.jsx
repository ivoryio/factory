import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  border,
  color,
  compose,
  display,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { themed } from '../utils'
import Typography from '../Typography'

const Anchor = ({
  children,
  fontSize,
  fontWeight,
  href,
  target,
  rel,
  ...rest
}) => (
  <AnchorComponent
    as="a"
    href={href}
    target={target}
    rel={rel}
    variant="link"
    {...rest}>
    {children}
  </AnchorComponent>
)

const AnchorComponent = styled(Typography)`
  cursor: pointer;
  :hover {
    font-weight: normal;
  }
  ${compose(
    border,
    color,
    display,
    flexbox,
    layout,
    position,
    shadow,
    space,
    typography
  )}
  ${themed('Anchor')}
`

Anchor.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.display,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography,
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string
}

Anchor.displayName = 'Anchor'
export default Anchor
