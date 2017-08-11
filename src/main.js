
import {render} from 'react-dom'
import {Signal} from 'raid'

import Title from './component'

const signal = new Signal({})

signal.observe(state => {
  render(
    <Title text='yo dudes' />,
    document.querySelector('.js-todo')
  )
}, err => console.error(err))
