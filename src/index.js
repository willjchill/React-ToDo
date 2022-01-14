import React from 'react';
import ReactDOM from 'react-dom';

var Header = () => {
  return <div><h1>=== To-Do List ===</h1></div>;
}

// todo is a state that i want to update
// settodo is a function that allows me to update state
// it is in a deconstructed array (see js ES6 for more)
// therefore, usestate refers to the todo and sets initial state onmount :oo
var todoList = [];
var Lister = () => {
  const [todo, setTodo] = React.useState("");

  function updateTodo() {
    todoList.push(todo);
    setTodo("");
    console.log(todoList); 
  }

  React.useEffect(() => {
    console.log(todoList);
  }, [todoList])

  return(
    <div>
      <input value={todo} onChange={(e) => setTodo(e.target.value) } type="textbox" />
      <button onClick={updateTodo}>Add Task</button>
      <ul>
        {todoList.map((el, i) => <li key={i} id={i}>{el}<input onClick={() => { todoList = todoList.filter((el) => el !== todoList[i]); console.log("here!", i); } } type="checkbox" /></li>)}
      </ul>
    </div>
  )
}


var App = () => {
    return(
      <>
        <Header />
        <Lister />
      </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));