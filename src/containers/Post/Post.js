import React from 'react';
import {NavLink} from "react-router-dom";
import './Post.css'
import dayjs from "dayjs";

const Post = ({title, datetime, id}) => {

    if (datetime){
        datetime = dayjs(datetime).format('DD.MM.YYYY | HH:mm:ss');
    }

    return (
            <div className='post'>
                <p>{datetime} </p>
                <p>{title}</p>
                <NavLink className='link-read' to={`posts/${id}`}>Read more...</NavLink>
            </div>

    );
};

export default Post;