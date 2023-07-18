import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment} from '../../store/slice/Slice.js'

const Login = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (<>    <div>Login</div>
     <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          
        >
          Increment<h1>{count}</h1>
        </button>
        </>
)
}

export default Login