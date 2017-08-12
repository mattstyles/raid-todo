
import Title from 'components/title'
import {NewTodo} from 'components/newTodo'

const Header = () => (
  <header className='header'>
    <Title>todos</Title>
    <NewTodo />
  </header>
)

export default Header
