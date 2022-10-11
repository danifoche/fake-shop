import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='p-2'>
            <div className="navbar bg-neutral text-neutral-content rounded-xl">
                <Link to="/">
                    <span className="btn btn-ghost normal-case text-xl">
                            Fake Shop
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;