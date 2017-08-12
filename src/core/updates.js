
import {compress, safe} from 'raid-addons'

import appActions from 'core/actions'
import {createTodo} from 'core/todos'

export const debug = (state, event) => {
  console.log(state, '::', event)
  return state
}

const addTodo = safe((state, payload) => {
  const {todos, newTodo} = state

  if (newTodo) {
    state.todos = todos.concat(createTodo(newTodo))
  }

  state.newTodo = ''
})

export const todos = compress({
  [appActions.addTodo]: addTodo
})
