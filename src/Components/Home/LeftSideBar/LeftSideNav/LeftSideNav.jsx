import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className='d-flex flex-column gap-1'>
                {categories.map(nav =>
                    <Link
                        className="text-decoration-none py-2 ps-4 rounded text-dark"
                        to={`/categories/${nav.id}`}
                        key={nav.id}>
                        {nav.name}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default LeftSideNav;