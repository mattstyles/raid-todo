
import {Signal} from 'raid'
import {adaptor} from 'raid-addons'

export const signal = new Signal({
  newTodo: ''
})

export const connect = adaptor(signal)

export const dispatch = type => payload => signal.emit({type, payload})
