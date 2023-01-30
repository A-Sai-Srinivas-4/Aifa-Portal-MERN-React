import { Route, Switch } from "react-router-dom";
import Developers from "./routeComponent/Developers";
import Home from "./routeComponent/Home";
import Projects from "./routeComponent/Projects";
import ProjectDetails from "./routeComponent/ProjectDetails";
import Header from "./routeComponent/Header";
import Footer from "./routeComponent/Footer";
import NotFound from "./routeComponent/NotFound";
import "./App.css";
import Sidebar from "./routeComponent/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <div className="app-container">
        <div className="responsive-container">
          <div className="app-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/developers" component={Developers} />
              <Route exact path="/Projects" component={Projects} />
              <Route exact path="/project_details" component={ProjectDetails} />
              <Route
                exact
                path="/project_details/:projectname"
                component={ProjectDetails}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
       {/* <Footer />*/}
      </div>
    </>
  );
};
export default App;
