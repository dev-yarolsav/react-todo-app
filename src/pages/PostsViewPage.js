import React from "react";
import {Link, useParams} from "react-router-dom";

export default function PostsViewPage () {
    let { id } = useParams();

    return (
        <div>
            <Link to={'/posts'}>Back</Link>
            post view page of {id} post.
        </div>
    )
}