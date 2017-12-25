import React,{Component} from "react";

export default class TrashTable extends Component{
  render(){
    return(
      <table className="trash-table table"> {/* trash table */}
         <thead>
           <tr>
               <th><i className="fa fa-trash"></i></th>
           </tr>
         </thead>
         <tbody>
           <tr>
               <td><i className="fa fa-trash"></i></td>
           </tr>
           <tr>
               <td><i className="fa fa-trash"></i></td>
           </tr>
           <tr>
               <td><i className="fa fa-trash"></i></td>
           </tr>
         </tbody>
      </table>
    )
  }
}
