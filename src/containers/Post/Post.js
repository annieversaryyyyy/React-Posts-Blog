import React from 'react';
import {NavLink} from "react-router-dom";
import './Post.css'

const Post = ({title, datetime, id}) => {
    return (
            <div className='post'>
                <p>{datetime}</p>
                <p>{title}</p>
                <NavLink className='link-read' to={`posts/${id}`}>Read more...</NavLink>
            </div>

    );
};

export default Post;