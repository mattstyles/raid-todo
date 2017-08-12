
import uuid from 'uuid/v1'
import {remove} from 'lodash/fp'

export const createTodo = title => ({
  title: title.trim(),
  id: uuid(),
  completed: false,
  editing: false
})

export const removeTodo = selectedId => remove(({id}) => id === selectedId)
