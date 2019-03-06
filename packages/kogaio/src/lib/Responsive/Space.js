import React, { Children, cloneElement, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../assets/theme'

const StyledChildren = ({ className, children, ...rest }) => {
  const classnames = (...args) => args.join(' ')
  const getClassName = el => (el.props && el.props.className) || ''
  const styledChildren = Children.toArray(children).map(child =>
    cloneElement(child, {
      className: classnames(getClassName(child), className),
      ...rest
    })
  )

  return <Fragment>{styledChildren}</Fragment>
}

const Space = styled(StyledChildren)`
  ${space}
`

StyledChildren.propTypes = {
  ...space.propTypes,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  theme: PropTypes.object.isRequired
}

StyledChildren.defaultProps = {
  theme
}

export default Space
