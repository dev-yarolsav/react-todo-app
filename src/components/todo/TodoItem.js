import React from "react"
import cs from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function TodoItem({className, description, isCompleted, onToggleCompleted, onRemove}) {
    return (
        <div className={'d-flex align-items-center ' + (className || '')}>
            <div className="mr-2">
                <button className="btn btn-link" onClick={onToggleCompleted}>
                    <FontAwesomeIcon icon={isCompleted ? faCheckSquare : faSquare} />
                </button>
            </div>
            <div className={cs({'w-100': true, 'text-muted': isCompleted})}>{description}</div>
            <div>
                <button className="btn btn-link" onClick={onRemove}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </div>
    );
}