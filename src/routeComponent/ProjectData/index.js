import { v4 as uuidv4 } from "uuid";
import CardItem from "../CardItem";
import Data from "../Json/jsonData.json";
import "./index.css";

const ProjectData = () => {
  const developer_details = Data.map((eachItems) => {
    return eachItems.Projects;
  });

  //console.log(developer_details)

  const newArray = [];
  developer_details.map((eachItem) => {
    let x = eachItem.map((name) => {
      const y = newArray.push(name.Name);
      return y;
    });
    return x;
  });

  const uniq_project_names = [...new Set(newArray)];
  //console.log(uniq_project_names)

  return (
    <>
      <div className="project-cards-lists">
        {uniq_project_names.map((eachName) => {
          return <CardItem key={uuidv4()} details={eachName} />;
        })}
      </div>
    </>
  );
};

export default ProjectData;
