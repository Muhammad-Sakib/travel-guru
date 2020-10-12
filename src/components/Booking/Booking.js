import React from 'react';
import Header from '../Header/Header';
import './Booking.css';
const Booking = () => {
    return (
        <div className="home">
            <div className="layer">
            <Header></Header>
            <div className="home-section row">
                <div className="booking">
                        <h1>Cox's bazar</h1>
                        <p>
                        Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                        </p>
                </div>
                <div className="booking-card">
                    <span>Orgin</span><br/>
                    <input className="wd" type="text" placeholder="Dhaka"/><br/>
                    <span>Destination</span><br/>
                    <input className="wd" type="text" placeholder="Dhaka"/><br/>
                    <span>From</span>
                    <span className="to">To</span><br/>
                    <input  type="date" id="start" name="trip-start" value="07-22"/>
                    <input className="marg" type="date" id="start" name="trip-start" value="07-22"/>
                    <button className="book-btn">Start Booking</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Booking;