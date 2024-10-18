import { useState } from "react";
import {nanoid} from "nanoid"
import ListItem from "./components/ListItem";

function App() {

  const  [todoList, setTodoList] = useState([
    { id: nanoid(8), content: "item A" },
    { id: nanoid(8), content: "item 2" },
    { id: nanoid(8), content: "item 3" },
  ]);
  console.log(todoList)

  const [todo, setTodo] = useState("")
  const [showValidation, setShowValidation] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    if(todo === ""){
      setShowValidation(true)
      return
    }


    setTodoList([...todoList, { id: nanoid(8), content: todo }])
    setTodo("")
    setShowValidation(false)
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <>
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">To-Do List</h1>
        <form className="mb-10"
              onSubmit={handleSubmit}
        >

          <label 
            htmlFor="todo-item"
            className="text-slate-50"
          >Ajouter une tâche</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded"
            value={todo}
            onChange={e => setTodo(e.target.value)}  
          />
          {showValidation && (
            <p className="text-red-400">Veuillez rentrer une tâche</p>
          )}
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>
        </form>

        <ul>
          {todoList.length === 0 && (
            <li className="text-slate-50 text-md">Pas d'item à afficher...</li>
          )}
          {todoList.length > 0 && (
            todoList.map(item => (
              <ListItem 
                key={item.id} 
                itemData={item} 
                deleteTodo={deleteTodo}
              />
            ))
          )}
        </ul>
        
      </div>  
    </div>  
  </>
  )
}

export default App
