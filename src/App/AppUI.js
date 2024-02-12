import React from 'react';

import { TodoContext } from '../TodoContext';

import { Modal } from '../Modal';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem/index';
import { TodoCreateButton } from '../TodoCreateButton';

import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosNothing } from '../TodosNothing';

import { TodoForm } from '../TodoForm';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);

    return (
        <div className='app'>

            <h1>TODO Machine</h1>

            <TodoCounter />

            <TodoSearch />

            <TodoList>
                {loading ? <TodosLoading /> : ''}
                {error ? <TodosError /> : ''}

                {(!loading && !error && searchedTodos.length == 0)? <TodosNothing /> : ''}

                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>

            <TodoCreateButton />
            
            {openModal?
            <Modal>
                <TodoForm />
            </Modal> : ''}

        </div>
    );
}

export { AppUI };