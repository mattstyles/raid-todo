
import {connect, dispatch} from 'signals'
import {createSelector} from 'reselect'

import Todo from './todo'
import {getTodos, hasTodos, allTodosCompleted} from 'core/selectors'
import appActions from 'core/actions'

const dispatchToggleAll = dispatch(appActions.toggleAll)

const Todos = ({todos, hasTodos, allTodosCompleted}) => {
  if (!hasTodos) {
    return null
  }

  const TodoList = todos.map(todo => (
    <Todo key={todo.id} {...todo} />
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
  (todos, hasTodos, allTodosCompleted) => ({
    todos, hasTodos, allTodosCompleted
  })
)

export default connect(
  selector,
  Todos
)
