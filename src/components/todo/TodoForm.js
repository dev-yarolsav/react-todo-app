import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export default function TodoForm({onSubmit, isSaving}) {

    const [data, setData] = useState({
        description: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit(data);
        setData({
            description: ''
        })
    }

    const handleChange = (e) => {
        setData({
            [e.target.name]: e.target.value
        })
    }

    const canSubmit = data.description.length > 3;

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input value={data.description} onChange={handleChange} disabled={isSaving}
                       name="description" type="text" className="form-control" placeholder="What to do?"/>
                <div className="input-group-append">
                    <button disabled={!canSubmit || isSaving} className="btn btn-primary" type="submit">
                        {isSaving ? <FontAwesomeIcon icon={faCircleNotch} spin/> : "add"}
                    </button>
                </div>
            </div>
        </form>
    );
}