import { BsCheckSquare, BsXSquare } from 'react-icons/bs';

import './TodoItem.css';

function TodoItem({text, completed, onComplete, onDelete}) {
    return (
        <li className='TodoItem'>
            <span onClick={onComplete} className={ `${completed === true? 'TodoItem-completed--check' : ''}` }>
                <BsCheckSquare/>
            </span>
            <p className={ `${completed === true? 'TodoItem-p--complete' : ''}` }>{text}</p>
            <span onClick={onDelete} className='TodoItem-delete'>
                <BsXSquare />
            </span>
        </li>
    );
}

export {TodoItem};