import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem({item, toggleCompleted, remove}) {

    const isCompleted = () => item.done === true;

    const onToggleCompleted = () => {
        toggleCompleted(item.id);
    }

    const onDelete = () => {
        remove(item.id);
    }

    const getDescStyle = () => {
        return {
            textDecoration: isCompleted() ? 'line-through' : 'none'
        }
    }

    return (
        <div className={'list-group-item d-flex align-items-center'}>
            <div className={'mr-2'}>
                <button className={'btn btn-link'} onClick={onToggleCompleted}>
                    <FontAwesomeIcon icon={isCompleted() ? faCheckSquare : faSquare} />
                </button>
            </div>
            <div className={'w-100'} style={getDescStyle()}>{item.desc}</div>
            <div>
                <button className={'btn btn-link'} onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </div>
    );
}

export default TodoItem;