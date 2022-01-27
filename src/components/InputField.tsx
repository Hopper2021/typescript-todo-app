import React from 'react';
import './styles.css'
 
const InputField = () => {
    return (
        <form className="input">
            <input 
                type="input" 
                placeholder="Enter a task" 
                className="taskInput">
            </input>
            <button 
                type="submit" 
                className="goButton">
                    Go
            </button>
        </form>
    )
}

export default InputField