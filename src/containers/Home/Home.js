import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "../Post/Post";
import dayjs from "dayjs";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const postsArray = [];
            try{
                const {data: messages} = await axios.get("https://annieversary-d3dfb-default-rtdb.europe-west1.firebasedatabase.app/posts.json");
                for (let key of Object.entries(messages)){
                    postsArray.push({
                        id: key[0],
                        title: key[1].title,
                        text: key[1].text,
                        datetime: key[1].datetime,
                    });
                }
                setPosts(postsArray);
            }
            catch (error) {
                alert("Что-то пошло не так...");
            }
        };
        fetchData().catch(e => console.log(e));
    }, []);

    return (
        <>
            <div className='post-cards'>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        text={post.text}
                        datetime={post.datetime}
                    />
                ))}
            </div>
        </>

    );
};

export default Home;