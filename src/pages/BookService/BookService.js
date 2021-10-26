import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const BookService = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is booking page</h2>
        </div>
    );
};

export default BookService;