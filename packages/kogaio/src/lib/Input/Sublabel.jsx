import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../Icon'
import { themed } from '../utils'
import { Space } from '../Responsive'
import Typography from '../Typography'

export const Sublabel = ({ className, content, type }) => (
  <Wrapper className={className}>
    <>
      <Space pr={1}>
        <Icon
          color={type === 'error' ? 'error' : 'success'}
          fontSize={0}
          name={type === 'error' ? 'error_outline' : 'check_circle_outline'}
        />
      </Space>
      <Typography
        color={type === 'error' ? 'error' : 'success'}
        fontSize={0}
        width={1}>
        {content}
      </Typography>
    </>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 12px;
  ${themed('Input.sublabel')}
`

Sublabel.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'valid'])
}
Sublabel.displayName = 'Sublabel'
