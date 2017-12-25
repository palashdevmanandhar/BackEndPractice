import React,{Component} from "react";

export default class TopBar extends Component{
  render(){
    return(
      <div className="top-bar clearfix">{/* top bar*/}
        <h1 className="col-md-9 col-sm-12 col-xs-6">All Applications</h1>
        <i className="fa fa-times col-md-3"></i>
      </div>
    )
  }
}
