import React, {Component} from 'react';
 
class Search extends Component {
 constructor(props){
    super(props)
    this.state = {
      searchBy:"name",

    }
}

searchByHandler = (e) => {
this.setState({searchBy:e.target.value})
}

searchChangeHandler = (e) => {
  let type = this.state.searchBy
  this.props.searchProdHandler(e.target.value,type)
}


 render(){
  
  return (
      <div className=" d-flex justify-content-between align-items-center w-100 bg-light">
        <div>
          <div className="form-inline ml-2">
            <input onChange={this.searchChangeHandler} className="form-control" type="search" placeholder="Search" />
            <div className="input-group-prepend">
              <div className="input-group-text">by</div>
            </div>
            <select className="form-control" onChange={this.searchByHandler}>
                <option className="selected" value="name">name</option>
                <option value="cid">cid</option>
                <option value="category">category</option>
            </select>
          </div>
        </div>
         </div>
      );
     }
}
 
export default Search;