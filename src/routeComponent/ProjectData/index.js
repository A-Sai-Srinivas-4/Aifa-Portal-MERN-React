import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CardItem from "../CardItem";
//import Data from "../Json/data.json";
import axios from "axios";
import "./index.css";

const ProjectData = () => {
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

  var Project_details;
  if (Data1.Resources !== undefined) {
    Project_details = Data1.Resources.Project_Details.map((eachItems) => {
      return eachItems;
    });
    //console.log(Data1.Resources);

    //console.log(Data);
    //console.log(Project_details);

    const newArray = [];
    Project_details.map((eachItem) => {
      const y = newArray.push(eachItem.Name);
      return y;
    });
  }

  console.log(Project_details);

  // //console.log(newArray);
  // const uniq_project_names = [...details,...new Set(newArray)];
  // //console.log(uniq_project_names)

  return (
    <>
      <div className="project-cards-lists">
        {Data1.Resources &&
          Project_details.map((each) => {
            return <CardItem key={uuidv4()} details={each} />;
          })}
      </div>
    </>
  );
};

export default ProjectData;

//
