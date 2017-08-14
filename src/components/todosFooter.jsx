
import {connect, dispatch} from 'signals'
import {createSelector} from 'reselect'
import pluralize from 'pluralize'

import {hasTodos, getActiveCount} from 'core/selectors'
import appActions from 'core/actions'

const dispatchClearCompleted = dispatch(appActions.clearCompleted)

const TodosFooter = ({hasTodos, activeCount}) => {
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
        <li>
          <a className='selected' href='#/'>All</a>
        </li>
        <li>
          <a href='#/active'>Active</a>
        </li>
        <li>
          <a href='#/completed'>Completed</a>
        </li>
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
  (hasTodos, activeCount) => ({
    hasTodos,
    activeCount
  })
)

export default connect(
  selector,
  TodosFooter
)
