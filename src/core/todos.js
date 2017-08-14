
import uuid from 'uuid/v1'
import {remove, map, reduce, filter} from 'lodash/fp'

export const createTodo = title => ({
  title: title.trim(),
  id: uuid(),
  isCompleted: false,
  editing: false
})

export const removeTodo = selectedId => remove(({id}) => id === selectedId)

export const toggleTodo = selectedId => map(todo => {
  if (todo.id !== selectedId) {
    return todo
  }

  return {
    ...todo,
    isCompleted: !todo.isCompleted
  }
})

export const getActiveCount =
  reduce((total, todo) => todo.isCompleted ? ++total : total, 0)

export const toggleAllTodos = todos => {
  const allCompleted = getActiveCount(todos) === todos.length

  return todos.map(todo => ({
    ...todo,
    isCompleted: !allCompleted
  }))
}

export const clearCompletedTodos = filter(todo => !todo.isCompleted)
