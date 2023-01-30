import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import Data from "../Json/data.json";
import GetSidebar from "../Sidebar/Sidebar";
import Header from "../Header";
import GetData from "../GetData";
import axios from "axios";
import "./index.css";

const ProjectDetails = ({ match }) => {
  const { projectname } = useParams();
  const [Data1, setData] = useState([]);

  const fetchData = () => {
    axios.get(`http://localhost:8000/api/resources`).then((res) => {
      const reso = res.data;
      //console.log(reso.length);
      setData(...reso);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  //console.log(Data1);

  //console.log(projectname)

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
    //const list = [];
    const tempObj = {};

    Object.entries(Data1.Resources.Project_Details).map((e) => {
      // const removeKey = Object.keys(e[1]).filter((k) => k === "Details");

      //console.log(removeKey)

      if (e[1].Name === projectname) {
        for (let [key, value] of Object.entries(e[1])) {
          if (key !== "Details") {
            tempObj[key] = value;
          } else {
            for (let [key, value] of Object.entries(e[1].Details.Advance)) {
              tempObj[key] = value;
            }
          }
        }

        // for (let [key, value] of Object.entries(
        //   Data.Resources.Project_Details.map((each) => each.Details.Advance)[1]
        // )) {
        //   tempObj[key] = value;
        // }

        //  list.push(tempObj);
      }
    });

    return tempObj;
  };

  var Details;

  if (Data1.Resources !== undefined) {
    Details = fetchEmpData();
    console.log(Data1);
    console.log(Details);
  }

  //var data = [];

  // Details.Emp_Details.Role.forEach(
  //   (Role, i) =>
  //     (data = [
  //       ...data,
  //       {
  //         Name: Details.Emp_Details.Name[i],
  //         Role: Role,
  //         Team: Details.Emp_Details.Team[i],
  //       },
  //     ])
  // );

  //console.log(data);

  //const getDeptOrder = (e) => <h1 className="emp-name">{e.Name}</h1>;

  //console.log(list);
  //console.log(list1);

  return (
    <>
      <Header />
      <div className="sidebar-project-details-container">
        {GetSidebar()}
        <div className="project-details-card ">
          <div className="emp-details-container">
            <div className="project-heading-container">
              <h1 className="project-heading">{projectname}</h1>
            </div>
            <div className="emp-card">
              <div className="keys-values-container">
                {Data1.Resources && <GetData Details={Details} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
