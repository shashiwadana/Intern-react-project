import Home from "./containers/Home";
import About from "./containers/About";
import ParentComponent from "./containers/ParentComponent"
import ReduxTest from "./containers/ReduxTest"
import CheckData  from "./containers/CheckData";
import { Register } from "./containers/Register";
import { Login } from "./containers/Login/Login";



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
    path:"/redux-test",
    exact:false,
    component:ReduxTest
  },
  {
    path:"/data",
    exact:false,
    component:CheckData
  },
  {
    path:"/register",
    exact:false,
    component:Register
  },
  {
    path:"/login",
    exact:false,
    component:Login
  }

];

export default routes;
