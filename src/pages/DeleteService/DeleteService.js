import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const DeleteService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://hidden-oasis-55888.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleDelete = (id) => {
        const url = `https://hidden-oasis-55888.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    const remaining = services.filter(service => result._id !== id);
                    setServices(remaining);
                }
            });
    }
    return (
        <div>
            <h2>All Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name}</h4>
                    <button onClick={() => handleDelete(service._id)}> Delete</button>
                </div>)
            }
        </div>
    );
};

export default DeleteService;