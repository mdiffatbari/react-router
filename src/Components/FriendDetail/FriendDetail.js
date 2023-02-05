import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friendInfo, setFriendInfo] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriendInfo(data));
    }, []);
    return (
        <div>
            <h1>This is friend page {friendId}</h1>
            <h1>Name: {friendInfo.name}</h1>
            <p>Email: {friendInfo.email}</p>
            <p>phone: {friendInfo.phone}</p>
        </div>
    );
};

export default FriendDetail;