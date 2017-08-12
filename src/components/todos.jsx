
import {connect} from 'signals'

import Todo from './todo'

const Todos = ({todos}) => {
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
        // onChange={this.toggleAll}
        // checked={activeTodoCount === 0}
      />
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

export default connect(
  ({todos}) => ({todos}),
  Todos
)
