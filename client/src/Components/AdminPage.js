import React from 'react'
import axios from 'axios';

const AdminPage = () => {

    // Load handle
    const loadComplain = () => {
        axios.get("/loadComplain")
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) });
    };

    return (
        <div>
            <div onClick={loadComplain}>
                AdminPage
            </div>
        </div>
    )
}

export default AdminPage