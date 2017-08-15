
import {compress} from 'raid-addons'

import appActions from 'core/actions'
import {
  createTodo,
  removeTodo as remove,
  toggleTodo as toggle,
  toggleAllTodos as toggleAll,
  clearCompletedTodos as clearTodos,
  editTodo as edit,
  getTodo
} from 'core/todos'

export const debug = (state, event) => {
  console.log(state, '::', event)
  return state
}

const addTodo = (state) => {
  const {todos, newTodo} = state

  return {
    ...state,
    todos: newTodo
      ? todos.concat(createTodo(newTodo))
      : todos,
    newTodo: ''
  }
}

const cancelTodo = (state) => ({
  ...state,
  newTodo: ''
})

const removeTodo = (state, {id}) => {
  const {todos} = state

  return {
    ...state,
    todos: remove(id)(todos)
  }
}

const toggleTodo = (state, {id}) => {
  const {todos} = state

  return {
    ...state,
    todos: toggle(id)(todos)
  }
}

const toggleAllTodos = (state) => {
  const {todos} = state

  return {
    ...state,
    todos: toggleAll(todos)
  }
}

const clearCompletedTodos = (state) => {
  const {todos} = state

  return {
    ...state,
    todos: clearTodos(todos)
  }
}

const editTodo = (state, {id}) => ({
  ...state,
  todos: edit(id)(state.todos),
  editTodo: getTodo(id)(state.todos).title
})

const setFilter = (state, {filter}) => ({
  ...state,
  nowShowing: filter
})

export const todos = compress({
  [appActions.addTodo]: addTodo,
  [appActions.cancelTodo]: cancelTodo,
  [appActions.removeTodo]: removeTodo,
  [appActions.toggleTodo]: toggleTodo,
  [appActions.toggleAll]: toggleAllTodos,
  [appActions.clearCompleted]: clearCompletedTodos,
  [appActions.editTodo]: editTodo,
  [appActions.setFilter]: setFilter
})
