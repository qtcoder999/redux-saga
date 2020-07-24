import React from 'react'
import { Link } from "react-router-dom";


const Navigation = () => (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/git">Git Reader</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
        </ul>

    </div>

);

export default Navigation