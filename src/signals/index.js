
import {Signal} from 'raid'
import {adaptor} from 'raid-addons'

import {todoFilterTypes} from 'core/constants'

export const signal = new Signal({
  newTodo: '',
  editTodo: '',
  todos: [],
  nowShowing: todoFilterTypes.all
})

export const connect = adaptor(signal)

export const dispatch = type => payload => signal.emit({type, payload})
