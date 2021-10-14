import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div className="service-card">
            <img src={img} alt="" />
            <h4>Service: {name}</h4>
            <h5>Price: ${price}</h5>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-primary">Booking</button>
            </Link>
        </div>
    );
};

export default Service;