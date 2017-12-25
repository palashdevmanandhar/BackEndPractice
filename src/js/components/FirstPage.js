import React,{Component} from "react";
import TopBar from "./firstPageComponents/topbar";
import SearchTab from "./firstPageComponents/searchSection";
import TrashTable from "./firstPageComponents/trashTable";
import MainTable from "./firstPageComponents/mainTable";
import Count from "./firstPageComponents/count";


export default class FirstPage extends Component{
  constructor(){
    super();
  }
  render(){

    return(
    <section className="first-section">{/* main section */}
     <div className="wrapper  container-fluid">{/*main wrapper */}
      <TopBar />
      <SearchTab />

      <div className="table-section clearfix">{/*table section end */}
        <MainTable/>{/* main table end */}
        <TrashTable/>{/* trash table end */}
      </div>{/*table section end*/}
     </div>
      <Count/>
    </section>

    )
  }
}
