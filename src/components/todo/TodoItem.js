import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

function TodoItem({item, toggleCompleted}) {

    const isCompleted = () => item.done === true;

    const onToggleCompleted = () => {
        toggleCompleted(item.id);
    }

    return (
        <div className={'list-group-item d-flex'}>
            <div className={'mr-2'} onClick={onToggleCompleted}>
                <FontAwesomeIcon icon={isCompleted() ? faCheckSquare : faSquare} />
            </div>
            <div>{item.desc}</div>
        </div>
    );
}

export default TodoItem;