
import {compose} from 'lodash/fp'
import match from '@mattstyles/match'

import {connect, dispatch} from 'signals'
import {noop, isEnterKey, isEscapeKey} from 'utils'
import {getInputValue, getKey} from 'core/selectors'
import actions from './actions'

const dispatchChange = dispatch(actions.onEditChange)
const dispatchSubmit = dispatch(actions.setTodo)
const dispatchCancel = dispatch(actions.cancelTodo)

const handleEnterKey = id => match([
  [({key}) => isEnterKey(key), ({key}) => dispatchSubmit({id})],
  [({key}) => isEscapeKey(key), ({key}) => dispatchCancel({id})],
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
    onBlur={() => dispatchSubmit({id})}
    autoFocus
  />
)

export default connect(
  ({editTodo}) => ({editTodo}),
  EditTodo
)
