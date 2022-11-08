import { useParams } from "react-router-dom";
import Data from "../Json/jsonData.json";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import "./index.css";

const ProjectDetails = ({ match }) => {
  const { projectname } = useParams();

  const myArray = [];

  const fetchData = () => {
    Data.map((each) =>
      each.Projects.map(
        (e) =>
          e.Name === projectname &&
          myArray.push(each.Name) &&
          myArray.push(each.Role)
      )
    );
    return myArray;
  };

  const projDetails = fetchData();

  const Name = [];
  const Role = [];
  const details = {};

  for (var i = 0; i < projDetails.length; i++) {
    if (i % 2 === 0) {
      // index is even
      Name.push(projDetails[i]);
      details.Name = Name;
    } else {
      Role.push(projDetails[i]);
      details.Role = Role;
    }
  }

  //console.log(details);
  var data = [];

  Role.forEach((Role, i) => (data = [...data, { Name: Name[i], Role: Role }]));

  const randomcolors = () => {
    return "#" + Math.floor(Math.random() * 26743815).toString(16);
    //      Adding css  style 26723815 style={{backgroundColor : randomcolors()}}
  };

  return (
    <>
      <div className="project-details-card ">
        <Sidebar />
        <div className="project-details-back-container">
          <div className="back-container">
            <Link to="/projects" className="back-option">
              <MdOutlineArrowBackIosNew size={25} />
            </Link>
          </div>
          <div className="project-heading-container">
            <h1 className="project-heading">
              Project Name :<span className="heading-text">{projectname}</span>
            </h1>
          </div>
        </div>

        <div className="emp-card">
          {data.map((e) => {
            return (
              <>
                <li
                  className="emp-card-item"
                  style={{ borderTopColor: randomcolors() }}
                >
                  <img
                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-vector-contact-symbol-illustration-184752213.jpg"
                    alt="imagess"
                    className="emp-image"
                  />
                  <div className="emp-card-details">
                    <div className="emp-name-card">
                      <h1 className="emp-name">Name:- &nbsp; </h1>
                      <h1 className="emp-name">{e.Name}</h1>
                    </div>
                    <div className="emp-role-card">
                      <h1 className="emp-role">Name:-&nbsp;</h1>
                      <h1 className="emp-role">{e.Role}</h1>
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
