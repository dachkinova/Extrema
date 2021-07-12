import axios from "axios";

import React, { useEffect, useState } from "react";

import {LoginButton,LogoutButton} from './NavButtons';

import { useHistory } from 'react-router-dom';

function Profile() {

    const [data, setData] = useState();
    const [loggedIn, setLoggedIn] = useState();

    useEffect(()=> {
        getUserInfo();
    },[]);


    

    const getUserInfo = () => {
        axios.get('/api/users/profile').then((res) => {
            if(res.data.username) {
                setData(res.data.username);
                sessionStorage.setItem('loggedIn', 'true');
                setLoggedIn(true);
                sessionStorage.setItem('user', JSON.stringify(res.data));
            }
        });
    }

    const logout = () => {
        axios.post('api/users/logout').then((res) => {
            sessionStorage.setItem('loggedIn', 'false');
            sessionStorage.removeItem('user');
            setData(res.data);
            setLoggedIn(false);
            // eslint-disable-next-line no-restricted-globals
            history.push({
                pathname: '/login',
            })
        })
    }



    return (
            <React.Fragment>
                <br/><br/><br/>
                    <div style={{ fontSize: "30px" }}>Welcome,</div> 
                    <div style={{ fontSize: "30px" }}>{data}</div>
                    
            </React.Fragment>
    );
}


export {Profile};