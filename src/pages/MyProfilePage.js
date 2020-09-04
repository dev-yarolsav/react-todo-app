import React from "react";

import {useLoggedInUser} from "hooks/user/useLoggedInUser";

export default function MyProfilePage () {
    const user = useLoggedInUser();

    return (
        <div>
            { JSON.stringify(user) }
        </div>
    )
}