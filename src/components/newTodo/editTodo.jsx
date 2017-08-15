
import {compose} from 'lodash/fp'

import {connect, dispatch} from 'signals'
import {noop, isEnterKey, isEscapeKey} from 'utils'
import {getInputValue, getKey} from 'core/selectors'
import actions from './actions'

const dispatchChange = dispatch(actions.onEditChange)
const dispatchEnterdown = dispatch(actions.setTodo)
const dispatchEscapedown = dispatch(actions.cancelTodo)

const handleEnterKey = id => ({key}) => {
  if (isEnterKey(key)) {
    return dispatchEnterdown({key, id})
  }

  if (isEscapeKey(key)) {
    return dispatchEscapedown({key, id})
  }

  return noop
}

const onChange = compose(
  dispatchChange,
  getInputValue
)

const onKeyDown = id => compose(
  handleEnterKey(id),
  getKey
)

const EditTodo = ({id, editTodo}) => (
  <input
    className='edit'
    type='text'
    value={editTodo}
    onKeyDown={onKeyDown(id)}
    onChange={onChange}
    autoFocus
  />
)

export default connect(
  ({editTodo}) => ({editTodo}),
  EditTodo
)
