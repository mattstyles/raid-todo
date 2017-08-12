
import {render} from 'react-dom'

import {signal} from 'signals'
import {debug} from 'core/updates'
import App from 'views/app'

import {update} from 'components/newTodo'

signal.register(debug)
signal.register(update)
// signal.register((state, {type, payload: {value}}) => {
//   if (type === actions.onNewTodoChange) {
//     state.newTodo = value
//     return state
//   }
//
//   return state
// })

signal.observe(state => {
  render(
    <App state={state} />,
    document.querySelector('.js-todo')
  )
}, err => console.error(err))
