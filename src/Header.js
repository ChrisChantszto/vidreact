import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <header className="bg-blue-500 p-4 text-white">
            <nav className="container mx-auto flex justify-between items-center">
                <div>
                    <Link to="/" className="font-bold">Home</Link>
                </div>
                <div className="flex justify-center space-x-8">
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faTelegram} />
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div>
                    <Link to="/about" className="mr-4 hover:underline">About</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;