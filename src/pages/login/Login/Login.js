import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../context/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirecy_url = location.state?.from;
    const {users, handleGoogleSignIn, setIsLoding} = useAuth();

    const handleGoogleLogin = () => {
        handleGoogleSignIn()
        .then(result => {
            history.push(redirecy_url);
        })
        .finally(()=> setIsLoding(false)
        )
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-primary">Sign in with Google</button>
        </div>
    );
};

export default Login;