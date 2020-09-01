import React from "react"
import cs from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare, faTrash, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import {useIsLoading} from "../../hooks/useIsLoading";

import {REMOVE_TODO, TOGGLE_TODO} from "../../store/todos/actions";

export default function TodoItem({className, id, description, isCompleted, onToggle, onRemove}) {

    const isToggling = useIsLoading([TOGGLE_TODO, id])
    const isRemoving = useIsLoading([REMOVE_TODO, id])

    return (
        <div className={'d-flex align-items-center ' + (className || '')}>
            <div className="mr-2">
                <button className={cs({'btn btn-link': true, 'text-muted': isCompleted})}
                        disabled={isToggling}
                        onClick={onToggle}>
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