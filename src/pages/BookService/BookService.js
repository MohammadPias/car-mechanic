import React from 'react';
import { useParams } from 'react-router';

const BookService = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>This is booking page {serviceId}.</h2>
        </div>
    );
};

export default BookService;