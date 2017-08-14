
import uuid from 'uuid/v1'
import {remove, map, reduce} from 'lodash/fp'

export const createTodo = title => ({
  title: title.trim(),
  id: uuid(),
  completed: false,
  editing: false
})

export const removeTodo = selectedId => remove(({id}) => id === selectedId)

export const toggleTodo = selectedId => map(todo => {
  if (todo.id !== selectedId) {
    return todo
  }

  return {
    ...todo,
    completed: !todo.completed
  }
})

export const getActiveCount =
  reduce((total, todo) => todo.completed ? ++total : total, 0)

export const toggleAllTodos = todos => {
  const allCompleted = getActiveCount(todos) === todos.length

  return todos.map(todo => ({
    ...todo,
    completed: !allCompleted
  }))
}
