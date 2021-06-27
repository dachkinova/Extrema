import React from 'react';
import {useHistory} from "react-router-dom";
import '../styles/style.css';

const HomeButton = () => {
    let history = useHistory();
    const handleCLick = () => {
        history.push("/");
    }
    return (
       <li onClick={handleCLick}><a>Home</a></li>
    )
}

const AdventuresButton = () => {
    let history = useHistory();
    const handleCLick = () => {
        history.push("/adventures");
    }
    return (
       <li onClick={handleCLick}><a>Adventures</a></li>
    )
}

export {HomeButton, AdventuresButton};