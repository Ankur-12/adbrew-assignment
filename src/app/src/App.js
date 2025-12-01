import { useEffect,useState} from 'react';

function App() {
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const fetchTodos=async()=>{
    try{
      const response=await fetch("http://localhost:8000/todos");
      const data=await response.json();
      setTodos(data);
  } catch(err){
      console.error("Failed to fetch todos",err);
  }
};
  useEffect(()=>{
    fetchTodos();
  },[]);
    const handleSubmit=async(e)=>{
      e.preventDefault();
      if(!description) return;
      await fetch("http://localhost:8000/todos",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({description})
      });
      setDescription("");
      fetchTodos();
    
  };
 

  return (    
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>  
        <input
          type="text"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}  
          placeholder="Enter todo description"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo)=>(
          <li key={todo._id}>{todo.description}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
