import React from "react";
const Todo = ({text ,todo, todos , setTodo }) => {
    
    // delete functions
    const deleteHandler = ()=>{
        setTodo(todos.filter(el=> el.id !== todo.id));
    }

    const completedhandler =()=>{

        setTodo(
            todos.map((item)=>{
                if(item.id === todo.id){
                  return {...item,
                    completed : !item.completed};
                 }
                return item;
            })

            
        );


    }

    return ( 
        
        <div className="todo">
            <li className={`todo-item ${todo.completed? "completed": ' '}`}>{text}</li>
            <button onClick={completedhandler} className="complete-btn">
                {todo.completed && <i className="fas fa-check"></i>}
                {!todo.completed && <i className="fa fa-times" aria-hidden="true"></i>}        
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            
        </div>
             );
     
};
 
export default Todo;

