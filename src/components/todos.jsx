
import {connect, dispatch} from 'signals'
import {createSelector} from 'reselect'

import Todo from './todo'
import {getActiveCount} from 'core/todos'
import appActions from 'core/actions'

const dispatchToggleAll = dispatch(appActions.toggleAll)

const Todos = ({todos, allTodosCompleted}) => {
  if (!todos.length) {
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
        {/* { shownTodos.map( todo => (
        <TodoItem
        todo={todo}
        onToggle={this.toggle}
        onDestroy={this.destroy}
        onEdit={this.edit}
        editing={editing === todo.id}
        onSave={this.save}
        onCancel={this.cancel}
        />
        )) } */}
      </ul>
    </section>
  )
}

const selector = createSelector(
  ({todos}) => todos,
  todos => ({
    todos,
    allTodosCompleted: getActiveCount(todos) === todos.length
  })
)

export default connect(
  // ({todos}) => ({todos}),
  selector,
  Todos
)
