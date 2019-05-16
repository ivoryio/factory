/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react'
import { usePrevious } from './hooks'
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject (item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

export const randomiser = Math.random()
  .toString(36)
  .substring(7)

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep (target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}

export function hexToRgbA (hex, alpha) {
  let r,
    g,
    b,
    a = alpha
  hex = hex.replace('#', '')
  switch (hex.length) {
    case 3:
      r = hex.charAt(0)
      g = hex.charAt(1)
      b = hex.charAt(2)
      break
    case 4:
      r = hex.charAt(0)
      g = hex.charAt(1)
      b = hex.charAt(2)
      a = hex.charAt(3)
      break
    case 6:
      r = hex.substring(0, 2)
      g = hex.substring(2, 4)
      b = hex.substring(4, 6)
      break
    case 8:
      r = hex.substring(0, 2)
      g = hex.substring(2, 4)
      b = hex.substring(4, 6)
      a = hex.substring(6, 8)
      break
    default:
      console.error(`* Unexpected ${hex} hex string format passed.`)
      return ''
  }
  if (typeof a === 'undefined') {
    a = 'ff'
  }
  [r, g, b, a].forEach(item =>
    item.length === 1 ? selfIncrement(item) : null
  )
  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)
  a = typeof a === 'number' ? a : parseInt(a, 16) / 255
  return `rgba(${r},${g},${b},${a})`

  function selfIncrement (item) {
    item += item
  }
}

/**
 * Simple object check.
 * @param arg
 * @returns {boolean}
 */
export function isObjectEmpty (arg) {
  if (!isObject(arg)) {
    throw new Error(
      `* Unexpected argument passed. Expected an object but received a ${typeof arg}`
    )
  }
  return !Object.keys(arg).length
}

export const mapProps = mapper => func => {
  const next = props => func(mapper(props))
  for (const key in func) {
    next[key] = func[key]
  }
  return next
}

export const isOutOfViewport = componentId => {
  const elem = document.querySelector(`#${componentId}`)
  if (!elem) {
    return null
  }

  // Get element's bounding
  const bounding = elem.getBoundingClientRect()
  // Check if it's out of the viewport on each side
  let out = {}
  out.top = bounding.top < 0
  out.left = bounding.left < 0
  out.bottom =
    bounding.bottom >
    (window.innerHeight || document.documentElement.clientHeight)
  out.right =
    bounding.right > (window.innerWidth || document.documentElement.clientWidth)
  out.any = out.top || out.left || out.bottom || out.right
  out.all = out.top && out.left && out.bottom && out.right

  return out
}

export const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children

export function delayUnmounting (Component) {
  return ({ isMounted, delayTime, ...props }) => {
    const [shouldRender, setShouldRender] = useState(isMounted)
    const prevProps = usePrevious({ isMounted, delayTime })
    useEffect(() => {
      if (prevProps) {
        const { isMounted: wasMounted } = prevProps
        if (wasMounted && !isMounted) {
          setTimeout(() => setShouldRender(false), delayTime)
        } else if (!wasMounted && isMounted) {
          setShouldRender(true)
        }
      }
    }, [delayTime, isMounted, prevProps])

    return shouldRender ? <Component {...props} /> : null
  }
}

export function isMobileDevice () {
  const hasOrientation = typeof window.orientation !== 'undefined'
  return hasOrientation || navigator.userAgent.indexOf('IEMobile') !== -1
}
