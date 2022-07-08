import React, {useEffect, useState} from 'react';
import axios from "axios";
import Preloader from "../../components/Preloader/Preloader";

const Edit = ({match, history}) => {
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
                        response.data[key] = new Date();
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

    const editPosts = async e => {
        e.preventDefault();
        try{
            await axios.put(`https://annieversary-d3dfb-default-rtdb.europe-west1.firebasedatabase.app/posts/${match.params.id}.json`, postCard);
            history.replace('/');
        } catch (error) {
            alert("Что-то пошло не так...");
        }
    };

    const changeMessage = (e) => {
        const {name, value} = e.target;
        setPostCard(prev => ({
            ...prev,
            [name]: value
        }));
    };


    if(loading){
        return <Preloader/>
    }else{
        return postCard && (
            <div className='formPost'>
                <h3>Edit post:</h3>
                <form onSubmit={editPosts}>
                    <p>Title:</p>
                    <input required type="text" name="title" className="postInput" value={postCard.title} onChange={changeMessage} placeholder="Введите ваше сообщение..." />
                    <p>Description:</p>
                    <textarea required name="text" value={postCard.text} onChange={changeMessage} placeholder='Введите ваше сообщение...'></textarea>
                    <p> <button type="submit" className="sendBtn">Send Post</button></p>
                </form>
            </div>
        );
    }


};

export default Edit;