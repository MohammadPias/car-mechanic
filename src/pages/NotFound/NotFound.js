import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3 className="text-center">404</h3>
            <h6 className="text-center text-danger">This Page is not Found</h6>
            <Link to="/home"><button>Back Home</button></Link>
        </div>
    );
};

export default NotFound;