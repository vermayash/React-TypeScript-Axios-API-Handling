import { useState } from "react";

const Counter: React.FunctionComponent = () => {

    const [count, setCount] = useState<number>(0);


    return (
        <div>
            <h2>Counter</h2>

            <h4>Count: {count}</h4>

            <input type="button" value="Add 1" onClick={() => setCount(count + 1)} />
        </div>
    );
};

export default Counter;