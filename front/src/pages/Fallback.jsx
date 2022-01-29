import React from 'react';
import {Link} from 'react-router-dom'

export const Fallback = () => {
  return <div class="e404">
    <div class="huge">404</div>
    <div class="big">Page not found. 
    <Link to={"/"}>Go back</Link>
    </div>
  </div>;
};


