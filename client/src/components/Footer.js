import React from "react";
import { NavLink } from "react-router-dom";
import facebookImage from '../assets/images/facebook40x40.png';
import instagramImage from '../assets/images/instagram40x40.png';
import twitterImage from '../assets/images/twitter40x40.png';
import youtubeImage from '../assets/images/youtube40x40.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links nav-container ">
                <h3>Links:</h3>

                <ul className="footer-list">
                    <li>
                        <NavLink to="/" exact activeClassName="selected">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="selected">
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="selected">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>

                <h3>Follow Us:</h3>

                <ul className="footer-icons">
                    <li>
                        <a href="https://www.instagram.com/?hl=en">
                            <img
                                src={instagramImage}
                                alt="Instagram Icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/">
                            <img
                                src={facebookImage}
                                alt="Facebok Icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/?lang=en">
                            <img
                                src={twitterImage}
                                alt="Twitter Icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw">
                            <img
                                src={youtubeImage}
                                alt="Youtube Icon"
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer-copyright">
                <p>&copy; 2019 Arnaud Karambizi</p>
            </div>
        </footer>
    );
}
