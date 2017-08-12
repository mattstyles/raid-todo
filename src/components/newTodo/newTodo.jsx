
import {compose} from 'lodash/fp'

import {connect, dispatch} from 'signals'
import {noop} from 'utils'
import {getInputValue, getKey} from 'core/selectors'
import actions from './actions'
import appActions from 'core/actions'

const dispatchChange = dispatch(actions.onChange)
const dispatchEnterdown = dispatch(appActions.addTodo)
const dispatchEnterKey = ({key}) => key === '<enter>'
  ? dispatchEnterdown({key})
  : noop

const onChange = compose(
  dispatchChange,
  getInputValue
)

const onEnterDown = compose(
  dispatchEnterKey,
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
  // state => ({newTodo: state.newTodo}),
  NewTodo
)
