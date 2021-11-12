import { useState ,useEffect } from "react";
import Form from "./component/form";
import TodoList from "./component/todoList";


function App() {
  
  // usestate
  const [inputText, setInputText] = useState("");
  const [todos,setTodo] = useState([]);
  const [status , setStatus] = useState("all");
  const [filteredStatus, setFilteredStatus] = useState([]);

  
  //function
  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFilteredStatus(todos.filter((todo)=>todo.completed === true));
        break;
      case "uncompleted": 
        setFilteredStatus(todos.filter(todo=>todo.completed === false));
        break;
      default:
        setFilteredStatus(todos);
    }
  }

  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(()=>{
    saveLocalTodos();
    filterHandler();
  },[todos,status]);

  const saveLocalTodos = ()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  
  const getLocalTodos = ()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify(todos));
    }else{
      
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodo(todoLocal);
    }
  }
  

  return (
    <div className="App">
      <header>
        <h1>abbas's Todo List</h1>
      </header>
      <Form inputText = {inputText} setStatus = {setStatus} setInputText = {setInputText} todo={todos} setTodo={setTodo}/>
      <TodoList todos={todos}  setTodo ={setTodo} filteredStatus={filteredStatus}/>
    </div>
  );
}

export default App;
