import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
        console.log(categories)
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className='d-flex flex-column gap-1'>
                {categories.map(nav =>
                    <NavLink
                        className="text-decoration-none py-2 ps-4 rounded text-dark"
                        to={`/category/${nav.id}`}
                        key={nav.id}>
                        {nav.name}
                    </NavLink>)}
            </div>
        </div>
    );
};

export default LeftSideNav;