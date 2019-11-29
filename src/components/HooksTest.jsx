import React, {useState, useEffect} from 'react';

function Hooks() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(count + 1);
    }, []);
    return(
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default function() {
    return(
        <Hooks></Hooks>
    )
}