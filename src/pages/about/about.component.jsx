import React from "react";
import './about.styles.scss';

const AboutPage = () =>(
    <div className="about-page">
        <div className="row1">
            <div className="column1">
                <h1>About Us</h1>   
                <div>
                    <p className="story">
                        Easy Donation is a mission driven, volunteer-operated nonprofit organization, that has served the 
                        animal shelter community by helping them with online fundraising and donor engagement.
                        We have supported over XXX causes, and have been the technology partner for hundreds of 
                        animal shelters.
                        <br/>
                        <br/>
                        One biggest challenge an animal shelter has is the limited resources. However, because of various constrains, 
                        animal lovers may not always be able to drop off their donations to a shelter site despite of their willingness to 
                        do so.  Please enjoy this unprecedented online donation experience with our modern, all-in-one platform and 
                        best in class customer support.
                        <br/>
                        <br/>
                        Simply add anything you would like to donate (cash, food, services, etc.) to the cart and finish checking out. We 
                        will have the donations delivered to the your designated shelters. 
                    </p>
                </div>
            </div>
            
            <div className="column2">
                <div className="picture">
                    <div className="slogan">
                        1000+ people just like you make a difference in their communities with Easy Donation
                    </div>  
                </div> 
            </div>
        </div>  
        <div className='disclaimer'>
            *Disclaimer: Pictures used by this site are for learning purpose only. Therefore copyright allowance is assumed for this fair use.*
        </div>

    </div>

);

export default AboutPage;