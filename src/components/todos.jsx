
import {connect, dispatch} from 'signals'
import {createSelector} from 'reselect'

import Todo from './todo'
import {getTodos, hasTodos, allTodosCompleted, getEditTodo} from 'core/selectors'
import appActions from 'core/actions'

const dispatchToggleAll = dispatch(appActions.toggleAll)

const Todos = ({todos, hasTodos, allTodosCompleted, editTodo}) => {
  if (!hasTodos) {
    return null
  }

  const TodoList = todos.map(todo => (
    <Todo key={todo.id} {...todo} editText={editTodo} />
  ))

  return (
    <section className='main'>
      <input
        className='toggle-all'
        type='checkbox'
        checked={allTodosCompleted}
      />
      <label
        htmlFor='toggle-all'
        onClick={dispatchToggleAll}>
        Mark all as complete
      </label>
      <ul className='todo-list'>
        {TodoList}
      </ul>
    </section>
  )
}

const selector = createSelector(
  getTodos,
  hasTodos,
  allTodosCompleted,
  getEditTodo,
  (todos, hasTodos, allTodosCompleted, editTodo) => ({
    todos, hasTodos, allTodosCompleted, editTodo
  })
)

export default connect(
  selector,
  Todos
)
