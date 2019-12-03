import React, {useState, useEffect} from 'react';

function Hooks() {
    const [count, setCount] = useState(0);
    const num = useAge();
    useEffect(() => {
        setCount(count => count + 1);
    }, []);
    return(
        <div>
            <h2>{count}</h2>
            <h3>{`多大${num}`}</h3>
        </div>
    )
}

// 自定义hooks钩子，可以使用其他hooks钩子
function useAge() {
    const [age, setAge] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setAge(age => age + 1);
        }, 1000);
    }, []);
    return age;
}

export default function() {
    return(
        <Hooks></Hooks>
    )
}