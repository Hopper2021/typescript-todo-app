import React from 'react';
import styles from './styles.css'
 
const InputField = () => {
    return (
        <div>
            <input type="input" placeholder="Enter a task" className="taskInput"></input>
            <button className="goButton">Go</button>
        </div>
    )
}

export default InputField