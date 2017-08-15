
import {Router} from 'director'

import {dispatch} from 'signals'
import {todoFilterTypes} from 'core/constants'
import appActions from 'core/actions'

const dispatchFilter = dispatch(appActions.setFilter)

const router = Router({
  '/': () => dispatchFilter({filter: todoFilterTypes.all}),
  '/active': () => dispatchFilter({filter: todoFilterTypes.active}),
  '/completed': () => dispatchFilter({filter: todoFilterTypes.completed})
})

export default function start () {
  router.init('/')
}
