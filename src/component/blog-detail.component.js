import React, { Component } from 'react';
import { BlogRatingComponent } from "../component/blog-rating.component";
import { GlobalStore } from "../service/global-store.service";

const BlogDetailComponent = ({match}) => {
    
    let selectedblog = {};
    const blogList  = GlobalStore.get("blogList");
    
    if(blogList && blogList.length > 0){
        for(let i = 0 ; i< blogList.length; i++){
            if(blogList[i].id === match.params.blog) {
                selectedblog = blogList[i];
            }
        }
    } else{
        window.location.href = "/home/list";
    }
    
    return (
        <div className="card">
            <h2>{selectedblog.title}</h2>
            <h5> Oct 2, 2018
                 {BlogRatingComponent({rating: selectedblog.rating})}
            </h5>
            <div className="fakeimg" style={{ height: "200px"}}>
            <img src={require("../asset/images/image.jpg")} alt="Cinque Terre" width="300" height="200" />
            </div>
           
            <p>{selectedblog.description? selectedblog.description: ""}</p>
            
            <p>{selectedblog.detail ? selectedblog.detail : "   "}</p>
        </div>
    );

}

export { BlogDetailComponent };
