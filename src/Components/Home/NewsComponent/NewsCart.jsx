import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from "react-icons/fa";
import moment from 'moment';
import Rating from 'react-rating';

const NewsCart = (props) => {
    const { _id, others_info, rating, total_view, title, author, image_url, details } = props
    return (
        <div>
            <Card className="mb-3">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center gap-4'>
                        <img style={{ width: 50 }} className='rounded-circle' src={author.img} alt="" />
                        <div>
                            <p className='my-1 fw-bold'>{author.name}</p>
                            <p className='my-1'>
                                {moment(author?.published_date).format("dddd, MMMM D, YYYY, h:mm a")}
                            </p>
                        </div>
                    </div>
                    <div className='d-flex gap-2'>
                        <FaRegBookmark style={{ cursor: "pointer" }} />
                        <FaShareAlt style={{ cursor: "pointer" }} />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" className='my-2' src={image_url} />
                    <Card.Text className='my-2'>
                        {details.length < 250
                            ? <>{details}</>
                            : <>{details.slice(0, 250)}.... <Link to={`/${_id}/newsdetails`} className='text-primary text-decoration-none'>Read more</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div className='d-flex gap-2 align-items-center'>
                        <Rating
                            placeholderRating={rating.number}
                            placeholderSymbol={<FaStar className='text-warning fs-5' />}
                            emptySymbol={<FaRegStar className='fs-5' />}
                            fullSymbol={<FaStar className='fs-5' />}
                            fractions={2}
                            readonly
                        />
                        {rating.number}
                    </div>
                    <div>
                        <FaEye /> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;