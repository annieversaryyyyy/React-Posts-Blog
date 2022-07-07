import React, {useEffect, useState} from 'react';
import AddPost from "../AddPost/AddPost";
import axios from "axios";
import Post from "../Post/Post";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const postsArray = [];
            try{
                const {data: messages} = await axios.get("https://annieversary-d3dfb-default-rtdb.europe-west1.firebasedatabase.app/posts.json");
                console.log(messages);
                for (let key of Object.entries(messages)){
                    console.log(key)
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
    console.log(posts)

    return (
        <div>
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
    );
};

export default Home;