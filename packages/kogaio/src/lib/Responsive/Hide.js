import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Hide = ({ children, rule, ...rest }) => (
  <HiddenOnScreen rule={rule} {...rest}>
    {children}
  </HiddenOnScreen>
)

const getMediaQueries = ({ xs, sm, md, lg, xlg }) => ({
  xs: `@media screen and (max-width: ${xs})`,
  sm: `@media screen and (min-width: ${xs}) and (max-width: ${sm})`,
  md: `@media screen and (min-width: ${sm}) and (max-width: ${md})`,
  lg: `@media screen and (min-width: ${md}) and (max-width: ${lg})`,
  xlg: `@media screen and (min-width: ${xlg})`
})

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
