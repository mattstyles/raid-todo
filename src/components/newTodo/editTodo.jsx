
import {compose} from 'lodash/fp'
import match from '@mattstyles/match'

import {connect, dispatch} from 'signals'
import {noop, isEnterKey, isEscapeKey} from 'utils'
import {getInputValue, getKey} from 'core/selectors'
import actions from './actions'

const dispatchChange = dispatch(actions.onEditChange)
const dispatchEnterDown = dispatch(actions.setTodo)
const dispatchEscapeDown = dispatch(actions.cancelTodo)

const handleEnterKey = id => match([
  [({key}) => isEnterKey(key), ({key}) => dispatchEnterDown({key, id})],
  [({key}) => isEscapeKey(key), ({key}) => dispatchEscapeDown({key, id})],
  [noop]
])

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
