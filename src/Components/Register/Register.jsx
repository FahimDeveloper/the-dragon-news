import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { newUserWithEmail, setUser } = useContext(AuthContext);
    const [accept, setAccept] = useState(false);
    const handleSubmit = (event) => {
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photo = event.target.photo.value;
        newUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                event.target.reset()
                console.log(user)
            }).catch(error => console.log(error.message))
        event.preventDefault();
    }
    return (
        <div>
            <div className='w-50 mx-auto border p-5 rounded-3'>
                <h4 className='text-center fs-3 fw-bold'>Create your account</h4>
                <Form onSubmit={handleSubmit} className='mt-5'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckBox">
                        <Form.Check onClick={() => setAccept(!accept)} type="checkbox" name="accept" label="Accept Terms and condition" />
                    </Form.Group>
                    <Button variant="dark" type="submit" className={`btn-lg w-100 ${accept ? "" : "disabled"}`}>
                        Register
                    </Button>
                </Form>
                <p className='text-center mt-4'>I have already an account ! <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;