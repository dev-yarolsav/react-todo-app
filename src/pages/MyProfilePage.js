import React from "react";

import {useLoggedInUser} from "hooks/user/useLoggedInUser";

export default function MyProfilePage () {
    const user = useLoggedInUser();

    return (
        <div>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>My profile</div>
                    <div>
                        <button className="btn btn-sm btn-link">Edit</button>
                    </div>
                </div>
                <div className="card-body text-center">
                    <div>
                        <img src="https://via.placeholder.com/150" className="rounded" alt="..."/>
                    </div>
                    <div className="font-weight-bold">{user.name}</div>
                    <div className="text-muted small">@{user.username}</div>
                </div>
                <div className="card-body pt-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        </div>
    )
}