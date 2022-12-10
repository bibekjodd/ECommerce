import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navoptions({ path, Icon, text, setMobileNav, className }) {
    const location = useLocation();

    return (
        <Link
            to={path}
            className={`  px-3 py-1 rounded-lg ${location.pathname === path ? 'text-sky-500' : 'hover:bg-neutral-200/40'}
            ${className}`}
            onClick={() => {
                setMobileNav(false);
            }}
        >
            {Icon ? <Icon /> : text}
        </Link>
    )
}

export default Navoptions