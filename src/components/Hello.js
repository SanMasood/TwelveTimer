import React, { useState } from 'react';

const Hello = (props) => {
    console.log(props.children);

    const initialState = {
        message: 'Much love!',
    }
    const [myState, setMyState] = useState(initialState);

    const changeMessage = () => {
        setMyState({ 
            message: 'Thank you for clicking!',
            number: 12,
            newAttr: 'Jajajaja',
         
            })

    }
    
    return (
        <div className="divHello">
            <h1>Hello {props.name} and {props.name2}</h1>
            <h2>{myState.message} {myState.number}</h2>
            <button onClick={() => changeMessage()}>Subscribe</button>

        </div>
    )
}
export default Hello;