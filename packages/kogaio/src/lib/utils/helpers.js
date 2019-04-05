/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject (item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

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
  let r, g, b, a
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
    a = alpha || 'ff'
  }
  if (r.length === 1) {
    r += r
  }
  if (g.length === 1) {
    g += g
  }
  if (b.length === 1) {
    b += b
  }
  if (a.length === 1) {
    a += a
  }
  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)
  a = parseInt(a, 16) / 255
  return `rgba(${r},${g},${b},${a})`
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
