import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./index.css";

const CardItem = ({ details }) => {
  const projectName = details;
  //console.log(projectName);

  const randomcolors = () => {
    return "#" + Math.floor(Math.random() * 26743815).toString(13);
    //      Adding css  style 26723815 style={{backgroundColor : randomcolors()}}
  };

  return (
    <>
      <Link
        to={`/project_details/${projectName}`}
        style={{ borderTopColor: randomcolors() }}
        className="card-link"
      >
        <div key={uuidv4()} className="project-card">
          <h3 className="heading-text">{projectName}</h3>
        </div>
      </Link>
    </>
  );
};

export default CardItem;
