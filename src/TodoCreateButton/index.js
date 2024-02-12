import React from 'react';

import { BsPlus } from 'react-icons/bs';
import { BsX } from 'react-icons/bs';

import './TodoCreateButton.css';

import { TodoContext } from '../TodoContext';

function TodoCreateButton() {
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <button
            className='TodoCreateButton'
            onClick={() => {
                setOpenModal(!openModal);
            }}><span>
                { !openModal?
                <BsPlus />:
                <BsX />}
            </span></button>
    );
}

export {TodoCreateButton};