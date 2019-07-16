import { get } from '@styled-system/core'

export const themeGet = (path, fallback = null) => props =>
  get(props.theme, path, fallback)

export const themed = key => props => get(props.theme, key)

export const randomiser = Math.random()
  .toString(36)
  .substring(7)

export const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children

export const isMobileDevice = (function () {
  const hasOrientation = typeof window.orientation !== 'undefined'
  return hasOrientation || navigator.userAgent.indexOf('IEMobile') !== -1
})()
