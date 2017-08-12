
import uuid from 'uuid/v1'

export const createTodo = title => ({
  title,
  id: uuid(),
  completed: false
})
