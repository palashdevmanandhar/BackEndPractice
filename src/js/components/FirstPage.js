import React,{Component} from "react";
export default class FirstPage extends Component{
  constructor(){
    super();
  }
  render(){

    return(
    <section className="first-section">{/* main section */}
     <div className="wrapper  container-fluid">{/*main wrapper */}
      <div className="top-bar clearfix">{/* top bar*/}
        <h1 className="col-md-9 col-sm-12 col-xs-6">All Applications</h1>
        <i className="fa col-md-3">x</i>
      </div>{/*top bar end*/}
      <div className="search-wrapper">{/*search section start */}
         <form>
          <input type="text" placeholder="Search" />
         </form>
      </div>{/* end */}
      <div className="table-section clearfix">{/*table section end */}
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
        </table>{/* left table end */}
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
        </table>{/* trash table end */}
      </div>{/*table section end*/}
     </div>
     <div className="count">
       <h1>60</h1>
     </div>
    </section>

    )
  }
}
