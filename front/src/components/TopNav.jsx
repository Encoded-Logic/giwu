import React from 'react';
import { Link } from 'react-router-dom';

export const TopNav = ({selected}) => {
    return <div className="top-block">
        <div className="top-container">
            <Link to={"/"} className="top-logo">GIWU</Link>
            <div className="nav-container">
                <div className="change-chapter">
                    {selected.book}&nbsp;-&nbsp;
                    {selected.chapter}&nbsp;-&nbsp;
                </div>
            </div>
        </div>
    </div>;
};
