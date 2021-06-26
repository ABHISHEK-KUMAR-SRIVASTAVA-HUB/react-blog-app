import React, { Component } from 'react';

const BlogRatingComponent = ({rating}) =>  {
    return (
        <div >
            <span className={"fa fa-star" + (rating >= 1  ? " checked" : "")} ></span>
            <span className={"fa fa-star" + (rating >= 2  ? " checked" : "")} ></span>
            <span className={"fa fa-star" + (rating >= 3  ? " checked" : "")} ></span>
            <span className={"fa fa-star" + (rating >= 4  ? " checked" : "")} ></span>
            <span className={"fa fa-star" + (rating >= 5  ? " checked" : "")} ></span>
        </div>
    );
}

export { BlogRatingComponent };
