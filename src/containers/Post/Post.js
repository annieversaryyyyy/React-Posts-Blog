import React from 'react';
import {NavLink} from "react-router-dom";

const Post = ({title, datetime, id}) => {

    return (
        <div>
            <p>{datetime}</p>
            <p>{title}</p>
            <NavLink to={`posts/${id}`}>Read more</NavLink>
        </div>
    );
};

export default Post;