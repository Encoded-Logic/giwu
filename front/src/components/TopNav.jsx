import React from 'react';
import { Link } from 'react-router-dom';

export const TopNav = ({selected}) => {
    return <div className="top-block flexMe">
        <div className="container flexMe">
            <Link to={"/"} className="top-logo flexMe">GIWU</Link>
            <div className="nav-container flexMe">
                <div className="change-chapter">
                    {selected.book}&nbsp;-&nbsp;
                    {selected.chapter}&nbsp;-&nbsp;
                </div>
            </div>
        </div>
    </div>;
};
