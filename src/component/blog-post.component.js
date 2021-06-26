import React, {Component} from 'react';
import { FormValidationService } from '../service/form-validation.service';
import { GlobalStore } from '../service/global-store.service';

class BlogPostComponent extends Component {

  constructor(){
    super();
    this.state = {
      blogData: {
        title: {
          value: "",
          isValid: true,
          validations: ['isRequired']
        },
        description: {
          value: "",
          isValid: true ,
          validations: ['isRequired']
        },
        detail: {
          value: "",
          isValid: true ,
          validations: ['isRequired', 'isMinlength']
        }
      }
    }
  }

  handleChange = (event) => {
    const blogData = this.state.blogData
    blogData[event.target.name].value = event.target.value;
    this.setState({blogData});
  };

  addNewPost = () => {
    let newPost  = {
      id:  (Math.floor(Math.random() * 99999) + 1) + "",
      title: this.state.blogData.title.value,
      description: this.state.blogData.description.value,
      detail: this.state.blogData.detail.value,
      rating: 1
    };

    const newblogList = GlobalStore.get("blogList");
    newblogList.unshift(newPost);
    GlobalStore.set("blogList", newblogList);
    this.props.history.push('/home/list');
  }
 
  onFormSubmit = (event) => {
    event.preventDefault();
    const blogData = this.state.blogData;

    // CHECK VALIDATIONS FOR POST FORM
    for(let field in blogData) {
      for(let i = 0; i < blogData[field].validations.length; i++) {
        if(FormValidationService[blogData[field].validations[i]](blogData[field].value)){
          blogData[field].isValid = true;
        } else{
          blogData[field].isValid = false;
          this.setState({blogData});
          return;
        }
      };
    };
    
    this.addNewPost();
  };

  render() {
    return (
      <div >
        <div className="header">
            <h2>Pen Your Thoughts</h2>
        </div>
        <form 
          style={{marginTop: "2%"}} 
          className="form-horizontal"
          name="BlogPostForm" 
          noValidate  
          onSubmit={ this.onFormSubmit }
        >
         
          <div className="form-group">
            <label className="control-label col-sm-2" >Title:</label>
            <div className="col-sm-10">
              <input 
                type="text"  
                value={this.state.blogData.title.value}  
                className={(!this.state.blogData.title.isValid ? "error" : "") + " form-control"}
                id="title" 
                name="title"
                placeholder="Enter title" 
                onChange={this.handleChange}/>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" >Description:</label>
            <div className="col-sm-10"> 
              <input 
                type="text"  
                value={this.state.blogData.description.value}  
                className={(!this.state.blogData.description.isValid ? "error" : "") + " form-control"}
                id="description" 
                placeholder="Enter Description"
                onChange={this.handleChange}
                name="description"
                />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" >Detail:</label>
            <div className="col-sm-10"> 
              <textarea  
                rows="6" 
                value={this.state.blogData.title.detail}  
                className={(!this.state.blogData.detail.isValid ? "error" : "") + " form-control"}
                id="detail" 
                placeholder="Enter Detail (min 25 chars)"
                onChange={this.handleChange}
                name="detail"
                />
            </div>
          </div>

          <div className="form-group"> 
            <div className="col-sm-offset-2 col-sm-10">
                <input type="submit" value="POST" />
            </div>
          </div>
        </form>
      </div>
    
    );  
  }
}

export  { BlogPostComponent };