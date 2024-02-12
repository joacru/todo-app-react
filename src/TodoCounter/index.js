import React from "react";

import { TodoContext } from '../TodoContext';

function TodoCounter() {    
    const {
      completedTodos,
      totalTodos,
    } = React.useContext(TodoContext);

    return (
      <>
        <h2>Completaste {completedTodos} de {totalTodos} TODOs</h2>
        <br />
      </>
    );
}

export {TodoCounter};