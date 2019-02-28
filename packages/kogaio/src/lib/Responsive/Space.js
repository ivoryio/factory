import React, { Children, cloneElement, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

const StyledChildren = ({ className, children }) => {
  const classnames = (...args) => args.join(' ')
  const getClassName = el => (el.props && el.props.className) || ''
  const styledChildren = Children.toArray(children).map(child =>
    cloneElement(child, {
      className: classnames(getClassName(child), className)
    })
  )

  return <Fragment>{styledChildren}</Fragment>
}

const Space = styled(StyledChildren)([], space)
StyledChildren.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
}
Space.propTypes = space.propTypes

export default Space
