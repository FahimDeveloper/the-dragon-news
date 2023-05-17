import React from 'react';
import { Button, Card } from 'react-bootstrap';
import image1 from "../../../../assets/1.png"
import image2 from "../../../../assets/2.png"
import image3 from "../../../../assets/3.png"

const LeftSideNews = () => {
    return (
        <div className='d-flex flex-column gap-3 mt-4'>
            <Card>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LeftSideNews;