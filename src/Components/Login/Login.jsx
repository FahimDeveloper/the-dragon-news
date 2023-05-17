import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { loginUserWithEmail, setUser } = useContext(AuthContext)
    const handleSubmit = (event) => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        loginUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
                event.target.reset();
            }).catch(error => console.log(error.message))
        event.preventDefault();
    }
    return (
        <div className='w-50 mx-auto border p-5 rounded-3'>
            <h4 className='text-center fs-3 fw-bold'>Login your account</h4>
            <Form onSubmit={handleSubmit} className='mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 text-end" controlId="formBasicCheckbox">
                    <p style={{ cursor: "pointer" }}>Forgot password</p>
                </Form.Group>
                <Button variant="dark" type="submit" className="btn-lg w-100">
                    Login
                </Button>
            </Form>
            <p className='text-center mt-4'>Don't have an account ? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;