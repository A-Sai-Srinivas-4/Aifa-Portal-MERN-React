import React, {useState,useEffect} from "react";
//import Data from "../Json/data.json";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

const SplitBasic = () => {
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

  var Project_details
  if (Data1.Resources !== undefined){
     Project_details = Data1.Resources.Project_Details.map((eachItems) => {
      return eachItems;
    });
  }

  return (
   
      <Dropdown as={ButtonGroup} autoClose="outside">
      <Button href="/projects" variant="success">
        Projects
      </Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
      <div className="menu-container">
        <Dropdown.Menu>
          {Data1.Resources && Project_details.map((each) => (
            <Dropdown.Item key={each.ID} href={`/project_details/${each.Name}`}>
              {each.Name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </div>
    </Dropdown>
    
  );
};

export default SplitBasic;
