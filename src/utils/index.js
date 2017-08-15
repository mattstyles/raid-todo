
export const noop = () => {}

export const isKey = selectedKey => key => selectedKey === key
export const isEnterKey = isKey('<enter>')
export const isEscapeKey = isKey('<escape>')

export const isStringEqual = (a, b) => () => a === b

export const localSave = (key, value) => {
  try {
    const data = JSON.stringify(value)
    window.localStorage.setItem(key, data)
  } catch (err) {
    console.warn('Error saving state', err)
  }
}

export const localLoad = key => {
  try {
    const data = window.localStorage.getItem(key)
    return JSON.parse(data)
  } catch (err) {
    console.warn('Error loading state', err)
  }
}
