import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  // import the interface and have the empty array after the type listed below
  const [todos, setTodos] = useState<Todo[]>([]);

  // event for handleAdd needs to be defined here and also in the Props in its component (InputField)
  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    // if todo exists (which is the Inputs id) then set Todos and set Todo
    if (todo) {
      setTodos([...todos, { 
        id: Date.now(), 
        todo: todo, 
        isDone: false 
      } 
    ]);
      setTodo("");
    }
  }

  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
