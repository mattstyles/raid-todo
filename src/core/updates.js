
import {compress} from 'raid-addons'

import appActions from 'core/actions'
import {createTodo, removeTodo as remove} from 'core/todos'

export const debug = (state, event) => {
  console.log(state, '::', event)
  return state
}

const addTodo = (state, payload) => {
  const {todos, newTodo} = state

  return {
    ...state,
    todos: newTodo
      ? todos.concat(createTodo(newTodo))
      : todos,
    newTodo: ''
  }
}

const removeTodo = (state, {id}) => {
  const {todos} = state

  return {
    ...state,
    todos: remove(id)(todos)
  }
}

export const todos = compress({
  [appActions.addTodo]: addTodo,
  [appActions.removeTodo]: removeTodo
})
