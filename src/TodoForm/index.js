import React from "react";

import { TodoContext } from "../TodoContext";

import './TodoForm.css';

function TodoForm(){
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label><h2>Escribe tu nuevo todo </h2></label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Dejar de ser nefasto"/>
            <div className="TodoForm-buttons">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cerrar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };