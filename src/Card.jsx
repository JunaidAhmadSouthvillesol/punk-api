import React from 'react';
import logo from './images/net.webp';
import './Card.css';
const Card = () => {
    return (
        <div className="card-main">
            <div className="crd">
                <div className="card-back">
                    <div className="card-image">
                        <a href="/">
                            <img src={logo} alt="netflix_image" />
                        </a>
                        <div className="card-title">
                            <h3>Netflix</h3>
                            <div className="card-content">
                                <p>Unlimited Edition</p>
                                <span className='price'>$300 <del className='del'>499</del></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;