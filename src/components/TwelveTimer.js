import React, { useState } from 'react';

const Counter = () => {
    
    const [count, setCount] = useState(1);
    const [twelvesTimes, setTwelveTimes] = useState(0);
   

    const timesByTwelve = () => {

        setCount( count+1 );
        setTwelveTimes( count* 12 );
    }  

    const resetAll = () => {
        setCount(1);
        setTwelveTimes(0);
    }
        return (
            <div>
                <h1>Sum = 12 x {count-1}</h1>
                <h1>Twelve times: {twelvesTimes}</h1>
                <button onClick={() => timesByTwelve()}>Do it!</button>
                <button onClick={() => resetAll()}>Reset</button>
                <h6>Made for Inaaya</h6>
               
            </div>
        )
    }


export default Counter;
