import Home from "./containers/Home";
import About from "./containers/About";
import ParentComponent from "./containers/ParentComponent"
import  DbTest  from "./containers/DbTest";
import DataCheck from "./containers/DataCheck/DataCheck"


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
  {
    path:"/db",
    exact:false,
    component:DbTest
  },
  {
    path:'/data',
    exact:false,
    component:DataCheck
  }

  
 

];

export default routes;
