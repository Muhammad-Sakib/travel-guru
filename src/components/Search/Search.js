import React from 'react';
import './Search.css';
import Header from '../Header/Header';
import img1 from './Rectangle 26.png';
import img2 from './Rectangle 27.png';
import img3 from './Rectangle 28.png';
import star from './star_1_.png';

const Search = () => {
    const map = 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.2447751871!2d91.93286104570957!3d21.45104335600496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox%27s%20Bazar!5e0!3m2!1sen!2sbd!4v1602394708628!5m2!1sen!2sbd"
    
    const mapstyles = {
        width: "450px", 
        height:"800px",
        border:0,
    }
    return (
        <div>
            <Header></Header>
            <br/>
            <hr/>
            <div className="container row">
                <div className="col-md-7">
                    <p>252 stays Apr 13-17 3 guests</p>
                    <h4>Stay in Cox’s Bazar</h4>
                    <div className="hotel-card row">
                        <div className="col-md-6">
                        <img src={img1} alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                            <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                            <p>Wif Air conditioning Kitchen</p>
                            <p>Cancellation fexibility availiable</p>
                            <img class="star" src={star} alt=""/>
                            <h6>4.9(20)</h6><span class="flt"><h6>$34/</h6><span>night $167 total</span></span>
                        </div>
                    </div>
                    <div className="hotel-card row">
                        <div className="col-md-6">
                        <img src={img2} alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                            <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                            <p>Wif Air conditioning Kitchen</p>
                            <p>Cancellation fexibility availiable</p>
                            <img class="star" src={star} alt=""/>
                            <h6>4.9(20)</h6><span class="flt"><h6>$34/</h6><span>night $167 total</span></span>
                        </div>
                    </div>
                    <div className="hotel-card row">
                        <div className="col-md-6">
                        <img src={img3} alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                            <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                            <p>Wif Air conditioning Kitchen</p>
                            <p>Cancellation fexibility availiable</p>
                            <img class="star" src={star} alt=""/>
                            <h6>4.9(20)</h6><span class="flt"><h6>$34/</h6><span>night $167 total</span></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 map">
                <iframe src={map}  frameborder="0" style={mapstyles} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                
                </div>
            </div>
        </div>
    );
};

export default Search;