import React, { useRef } from 'react';
import './styles.css'
 
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void;
  }

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    // Used along with onSubmit event and input ref to remove the page shadow when enter is pressed
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(event) => {
                handleAdd(event)
                inputRef.current?.blur();
            }}>
            <input 
                type="input" 
                ref={inputRef}
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