import React, { Component } from 'react';

const AboutUsComponent = () =>  {
    return (
        <div >
            <img src={require("../asset/images/about-us.jpg")} alt="" width="100%" height="200" />
            <p style={{fontFamily: "cursive" , fontSize: "25px", marginTop: "4%"}}>On this website’s main page you will find everything lifestyle related – fashion, food, beauty, home decor and more.

            But it’s the About section that introduces you to the team that makes this website an endless source of inspiration.
            
            The page introduces founder Emily Schuman, as well as her blog, books, and fashion collection.
            
            Want to stay in touch?
            
            No problem – the page also features useful links to its social media pages, as well as its online shop.</p>
        </div>
    );
}

export { AboutUsComponent };
