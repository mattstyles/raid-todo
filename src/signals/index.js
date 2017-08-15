
import {Signal} from 'raid'
import {adaptor} from 'raid-addons'

import {saveKey, todoFilterTypes} from 'core/constants'
import {localLoad} from 'utils'

const state = localLoad(saveKey) || {
  newTodo: '',
  editTodo: '',
  todos: [],
  nowShowing: todoFilterTypes.all
}

export const signal = new Signal(state)

export const connect = adaptor(signal)

export const dispatch = type => payload => signal.emit({type, payload})
