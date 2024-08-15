import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    todos:{
        id:1,
        title:"Hi I am Dummy Todo!",
        success:false
    },
    addTodo: (todo) => {},
    updateDoto: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})
export const useToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider