import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;

    //function for onClick event listeners
    const history = useNavigate();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history(url);
    }
    const friendStyle = {
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
        backgroundColor: 'tomato',
        color: 'white',
        width: '50%',
    }
    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>
                <button>Show detail Of {id}</button>
            </Link>
            <button onClick={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;