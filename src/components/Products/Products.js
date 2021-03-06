import React from 'react';
import {Link,withRouter} from "react-router-dom";

const Products = (props) => {
   
    let prodArrr;
    if(props.lan==="English"){
      
          prodArrr = props.prodArr.map((el,index)=>{
     
            return  (
          <div className="card m-2 shadow" style={{width:"20rem"}} key={el.cid}>
    
              <span 
              href={el.cid} 
              className="badge badge-info" 
              style={{position:"absolute",top:"5px",left:"5px"}}>{el.cid}</span>
               
            
              <Link  to = { {
              pathname:"/en"+props.match.url+"/"+el.cid
               }} >
              <span onClick={()=>{
                 localStorage.setItem("prodENcid",el.cid);
                 localStorage.setItem("prodENdesc",el.description);
                 localStorage.setItem("prodENname", el.name);
                 localStorage.setItem("prodENurl", el.url);
                 localStorage.setItem("prodENcatname", el.subcategory[0].url);
                 localStorage.setItem("prodENcaturl", el.subcategory[0].url);
                props.passProduct(el)}}
              style={{color:"lightgrey"}}>
                <i style={{position:"absolute",top:"5px",right:"40px",color:"green"}} className="fas fa-info-circle"></i>
               
              </span>
             
              </Link>
    
              <span 
              onClick={()=> props.productEditHandler(el)}  
              style={{color:"lightgrey"}}>
                <i 
                className="fas fa-edit" 
                style={{position:"absolute",top:"5px",right:"5px",color:"red"}}>
                </i>
              </span>
    
              <div className="card-body">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">{el.description}</p>
                <div className="d-flex justify-content-around">
                  <a 
                  href={el.url} 
                  className="badge badge-warning">Product link</a>
                  <a 
                  href={el.subcategory[0].url} 
                  className="badge badge-secondary">{el.subcategory[0].name}</a>
                </div>
      
              </div>
      </div>)
      })

    }
    else if(props.lan==="German"){
      prodArrr = props.prodArr.map((el,index)=>{
      
        return  (
      <div className="card m-2 shadow" style={{width:"20rem"}} key={el.cid}>

          <span 
          href={el.cid} 
          className="badge badge-info" 
          style={{position:"absolute",top:"5px",left:"5px"}}>{el.cid}</span>
          
        
          <Link  to = {{
          pathname:"/de"+props.match.url+"/"+el.cid
          
        }} >
           <span onClick={()=>{
                 localStorage.setItem("prodDEcid",el.cid);
                 localStorage.setItem("prodDEdesc", el.description);
                 localStorage.setItem("prodDEname", el.name);
                 localStorage.setItem("prodDEurl", el.url);
                 localStorage.setItem("prodDEcatname", el.subcategory[0].name);
                 localStorage.setItem("prodDEcaturl", el.subcategory[0].url);
                props.passProduct(el)}}
          style={{color:"lightgrey"}}>
            <i style={{position:"absolute",top:"5px",right:"40px",color:"green"}} className="fas fa-info-circle"></i>
           
          </span>
         
          </Link>

          <span 
          onClick={()=> props.productEditHandler(el)}  
          style={{color:"lightgrey"}}>
            <i 
            className="fas fa-edit" 
            style={{position:"absolute",top:"5px",right:"5px",color:"red"}}>
            </i>
          </span>

          <div className="card-body">
            <h5 className="card-title">{el.name}</h5>
            <p className="card-text">{el.description}</p>
            <div className="d-flex justify-content-around">
              <a 
              href={el.url} 
              className="badge badge-warning">Product link</a>
              <a 
              href={el.subcategory[0].url} 
              className="badge badge-secondary">{el.subcategory[0].name}</a>
            </div>
  
          </div>
  </div>)
  })
    }

    if(props.prodArr.length===0){
      return null;
    }
    
   
 
     return (
        <div className="d-flex flex-wrap w-100 p-1 justify-content-center bg-light my-4" style={{margin:"0 auto"}}>
            
        {prodArrr}
      
      </div>
     )
}
 


export default withRouter(Products);