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
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r},${g},${b},${alpha})`
  }
  return `rgb(${r}, ${g}, ${b})`
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
