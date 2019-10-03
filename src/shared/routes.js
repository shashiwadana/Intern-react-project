import Home from "./containers/Home";
import About from "./containers/About";
import ParentComponent from "./containers/ParentComponent"
import ReduxTest from "./containers/ReduxTest"


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
  }

];

export default routes;
