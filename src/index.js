import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
<Router>
<App />
</Router>,

document.getElementById("root"));
=======
import{ BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(

   <Router>
    <App />
    </Router>, document.getElementById("root"));
>>>>>>> 786706fd578135535c2219aa79181102078a8928
serviceWorker.unregister();
