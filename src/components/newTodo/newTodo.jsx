
import {compose} from 'lodash/fp'
import match from '@mattstyles/match'

import {connect, dispatch} from 'signals'
import {noop, isEnterKey, isEscapeKey} from 'utils'
import {getInputValue, getKey} from 'core/selectors'
import actions from './actions'
import appActions from 'core/actions'

const dispatchChange = dispatch(actions.onChange)
const dispatchEnterDown = dispatch(appActions.addTodo)
const dispatchEscapeDown = dispatch(appActions.cancelTodo)

const handleEnterKey = match([
  [({key}) => isEnterKey(key), ({key}) => dispatchEnterDown({key})],
  [({key}) => isEscapeKey(key), ({key}) => dispatchEscapeDown({key})],
  [noop]
])

const onChange = compose(
  dispatchChange,
  getInputValue
)

const onEnterDown = compose(
  handleEnterKey,
  getKey
)

const NewTodo = ({newTodo}) => (
  <input
    className='new-todo'
    type='text'
    placeholder='What needs to be done?'
    value={newTodo}
    onKeyDown={onEnterDown}
    onChange={onChange}
    autoFocus
  />
)

export default connect(
  ({newTodo}) => ({newTodo}),
  NewTodo
)
