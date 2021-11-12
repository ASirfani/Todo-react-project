import Todo from "./todo"

const TodoList = ({todos , setTodo ,filteredStatus}) => {
    return (  

        <div className="todo-container">
            <ul className="todo-list">
                 {filteredStatus.map((todo) =>( <Todo text={todo.text} todo ={todo} key={todo.id} todos={todos}  setTodo ={setTodo} /> ))}
             </ul>
        </div>



    );
}
 
export default TodoList;