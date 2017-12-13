import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

const app = document.getElementById('app');
ReactDOM.render(<FirstPage/>, app);
