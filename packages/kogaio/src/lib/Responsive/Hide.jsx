import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Hide = ({ children, rule, ...rest }) => (
  <HiddenOnScreen rule={rule} {...rest}>
    {children}
  </HiddenOnScreen>
)

const getMediaQueries = ({ xs, sm, md, lg, xlg }) => ({
  xs: `@media only screen and (max-width: ${maxWidth(sm)})`,
  sm: `@media only screen and (min-width: ${sm}) and (max-width: ${maxWidth(md)})`,
  md: `@media only screen and (min-width: ${md}) and (max-width: ${maxWidth(lg)})`,
  lg: `@media only screen and (min-width: ${lg}) and (max-width: ${maxWidth(xlg)})`,
  xlg: `@media only screen and (min-width: ${xlg})`
})

const maxWidth = bp => `${Number(bp.replace('em', '')) - Math.pow(10, -3)}`.concat('em')

const hidden = key => ({ theme: { breakpoints }, rule, ...props }) => {
  const bps = getMediaQueries(breakpoints)
  const hideRule = rule.includes('visibility')
    ? { visibility: 'hidden', width: 'min-content' }
    : { display: 'none' }
  return props[key]
    ? {
      [bps[key]]: {
        ...hideRule
      }
    }
    : null
}

const xs = hidden('xs')
const sm = hidden('sm')
const md = hidden('md')
const lg = hidden('lg')
const xlg = hidden('xlg')

const HiddenOnScreen = styled.div([], 'display: contents;', xs, sm, md, lg, xlg)

Hide.propTypes = {
  children: PropTypes.node,
  rule: PropTypes.oneOf(['display', 'visibility']),
  md: PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  xlg: PropTypes.bool,
  xs: PropTypes.bool
}

Hide.defaultProps = {
  rule: 'display'
}

export default Hide
