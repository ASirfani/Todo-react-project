const Form = ({inputText, setInputText,todo,setTodo,setStatus}) => {

    // herer is javascript function

    const handleInput = (e)=>{
        setInputText(e.target.value);
    };

    const hanldeSubmit = (e)=>{
        e.preventDefault();

        setTodo([
            ...todo,
            {text:inputText, completed:false , id: Math.random()*100}
        ]);

        setInputText("");
    }

    const statusHandler= (e)=>{
        setStatus(e.target.value);
    }

    return ( 

        <form >
            <input value={inputText} onChange={handleInput} type="text" className="todo-input" />
            <button onClick={hanldeSubmit} className="todo-button" type="submit">
                <i className= "fas fa-plus-square"></i>
            </button>
            <div onChange={statusHandler} className="select">
                <select name="todos" className="filter-todo">
                    <option value ="all" >All</option>
                    <option value="completed" >completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>


     );
}
 
export default Form;