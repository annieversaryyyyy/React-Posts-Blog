import React from 'react';
import axios from "axios";
import {useState} from "react";
import './Addpost.css'


const AddPost = () => {
    const [data, setData] =  useState({
        title: '',
        text: '',
        datetime: new Date(),
    });


    const sendPosts = async e => {
        e.preventDefault();
        try{
            await axios.post("https://annieversary-d3dfb-default-rtdb.europe-west1.firebasedatabase.app/posts.json",data);
        } catch (error) {
            alert("Что-то пошло не так...");
        }
    };

    const changeMessage = (e) => {
        const {name, value} = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className='formPost'>
           <h3>Add new post:</h3>
            <form onSubmit={sendPosts}>
                <p>Title:</p>
                <input type="text" name="title" className="postInput" value={data.title} onChange={changeMessage} placeholder="Введите ваше сообщение..." />
                <p>Description:</p>
                <textarea name="text" value={data.text} onChange={changeMessage} placeholder='Введите ваше сообщение...'></textarea>
                <p> <button type="submit" className="sendBtn">Send Post</button></p>
            </form>


        </div>
    );
};

export default AddPost;