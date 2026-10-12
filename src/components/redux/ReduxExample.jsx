import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, multiply } from './Counter/counterSlice'

function ReduxExample() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Redux Example</h1>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(multiply())}>Multiply by 2</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    );
}
export default ReduxExample