
import {connect, dispatch} from 'signals'
import {createSelector} from 'reselect'
import pluralize from 'pluralize'
import cx from 'classnames'

import {
  hasTodos,
  getActiveCount,
  getShowingFilter
} from 'core/selectors'
import appActions from 'core/actions'
import {todoFilterTypes} from 'core/constants'
import {isStringEqual} from 'utils'

const dispatchClearCompleted = dispatch(appActions.clearCompleted)

const Link = ({to, isSelected, children}) => (
  <li>
    <a
      className={cx({
        selected: isSelected()
      })}
      href={to}
    >{children}</a>
  </li>
)

const TodosFooter = ({hasTodos, activeCount, nowShowing}) => {
  if (!hasTodos) {
    return null
  }

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong>
        {` ${pluralize('item', activeCount)} left`}
      </span>
      <ul className='filters'>
        <Link
          to='#/'
          isSelected={isStringEqual(nowShowing, todoFilterTypes.all)}
        >All</Link>
        <Link
          to='#/active'
          isSelected={isStringEqual(nowShowing, todoFilterTypes.active)}
        >Active</Link>
        <Link
          to='#/completed'
          isSelected={isStringEqual(nowShowing, todoFilterTypes.completed)}
        >Completed</Link>
      </ul>
      <button
        className='clear-completed'
        onClick={dispatchClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

const selector = createSelector(
  hasTodos,
  getActiveCount,
  getShowingFilter,
  (hasTodos, activeCount, nowShowing) => ({
    hasTodos,
    activeCount,
    nowShowing
  })
)

export default connect(
  selector,
  TodosFooter
)
