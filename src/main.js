
import {render} from 'react-dom'

import {signal} from 'signals'
import App from 'views/app'

import {update as newTodoUpdate} from 'components/newTodo'
import {debug, todos} from 'core/updates'

if (process.env.DEBUG) {
  signal.register(debug)
}
signal.register(newTodoUpdate)
signal.register(todos)

signal.observe(state => {
  render(
    <App state={state} />,
    document.querySelector('.js-todo')
  )
}, err => console.error(err))
