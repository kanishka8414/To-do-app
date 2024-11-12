import React, { useReducer } from 'react';

function reducer(state, action)
{
        switch(action.type)
        {
            case 'ABC1':
                return {value: state.value+1, id:action.id};
            case 'XYZ1':
                return {value: state.value+1, id:action.id};
            case 'RESET':
                return { value: 0, id:action.id};;
            case 'INC2':
                return { value: state.value+2, id:action.id};
            case 'DEC2':
                return {value: state.value-2, id:action.id};
            default :
            return state;
        }
}
function CountApp(props) {

    const [count, dispatch] = useReducer(reducer,{value:0, id:0});
    console.log(count)
    return (
        <div>
            <h1>{count.value} {count.id}</h1>
            <button onClick={()=>dispatch({type:'ABC1', id:Date.now()})}>++</button>
            <button onClick={()=>dispatch({type:'XYZ1', id:Date.now()})}>--</button>
            <button onClick={()=>dispatch({type:'RESET', id:Date.now()})}>Reset</button>
            <button onClick={()=>dispatch({type:'INC2', id:Date.now()})}>Increment By 2</button>
            <button onClick={()=>dispatch({type:'DEC2', id:Date.now()})}>Decrement By 2</button>
        </div>
    );
}

export default CountApp;