
import PropTypes from 'prop-types'

const Title = ({text, children}) => (
  <h1 className='h1'>
    {children || text}
  </h1>
)

Title.propTypes = {
  text: PropTypes.string
}

Title.defaultProps = {
  text: null
}

export default Title
