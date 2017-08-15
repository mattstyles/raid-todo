
import {render} from 'react-dom'

import {signal} from 'signals'
import start from 'core/router'
import App from 'views/app'

import {update as newTodoUpdate} from 'components/newTodo'
import {debug, todos, saveState} from 'core/updates'
import {saveKey} from 'core/constants'

if (process.env.DEBUG) {
  signal.register(debug)
}
signal.register(newTodoUpdate)
signal.register(todos)
signal.register(saveState(saveKey))

signal.observe(state => {
  render(
    <App state={state} />,
    document.querySelector('.js-todo')
  )
}, err => console.error(err))

start()
