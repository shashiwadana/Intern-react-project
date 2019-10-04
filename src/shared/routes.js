import Home from "./containers/Home";
import About from "./containers/About";
import ParentComponent from "./containers/ParentComponent"



const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path:"/about",
    exact:false,
    component: About
  },
  {
    path:"/parent",
    exact:false,
    component:ParentComponent
  },
  
 

];

export default routes;
