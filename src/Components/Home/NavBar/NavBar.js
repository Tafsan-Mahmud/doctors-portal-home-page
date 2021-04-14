import React from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid mt-3">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" nv collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="nav-li navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Dental services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  text-white" href="#">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white " href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white " href="#">Contact Us</a>
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;