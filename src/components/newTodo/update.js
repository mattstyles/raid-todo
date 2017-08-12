
import {safe, compress} from 'raid-addons'

import actions from './actions'

const onChange = safe((state, {value}) => {
  state.newTodo = value
})

export default compress({
  [actions.onChange]: onChange
})
