import { useSelector, useDispatch } from 'react-redux'
function Comp() {
    const count = useSelector((state) => state.counter.value)

    return (
        <>
            <h1>Welcome to React</h1>
            <h2 style={{ color: 'red' }}>Count from Redux Store: {count}</h2>
            <br />
            <h2>A component in react is a reusable Building Block of the UI.</h2><br>
            </br>
            < h2 > t uses declarative programming to define the UI.    </h2 >
        </>

    );
}
export default Comp;