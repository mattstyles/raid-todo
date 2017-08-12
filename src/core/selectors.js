
import vkey from 'vkey'

/**
 * DOM Events
 */
export const getKey = ({keyCode}) => ({key: vkey[keyCode]})
export const getInputValue = ({target: {value}}) => ({value})
