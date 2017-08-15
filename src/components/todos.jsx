
import match from '@mattstyles/match'
import {connect, dispatch} from 'signals'
import {createSelector} from 'reselect'

import Todo from './todo'
import {
  getTodos,
  hasTodos,
  allTodosCompleted,
  getEditTodo,
  getShowingFilter
} from 'core/selectors'
import appActions from 'core/actions'
import {todoFilterTypes} from 'core/constants'

const dispatchToggleAll = dispatch(appActions.toggleAll)

const filterMatcher = filter => match([
  [() => filter === todoFilterTypes.completed,
    todo => todo.isCompleted
  ],
  [() => filter === todoFilterTypes.active,
    todo => !todo.isCompleted
  ],
  [() => true]
])

const Todos = ({todos, hasTodos, allTodosCompleted, editTodo, nowShowing}) => {
  if (!hasTodos) {
    return null
  }

  const TodoList = todos
    .filter(filterMatcher(nowShowing))
    .map(todo => (
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
  getShowingFilter,
  (todos, hasTodos, allTodosCompleted, editTodo, nowShowing) => ({
    todos, hasTodos, allTodosCompleted, editTodo, nowShowing
  })
)

export default connect(
  selector,
  Todos
)
