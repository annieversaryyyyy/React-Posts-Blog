import React, {useEffect, useState} from 'react';
import axios from "axios";
import './FullPost.css';
import dayjs from "dayjs";


const FullPost = ({match, datetime}) => {
    const [postCard,setPostCard] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios(`https://annieversary-d3dfb-default-rtdb.europe-west1.firebasedatabase.app/posts/${match.params.id}.json`);
            setPostCard(response.data);

        };
        fetchData().catch(console.error);
    });


    return postCard && (
            <div className='fullPost'>
                <h3>More information about your post:</h3>
                <div className='post-info'>
                    {Object.keys(postCard).map(key => (
                        <p>{postCard[key]} </p>
                    ))
                    };
                </div>
                <div className="buttons">
                    <button className='delete-btn'>Delete</button>
                    <button className='edit-btn'>Edit</button>
                </div>

            </div>
        );

};

export default FullPost;