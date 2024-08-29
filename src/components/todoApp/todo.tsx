import React, { useState } from "react";

interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

const TodoForm = ({ value, handleChange, handleUpdate }: { value: string; handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void; handleUpdate: () => void; }) => (
    <form className="todoUpdateForm" onSubmit={(e) => e.preventDefault()}>
        <input 
            type="text"
            className="todoInput" 
            onChange={handleChange} 
            value={value}
        />
        <button className="button" type="button" onClick={handleUpdate}>Actualizar</button>
    </form>
)

const TodoElement = ({value, id, setIsEditing, onDelete}: {value: string, id:string, setIsEditing: (value: boolean) => void, onDelete: (id:string) => void}) => (
    <div className="todoInfo">
        <span className="todoTitle">{value}</span>
        <button className="button" onClick={() => setIsEditing(true)}>Editar</button>
        <button className="buttonDelete" onClick={() => {onDelete(id)}}>Eliminar</button>
    </div>
)

function Todo({todo, onUpdate, onDelete}: {todo: Todo, onUpdate: (id: string, title: string) => void, onDelete: (id: string) => void}) {
    const [value, setValue] = useState(todo.title);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleUpdate = () => {
        onUpdate(todo.id, value);
        setIsEditing(false);
    }


    return (
        <div className="todo">
            {
                isEditing ? 
                <TodoForm value={value} handleChange={handleChange} handleUpdate={handleUpdate}/> : 
                <TodoElement value={todo.title} id={todo.id} setIsEditing={setIsEditing} onDelete={onDelete}/>
            }
        </div>
    )
}

export default Todo;