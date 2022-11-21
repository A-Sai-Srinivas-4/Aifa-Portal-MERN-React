import { v4 as uuidv4 } from "uuid";
import CardItem from "../CardItem";
import Data from "../Json/data.json";
import "./index.css";

const ProjectData = () => {
  const Project_details = Data.Resources.Project_Details.map((eachItems) => {
    return eachItems;
  });

  console.log(Project_details);

  const newArray = [];
  Project_details.map((eachItem) => {
    const y = newArray.push(eachItem.Name);
    return y;
  });

  // //console.log(newArray);
  // const uniq_project_names = [...details,...new Set(newArray)];
  // //console.log(uniq_project_names)

  return (
    <>
      <div className="project-cards-lists">
        {Project_details.map((each) => {
          return <CardItem key={uuidv4()} details={each} />;
        })}
      </div>
    </>
  );
};

export default ProjectData;
