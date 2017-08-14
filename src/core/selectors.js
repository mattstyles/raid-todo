
import vkey from 'vkey'
import {getActiveCount} from 'core/todos'

/**
 * DOM Events
 */
export const getKey = ({keyCode}) => ({key: vkey[keyCode]})
export const getInputValue = ({target: {value}}) => ({value})

/**
 * Todo selectors
 */
export const allTodosCompleted =
  ({todos}) => getActiveCount(todos) === todos.length
export const hasTodos =
  ({todos}) => todos.length
export const getTodos = ({todos}) => todos
