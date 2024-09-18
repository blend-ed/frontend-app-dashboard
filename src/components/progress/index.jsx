import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../redux/reducers/counterReducer'

function Progress({ path }) {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(path)
    }, [path])

    return (
        <main>
            <p>increment the redux store</p>
            <h5>redux counter: {count}</h5>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </main>
    )
}

export default Progress