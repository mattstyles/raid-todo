
import uuid from 'uuid/v1'
import {remove, map, reduce, filter, find} from 'lodash/fp'

export const createTodo = title => ({
  title: title.trim(),
  id: uuid(),
  isCompleted: false,
  isEditing: false
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

export const getCompletedCount =
  reduce((total, todo) => todo.isCompleted ? ++total : total, 0)

export const toggleAllTodos = todos => {
  const allCompleted = getCompletedCount(todos) === todos.length

  return todos.map(todo => ({
    ...todo,
    isCompleted: !allCompleted
  }))
}

export const clearCompletedTodos = filter(todo => !todo.isCompleted)

export const editTodo = id => map(todo => ({
  ...todo,
  isEditing: id === todo.id
}))

export const getTodo = selectedId => find(todo => todo.id === selectedId)

export const updateTodo = (id, props) => map(todo => {
  return todo.id === id
    ? {
      ...todo,
      ...props
    }
    : todo
})
