
import cx from 'classnames'

import {dispatch} from 'signals'
import appActions from 'core/actions'

const dispatchRemove = dispatch(appActions.removeTodo)
const dispatchEdit = dispatch(appActions.editTodo)
const dispatchToggle = dispatch(appActions.toggleTodo)

const onRemove = id => event => dispatchRemove({id})
const onEdit = id => event => dispatchEdit({id})
const onToggle = id => event => dispatchToggle({id})

const Todo = ({id, title, completed, editing}) => {
  return (
    <li className={cx({completed, editing})}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={completed}
          onChange={onToggle(id)}
        />
        <label onDoubleClick={onEdit(id)}>{title}</label>
        <button
          className='destroy'
          onClick={onRemove(id)}
        />
      </div>
      {/* { editing && (
      <input
      class='edit'
      value={editText}
      onBlur={this.handleSubmit}
      onInput={this.linkState('editText')}
      onKeyDown={this.handleKeyDown}
      />
      ) } */}
    </li>
  )
}

export default Todo
