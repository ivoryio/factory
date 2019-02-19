import React from 'react'
import styled from 'styled-components'

const Text = ({ message }) => <Label>{message}</Label>

const Label = styled.div`
  font-size: ${props => props.fontSize || '14px'};
  ${props => props.marginTop && `margin-block-start: ${props.marginTop}`};
  ${props => props.textAlign && `text-align: ${props.props.textAlign}`};
  ${props => props.cursor && `cursor: ${props.cursor}`};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`

export default Text
