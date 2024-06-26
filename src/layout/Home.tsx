import React from "react";
import { useNavigate } from "react-router-dom";


const Home = ()=> {
    const navigate = useNavigate();
    const handleclick = ()=> {
        navigate('/budget-app');
    };
    return (
        <div className="home"> 
            <h1> Welcome to The Budget App </h1>
            <h2> It's developed by Atheer Ibrahim </h2>
            <button onClick={handleclick}> Click here to access it ! </button>
        </div>
    )
}

export default Home;