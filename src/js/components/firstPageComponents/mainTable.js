import React,{Component} from "react";


export default class MainTable extends Component{
  render(){
    return(
      <table className="table">{/* first left table */}
        <thead>
            <tr className="shadow">
              <th>name</th>
              <th>job-title</th>
              <th>Duration</th>
              <th>1-10 avg</th>
            </tr>
        </thead>
        <tbody>
          <tr className="shadow">
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>Doe</td>
          </tr>
          <tr className="shadow">
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>Doe</td>
          </tr>
          <tr className="shadow">
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>Doe</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
