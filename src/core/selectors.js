
import vkey from 'vkey'
import {getCompletedCount} from 'core/todos'

/**
 * DOM Events
 */
export const getKey = ({keyCode}) => ({key: vkey[keyCode]})
export const getInputValue = ({target: {value}}) => ({value})

/**
 * Todo selectors
 */
export const allTodosCompleted =
  ({todos}) => getCompletedCount(todos) === todos.length
export const hasTodos =
  ({todos}) => todos.length
export const getTodos = ({todos}) => todos
export const getActiveCount = ({todos}) =>
  todos.length - getCompletedCount(todos)
export const getNewTodo = ({newTodo}) => newTodo
export const getEditTodo = ({editTodo}) => editTodo
export const getShowingFilter = ({nowShowing}) => nowShowing
