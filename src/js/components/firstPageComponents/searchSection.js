import React,{Component} from "react";


export default class SearchTab extends Component{
render(){
  return(
    <div className="search-wrapper">{/*search section start */}
       <form>
        <input type="text" placeholder="Search" />
       </form>
    </div>
  )
}

}
