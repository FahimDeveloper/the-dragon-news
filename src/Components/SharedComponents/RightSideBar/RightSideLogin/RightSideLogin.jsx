import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../../provider/AuthProvider';

const RightSideLogin = () => {
    const { continueWithGoogle, setUser } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        continueWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            }).catch(error => console.log(error.message))
    }
    return (
        <div>
            <h4 className='mb-3'>Login with</h4>
            <Button onClick={handleGoogleLogin} variant="outline-primary w-100 my-1"><FaGoogle /> Login with Google </Button>
            <Button variant="outline-secondary w-100 my-1"><FaGithub /> Login with Github </Button>
        </div>
    );
};

export default RightSideLogin;