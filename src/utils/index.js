
export const noop = () => {}

export const isKey = selectedKey => key => selectedKey === key
export const isEnterKey = isKey('<enter>')
export const isEscapeKey = isKey('<escape>')

export const isStringEqual = (a, b) => () => a === b
