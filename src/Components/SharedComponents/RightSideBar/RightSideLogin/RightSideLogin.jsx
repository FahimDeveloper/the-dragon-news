import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSideLogin = () => {
    return (
        <div>
            <h4 className='mb-3'>Login with</h4>
            <Button variant="outline-primary w-100 my-1"><FaGoogle /> Login with Google </Button>
            <Button variant="outline-secondary w-100 my-1"><FaGithub /> Login with Github </Button>
        </div>
    );
};

export default RightSideLogin;