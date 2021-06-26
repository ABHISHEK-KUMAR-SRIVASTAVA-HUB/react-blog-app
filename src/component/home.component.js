import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import { BlogDetailComponent } from "./blog-detail.component";
import { BlogListComponent } from "./blog-list.component";
import { AboutUsComponent } from "./about-us.component";
import { BlogPostComponent } from "./blog-post.component";

const HomeComponent = ({ match }) => {
    return (
        <div>
            <div className="sidenav">
                <a 
                    href="javascript:void(0)" 
                    className={"border-btm-white" + (window.location.pathname == '/home/list' ? ' tab-active ': '') }> 
                    <Link to={`${match.url}/list`}>LIST</Link>
                </a>
                <a 
                    href="javascript:void(0)" 
                    className={"border-btm-white" + (window.location.pathname == '/home/detail' ? ' tab-active ': '') }> 
                    <Link to={`${match.url}/post`}>POST</Link>
                </a>
                <a 
                    href="javascript:void(0)" 
                    className={"border-btm-white" + (window.location.pathname == '/home/aboutus' ? ' tab-active ': '') }> 
                    <Link to={`${match.url}/aboutus`}>ABOUT US</Link>
                </a>
            </div>
            <div className="content">
                <Route path={`${match.url}/list`}          component={ BlogListComponent }/>
                <Route path={`${match.url}/detail/:blog`}  component={ BlogDetailComponent }/>
                <Route path={`${match.url}/aboutus`}       component={ AboutUsComponent }/>
                <Route path={`${match.url}/post`}          component={ BlogPostComponent }/>
            </div>
        </div>
    );
};
export { HomeComponent };