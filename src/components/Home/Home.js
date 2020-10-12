import React from 'react';
import Header from '../Header/Header';
import './Home.css';
const Home = () => {
    return (
        <div className="home home-bg">
            <div className="layer">
            <Header></Header>
            <div className="home-section row">
                <div className="booking col-md-4">
                        <h1>Cox's bazar</h1>
                        <p>
                            Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
                        </p>
                        <a href="/Booking"><button className="book-btn">Booking</button></a>
                </div>
                <div className="col-md-8">
                    <div class="travel-place-carosel row">
                        <a href="/Booking">
                        <div className="single-travel-place bg-1">
                        <h2>Cox's bazar</h2>
                        </div>
                        </a>
                        <a href="/Booking">
                        <div className="single-travel-place bg-2">
                        <h2>Sreemangal</h2>
                        </div>
                        </a>
                        <a href="/Booking">
                        <div className="single-travel-place bg-3">
                        <h2>Sundarbans</h2>
                        </div>
                        </a>
                    </div>

                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;