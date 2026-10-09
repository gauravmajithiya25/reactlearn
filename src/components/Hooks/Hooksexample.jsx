import { useState } from "react";
function Hooksexample() {
    const [count, setCount] = useState(15);

    const Add = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const Minus = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    };
    return (
        <>
            <br />
            <div>
                <button onClick={Add}>Add</button>&nbsp;

                <button onClick={Minus}>Minus</button>

                <b> Counter: {count}</b>
            </div>

        </>
    );
}

export default Hooksexample;