import React, { Component } from 'react';

import "../asset/styles/list.style.css";

import { SearchBarComponent } from "../component/search-bar.component";
import { BlogCardComponent }  from "../component/blog-card.component"

import { BlogApiService } from "../service/blog.api.service";
import { Pagination } from "../service/pagination.service";
import { GlobalStore } from "../service/global-store.service";

class BlogListComponent extends Component {

    constructor(){
        super();
        this.state = {
            allBlogs: [],
            currentBlogs: [],
            currentPage: null,
            totalPages: null,
            originalBlogList: []
        }
        
        
    }
    componentDidMount(){
        if(GlobalStore.get("blogList") &&
        GlobalStore.get("blogList").length > 0 ){
            this.setState({
                allBlogs: GlobalStore.get("blogList"),
                originalBlogList: GlobalStore.get("blogList")
            })
        } else{
            BlogApiService.getBlogList().then(response => {
                GlobalStore.set("blogList", response.data);
                this.setState({
                    allBlogs: response.data,
                    originalBlogList: response.data,
                })
            })
        }
    }

    onPageChanged = data => {
        const { allBlogs } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
    
        const offset = (currentPage - 1) * pageLimit;
        const currentBlogs = allBlogs.slice(offset, offset + pageLimit);
    
        this.setState({ currentPage, currentBlogs, totalPages });  
    };

    setDataforPageChange = (blogList) => {
        const data  = { 
            "currentPage": (document.getElementsByClassName("page-item active") &&
                            document.getElementsByClassName("page-item active")[0] && 
                            document.getElementsByClassName("page-item active")[0].textContent) ? +(document.getElementsByClassName("page-item active")[0].textContent): 1,
            "totalPages": parseInt(blogList.length/3) + 1,
            "pageLimit":3,
            "totalRecords": blogList.length
        };
        this.onPageChanged(data);
    }

    updateBlogList = (blogList) => {
        if(blogList.length > 0) {
            this.setState({
                allBlogs: blogList
            }, () => {
                this.setDataforPageChange(blogList);
            });
        } else {
            this.setState({
                allBlogs: this.state.originalBlogList
            }, () => {
                this.setDataforPageChange(this.state.originalBlogList);
            });
        }
        
    }

    onSearch = (searchText) => {
        let blogList = [];
        if(searchText) {
            for(let i = 0 ; i < this.state.originalBlogList.length ; i++){
                if(this.state.originalBlogList[i].description.toLowerCase().indexOf(searchText.toLowerCase()) !=-1){
                    blogList.push(this.state.originalBlogList[i]);
                }
            }
            this.updateBlogList(blogList);
            
        } else{
            this.updateBlogList(blogList);
        }  
    }

    onBlogSelect = (blog) =>{
        this.props.history.push({
            pathname: '/home/detail/' + blog.id,
        });
    }
    
    render() {

        const {
            allBlogs,
            currentBlogs,
            currentPage,
            totalPages
        } = this.state;

        const totalBlogs = allBlogs.length;

        if (totalBlogs === 0) return null;

        return (
            <div className="">
                <div className="header">
                    <h2>Thoughts Spot</h2>
                </div>
                {
                    SearchBarComponent({ onSearch: this.onSearch})
                }
                <div style={{width: "100%", float: "left"}}>
                    {currentBlogs.map((blog, index) => (
                        <BlogCardComponent blog={blog} onBlogSelect={this.onBlogSelect} key={index}></BlogCardComponent>
                    ))}
                </div>
                
                <div>
                    {currentPage && totalBlogs > 3 && (
                    <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                        Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                        <span className="font-weight-bold">{totalPages}</span>
                    </span>
                    )}
                </div>

                <div>
                    <Pagination
                        totalRecords={totalBlogs}
                        pageLimit={3}
                        pageNeighbours={1}
                        onPageChanged={this.onPageChanged}
                    />
              </div>
                
            </div>
        );
    }
}

export { BlogListComponent } ;
