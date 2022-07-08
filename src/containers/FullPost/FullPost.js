import React, {useEffect, useState} from 'react';
import axios from "axios";
import './FullPost.css';
import dayjs from "dayjs";
import {NavLink} from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";

const FullPost = ({match, history}) => {
    const [postCard,setPostCard] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            let post = {};
            setLoading(true);
            try {
                const response = await axios(`https://annieversary-d3dfb-default-rtdb.europe-west1.firebasedatabase.app/posts/${match.params.id}.json`);
                console.log(response.data);
                Object.keys(response.data).map(key => {
                    if (key === 'datetime') {
                        response.data[key] = dayjs(response.data[key]).format('DD.MM.YYYY | HH:mm:ss');
                    }
                    return post[key] = response.data[key];
                });
                setPostCard(post);
            } catch (error) {
                alert("Что-то пошло не так...");
            }finally {
                setLoading(false);
            }
        };
        fetchData().catch(e => console.log(e));
        },[match.params.id]);


    const deletePost = async () => {
         await axios.delete(`https://annieversary-d3dfb-default-rtdb.europe-west1.firebasedatabase.app/posts/${match.params.id}.json`);
         history.replace('/');
    };

    if(loading) {
        return <Preloader/>
    } else {
        return postCard && (
            <div className='fullPost'>
                <h3>More information about your post:</h3>
                <div className='post-info'>
                    <p>{postCard.datetime}</p>
                    <p>{postCard.title}</p>
                    <p>{postCard.text}</p>
                </div>
                <div className="buttons">
                    <button className='delete-btn' onClick={deletePost}>Delete</button>
                    <NavLink className="edit-btn" to={`/posts/${match.params.id}/edit`}>Edit</NavLink>
                </div>

            </div>
        );
    }



};

export default FullPost;