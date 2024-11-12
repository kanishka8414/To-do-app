import React, { useContext } from 'react';
import { nameContext } from '../App';

function GrandChild() {
    const {name, setName } = useContext(nameContext)
    return (
        <div>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <h1>Last child component name : {name}</h1>
        </div>
    );
}

export default GrandChild;