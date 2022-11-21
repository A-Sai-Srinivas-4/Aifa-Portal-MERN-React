import { useParams } from "react-router-dom";
import Data from "../Json/data.json";
import GetSidebar from "../Sidebar/Sidebar";
import Header from "../Header";
import "./index.css";

const ProjectDetails = ({ match }) => {
  const { projectname } = useParams();

  const myObj = {
    Emp_Details: {
      Name: [],
      Role: [],
      Team: [],
    },
    Teams: {
      Dev_Team: [],
      QA_Team: [],
    },
    Scrum_Master: [],
    Current_Sprint: [],
  };

  // const fetchProjectData = () => {
  //   Data.Resources.Project_Details.map(
  //     (each) =>
  //       each.Name === projectname &&
  //       myObj.Teams.Dev_Team.push(each.Details.Advance.Development_Team) &&
  //       myObj.Teams.QA_Team.push(each.Details.Advance.QA_Team) &&
  //       myObj.Scrum_Master.push(each.Scrum_Master) &&
  //       myObj.Current_Sprint.push(each.Current_Sprint)
  //   );

  //   return myObj;
  // };

  //const projDetails = fetchProjectData();
  //console.log(projDetails)

  const fetchEmpData = () => {
    Data.Resources.Empolyee_Details.map((each) =>
      each.Details.Advance.Projects.map(
        (e) =>
          e.Project === projectname &&
          myObj.Emp_Details.Name.push(each.Name) &&
          myObj.Emp_Details.Role.push(each.Role) &&
          myObj.Emp_Details.Team.push(each.Team)
      )
    );

    return myObj;
  };
  const Details = fetchEmpData();
  console.log(Details);

  var data = [];

  Details.Emp_Details.Role.forEach(
    (Role, i) =>
      (data = [
        ...data,
        {
          Name: Details.Emp_Details.Name[i],
          Role: Role,
          Team: Details.Emp_Details.Team[i],
        },
      ])
  );

  //console.log(data);

  const getDeptOrder = (e) => <h1 className="emp-name">{e.Name}</h1>;

  return (
    <>
      <Header />
      <div className="sidebar-project-details-container">
        {GetSidebar()}
        <div className="project-details-card ">
          <div className="emp-details-container">
            <div className="project-heading-container">
              <h4 className="project-heading">
                Project Name :
                <span className="heading-text">&nbsp;{projectname}</span>
              </h4>
            </div>
            <div className="emp-card">
              <h1 className="team-heading">Scrum Master :</h1>
              {data.map((e) => {
                return <>{e.Role === "Scrum Master" && getDeptOrder(e)}</>;
              })}
            </div>

            <div className="emp-card">
              <h4 className="team-heading">Development Team :</h4>
              <div className="emp-name-card">
                {data.map((e) => {
                  return (
                    <>{e.Team === "Full-Stack Developer" && getDeptOrder(e)}</>
                  );
                })}
              </div>
            </div>
            <div className="emp-card">
              <h4 className="team-heading">QA Team :</h4>
              <div className="emp-name-card">
                {data.map((e) => {
                  return <>{e.Team === "QA" && getDeptOrder(e)}</>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
