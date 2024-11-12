import React, { useReducer, useState } from 'react';
import './TodoApp.css';

function reducer(state, action)
{
    switch(action.type)
    {
        case 'ADDTO_TODO_LIST':
            return [...state, action.payload];
        case 'REMOVE_FROM_LIST':
            return state.filter(item=> item.id!==action.payload);

        case 'TODO_DONE':
            return state.map(item=> item.id==action.payload? {...item, isDone:!item.isDone}:{...item})
        default:
            return state;
    }
}
function TodoApp(props) {

    const [value, setValue] = useState('');

    const [todo, dispatch] = useReducer(reducer, []);
    
    return (
        <div className='container'>
            <h1>ToDo App</h1>
            <div className='controls'>
                <input onChange={(e)=>setValue(e.target.value)} type="text"/>
                <button onClick={()=>dispatch({type:'ADDTO_TODO_LIST', payload:{item:value, id:Date.now(), isDone:false}})}>Add</button>
            </div>
            <div className='result'>
                
               {
                todo.map(td=>(
                    <div className='block'>
                        <div className='title' onClick={()=>dispatch({type:'TODO_DONE', payload:td.id})} style={{textDecoration:td.isDone?'line-through':'none'}} >{td.item}   {td.id}</div>
                        <div className='remove'>
                            <button onClick={()=>dispatch({type:'REMOVE_FROM_LIST', payload:td.id})}>X</button>
                        </div>
                    </div>
                ))
               }
            </div>
        </div>
    );
}

export default TodoApp;