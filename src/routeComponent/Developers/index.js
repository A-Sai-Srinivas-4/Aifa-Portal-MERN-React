import DeveloperData from "../DeveloperData";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import "./index.css";

const Developers = () => (
  <>
    <div>
      <div className="project-details-back-container">
        <div className="back-container">
          <Link to="/" className="back-option">
            <MdOutlineArrowBackIosNew size={25} />
          </Link>
        </div>
        <div className="project-heading-container">
          <h1 className="project-heading">Developer-Details</h1>
        </div>
      </div>
      <DeveloperData />
    </div>
  </>
);

export default Developers;
