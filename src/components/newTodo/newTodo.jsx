
import {compose} from 'lodash/fp'
import vkey from 'vkey'

import {connect, dispatch} from 'signals'
import {noop} from 'utils'
import actions from './actions'
import appActions from 'core/actions'

const dispatchChange = dispatch(actions.onChange)
const dispatchEnterdown = dispatch(appActions.addTodo)
const dispatchEnterKey = ({key}) => key === '<enter>'
  ? dispatchEnterdown({key})
  : noop

const getValue = ({target: {value}}) => ({value})
const onChange = compose(
  dispatchChange,
  getValue
)

const getKey = ({keyCode}) => ({key: vkey[keyCode]})
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
  // ({newTodo}) => ({newTodo}),
  state => ({newTodo: state.newTodo}),
  NewTodo
)
