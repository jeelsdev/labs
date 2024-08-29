import React, { useState } from "react";
import Todo from "./todo";

import "./todoApp.css";

interface NewTodo {
    id: string;
    title: string;
    completed: boolean;
}

function TodoApp() {
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState<NewTodo[]>([
        {
            id: "1",
            title: "29-08 No puedo dormir",
            completed: false
        },
        {
            id: "2",
            title: "4:51 De la mañana y aun sigo despierto :(",
            completed: false
        }
    ]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setTitle(value);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const newTodo:NewTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const temp:NewTodo[] = [...todos];
        temp.unshift(newTodo);
        setTodos(temp);
        setTitle("");
    }

    function handleUpdate(id: string, title: string) {
        const temp:NewTodo[] = [...todos];
        const item = temp.find(todo => todo.id === id);
        if(item) {
            item.title = title;
            setTodos(temp);
        }
    }

    const handleDelete = (id: string) => {
        const temp:NewTodo[] = todos.filter(todo => todo.id !== id);
        setTodos(temp);
    }

    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" className="todoInput" value={title}/>
                <input onClick={handleSubmit} type="submit" value="Crear Todo" className="buttonCreate"/>
            </form>

            <div className="todosContainer">
                {
                    todos.map((todo:NewTodo) => (
                        <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TodoApp;