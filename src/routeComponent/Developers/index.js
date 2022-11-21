import DeveloperData from "../DeveloperData";
import Header from "../Header";
import "./index.css";

const Developers = () => (
  <>
    <Header />
    <div className="sidebar-developers-container">
      <div className="dev-display-details-container">
        <h1 className="project-heading">Developer-Details</h1>
        <DeveloperData />
      </div>
    </div>
  </>
);

export default Developers;
