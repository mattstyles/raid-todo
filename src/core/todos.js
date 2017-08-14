
import uuid from 'uuid/v1'
import {remove, map} from 'lodash/fp'

export const createTodo = title => ({
  title: title.trim(),
  id: uuid(),
  completed: false,
  editing: false
})

export const removeTodo = selectedId => remove(({id}) => id === selectedId)

export const toggleTodo = selectedId => map(todo => {
  if (todo.id !== selectedId) {
    return
  }

  return {
    ...todo,
    completed: !todo.completed
  }
})
