import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
            <div className="text-center m-5">
                <h1>404 - Not found</h1>
                <Link to="/">
                    <p>Click here to get back to the homepage</p>
                </Link>
            </div>
    )
}
