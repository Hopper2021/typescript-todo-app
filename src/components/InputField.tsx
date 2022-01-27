import React from 'react';
import './styles.css'
 
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
  }

const InputField = ({ todo, setTodo }: Props) => {
    return (
        <form className="input">
            <input 
                type="input" 
                value={todo}
                onChange={
                    (event)=>setTodo(event.target.value)
                }
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