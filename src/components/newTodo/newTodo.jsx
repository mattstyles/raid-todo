
import {compose} from 'lodash/fp'

import {connect, dispatch} from 'signals'
import {noop, isEnterKey, isEscapeKey} from 'utils'
import {getInputValue, getKey} from 'core/selectors'
import actions from './actions'
import appActions from 'core/actions'

const dispatchChange = dispatch(actions.onChange)
const dispatchEnterdown = dispatch(appActions.addTodo)
const dispatchEscapedown = dispatch(appActions.cancelTodo)

const handleEnterKey = ({key}) => {
  if (isEnterKey(key)) {
    return dispatchEnterdown({key})
  }

  if (isEscapeKey(key)) {
    return dispatchEscapedown({key})
  }

  return noop
}

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
