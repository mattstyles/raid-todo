
import cx from 'classnames'

import {dispatch} from 'signals'
import appActions from 'core/actions'
import EditTodo from './newTodo/editTodo'

const dispatchRemove = dispatch(appActions.removeTodo)
const dispatchEdit = dispatch(appActions.editTodo)
const dispatchToggle = dispatch(appActions.toggleTodo)

const onRemove = id => event => dispatchRemove({id})
const onEdit = id => event => dispatchEdit({id})
const onToggle = id => event => dispatchToggle({id})

const Todo = ({id, title, isCompleted, isEditing, editText}) => {
  return (
    <li className={cx({
      completed: isCompleted,
      editing: isEditing
    })}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={isCompleted}
          onChange={onToggle(id)}
        />
        <label onDoubleClick={onEdit(id)}>{title}</label>
        <button
          className='destroy'
          onClick={onRemove(id)}
        />
      </div>
      {isEditing && (
        <EditTodo id={id} />
      )}

    </li>
  )
}

export default Todo
