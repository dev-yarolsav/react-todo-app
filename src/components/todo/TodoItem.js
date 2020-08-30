import React from "react"
import cs from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare, faTrash, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export default function TodoItem({className, description, isCompleted, onToggleCompleted, isToggling, onRemove, isRemoving}) {
    return (
        <div className={'d-flex align-items-center ' + (className || '')}>
            <div className="mr-2">
                <button className={cs({'btn btn-link': true, 'text-muted': isCompleted})}
                        disabled={isToggling}
                        onClick={() => onToggleCompleted(isCompleted)}>
                    <FontAwesomeIcon icon={isToggling ? faCircleNotch : (isCompleted ? faCheckSquare : faSquare)}
                                     spin={isToggling} />
                </button>
            </div>
            <div className={cs({'w-100': true, 'text-muted': isCompleted})}>{description}</div>
            <div>
                <button className="btn btn-link" onClick={onRemove} disabled={isRemoving}>
                    <FontAwesomeIcon icon={isRemoving ? faCircleNotch : faTrash} spin={isRemoving}/>
                </button>
            </div>
        </div>
    );
}