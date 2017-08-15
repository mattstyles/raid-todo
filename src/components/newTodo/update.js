
import {safe, compress} from 'raid-addons'

import actions from './actions'
import {updateTodo} from 'core/todos'

const onChange = safe((state, {value}) => {
  state.newTodo = value
})

const onEditChange = (state, {value}) => ({
  ...state,
  editTodo: value
})

const setTodo = (state, {id}) => ({
  ...state,
  editTodo: '',
  todos: updateTodo(id, {
    title: state.editTodo,
    isEditing: false
  })(state.todos)
})

const cancelTodo = (state, {id}) => ({
  ...state,
  editTodo: '',
  todos: updateTodo(id, {
    isEditing: false
  })(state.todos)
})

export default compress({
  [actions.onChange]: onChange,
  [actions.onEditChange]: onEditChange,
  [actions.setTodo]: setTodo,
  [actions.cancelTodo]: cancelTodo
})
