import React from "react";
import {Link} from "react-router-dom";

export default function PostsPage () {
    return (
        <div>
            posts page

            <Link to={'/posts/' + 1}>#1</Link>
            <Link to={'/posts/' + 2}>#2</Link>

        </div>
    );
}