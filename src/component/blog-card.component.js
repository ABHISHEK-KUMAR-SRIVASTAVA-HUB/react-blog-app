import React, { Component } from 'react';
import { BlogRatingComponent } from "../component/blog-rating.component";

const BlogCardComponent = ({blog, onBlogSelect}) =>  {
    return (
        <div 
            className="gallery"
            onClick= { ()=> {
                onBlogSelect(blog)
            }} 
        >
            <a href="javascript:void(0)">
                <img src={require("../asset/images/image.jpg")} alt="Cinque Terre" width="300" height="200" />
            </a>
            <div className="desc">
                {blog.description}
                {BlogRatingComponent({rating: blog.rating})}
            </div>
        </div>
    );
}

export { BlogCardComponent };
