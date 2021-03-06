import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <ul className='list-group'>
      <Link to='useref-example-1' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action '>
          useRef example-1
        </li>
      </Link>
      <Link to='useref-example-2' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          useRef example-2
        </li>
      </Link>
      <Link to='memory-leak-example' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          memory leak example
        </li>
      </Link>
      <Link to='usememo-example' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          useMemo example
        </li>
      </Link>
      <Link to='usecallback-example' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          useCallback example
        </li>
      </Link>
      <Link to='custom-hook-example-1' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          custom hook example 1
        </li>
      </Link>
      <Link to='custom-hook-example-2' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          custom hook example 2
        </li>
      </Link>
      <Link to='usecontext-example' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          useContext example
        </li>
      </Link>
      <Link to='usereducer-example' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          useReducer example
        </li>
      </Link>
      <Link to='hoc-example' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          High Order Component example
        </li>
      </Link>
      <Link to='redux-counter-example' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          Redux counter example
        </li>
      </Link>
      <Link to='protected-route-example' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          Protected route example
        </li>
      </Link>
      <Link to='react-query-example' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          react-query example
        </li>
      </Link>
    </ul>
  )
}

export default HomePage
