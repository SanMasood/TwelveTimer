import React, { useState } from 'react';

const Counter = () => {
    
    const [count, setCount] = useState(1);
    const [twelvesTimes, setTwelveTimes] = useState(0);
   

    const timesByTwelve = () => {

        setCount( count+1 );
        setTwelveTimes( count* 12);
    }  
        return (
            <div>
                <h1>Counter = 12 x {count-1}</h1>
                <h1>Twelve times: {twelvesTimes}</h1>
                <button onClick={() => timesByTwelve()}>Twelve times</button>
               
            </div>
        )
    }


export default Counter;
