import React, { useState, useEffect, useParams } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    props.setLog(false);
    const { register, handleSubmit } = useForm();
    let isRegistered = false;
    let currentUser = null;
    const newNavigate = useNavigate()
    let allUsers = [];
    const open = async () => {
        let usersUrl = await fetch("http://localhost:5000/users");
        let userUrl = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await usersUrl.json();
        allUsers = userData;
    }
    // useEffect(() => {
    //     open();
    // }, []);
    // const { currentUser } = useParams();
    const checkUser = async (data) => {
        await open();
        allUsers.forEach(element => {
            if (data.username === element.username && data.website === element.website) {
                isRegistered = true
                currentUser = element.id;
            }
        });
        if (isRegistered) {
            props.setUserId(currentUser);
            newNavigate(`/User/${currentUser}/home`);
        }
        else {
            alert("you are not register")
            newNavigate('/Login');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(checkUser)}>
                <label htmlFor="username"></label>
                <input type="text" name="username"{...register('username', { required: true })} />
                <label htmlFor="website"></label>
                <input type="text" name="website"{...register('website', { required: true })} />
                <button>Login</button>
            </form>

        </div>
    )

}
