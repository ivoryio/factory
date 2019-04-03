import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import Icon from '../Icon'
import Typography from '../Typography'

export const InputSublabel = ({ inputVariant, error, valid }) => (
  <ErrorWrapper my={1}>
    {inputVariant.includes('error') || error ? (
      <Fragment>
        <Icon color='error' fontSize='0.85em' name='error_outline' pr={1} />
        <Typography color='error' fontSize={0} width={1}>
          {error}
        </Typography>
      </Fragment>
    ) : null}
    {inputVariant.includes('valid') || valid ? (
      <Fragment>
        <Icon
          color='success'
          fontSize='0.85em'
          name='check_circle_outline'
          pr={1}
        />
        <Typography color='success' fontSize={0} width={1}>
          {valid}
        </Typography>
      </Fragment>
    ) : null}
  </ErrorWrapper>
)

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 14px;
  text-transform: capitalize;
  ${space}
`

InputSublabel.propTypes = {
  inputVariant: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}
