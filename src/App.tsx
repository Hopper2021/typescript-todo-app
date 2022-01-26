import React from 'react';
import './App.css';

let name: String;
let age: number;
let isStudent: boolean;
let hobbies: string[];

// function called printName, takes in an object called name which is a string, and return the type void.
let printName: (name: String) => void;

//This is called a twople, can container 1 number and 1 string
let role:[number,string]
role = [5,"Software Developer"]

// printName("Jessica");

/* type templates the types for variables
When you have properties of those variables listed, they always have to be present
If you add a ? after the variable like so: ( age?: number; ), it is now optional */

// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: "Jessica",
// }

// let lotsOfPeople: Person[];

let personName: unknown;

function App() {
  return (
    <div className="App">{name}</div>
  );
}

export default App;
