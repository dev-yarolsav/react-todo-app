import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export default function TodoForm({onSubmit, isSaving}) {

    const [data, setData] = useState({
        text: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit(data);
        setData({
            text: ''
        })
    }

    const handleChange = (e) => {
        setData({
            [e.target.name]: e.target.value
        })
    }

    const canSubmit = data.text.length > 3;

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input value={data.text} onChange={handleChange} disabled={isSaving}
                       name="text" type="text" className="form-control" placeholder="What to do?"/>
                <div className="input-group-append">
                    <button disabled={!canSubmit || isSaving} className="btn btn-primary" type="submit">
                        {isSaving ? <FontAwesomeIcon icon={faCircleNotch} spin/> : "add"}
                    </button>
                </div>
            </div>
        </form>
    );
}