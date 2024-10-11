import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Le compteur est : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Counter;