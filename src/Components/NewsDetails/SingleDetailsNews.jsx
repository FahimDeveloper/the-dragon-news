import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'

const SingleDetailsNews = ({ newsDetails }) => {
    const { image_url, title, details, category_id } = newsDetails;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='my-3'>{title}</Card.Title>
                    <Card.Text className='my-3'>
                        {details}
                    </Card.Text>
                    <Link to={`/categories/${category_id}`}>
                        <Button variant="danger"> <FaArrowLeft /> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleDetailsNews;