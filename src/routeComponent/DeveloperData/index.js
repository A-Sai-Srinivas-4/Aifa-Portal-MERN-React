import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../Json/jsonData.json";
import EmployeeCard from "../EmployeeCard";
import "./index.css";

const DeveloperData = () => {
  const [search, setSearch] = useState("");
  const [devList, setDevList] = useState([]);

  useEffect(() => {
    setDevList(Data);
  }, [search]);

  const renderSearchSection = () => (
    <div className="search-container">
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="search"
        placeholder="Search"
      />
    </div>
  );

  const renderDevList = () => (
    <ul className="dev-cards-list">
      {devList
        .filter((each) =>
          each.Name.toLowerCase().includes(search.toLowerCase())
        )
        .map((eachCard) => (
          <EmployeeCard cardDetails={eachCard} key={eachCard.id} />
        ))}
    </ul>
  );

  const showDevDetailsByOnSite = (event) => {
    const myArray = [];
    Data.map(
      (each) => each.Offshore === event.target.value && [myArray.push(each)]
    );
    myArray.forEach((element) => {
      setDevList(myArray);
    });
  };

  const showDevDetailsByOffshore = (event) => {
    const myArray = [];
    Data.map(
      (each) => each.Offshore === event.target.value && [myArray.push(each)]
    );
    myArray.forEach((element) => {
      setDevList(myArray);
    });
  };

  const showDevDetailsByRole = (event) => {
    const myArray = [];
    Data.map(
      (each) => each.Role === event.target.value && [myArray.push(each)]
    );
    myArray.forEach((element) => {
      setDevList(myArray);
    });
  };

  const DropdownByOnSite = () => {
    const onsiteDetails = [...new Set(Data.map((e) => e.Offshore === "False" && "False"))];

    console.log(onsiteDetails);

    return (
      
        <div className="off-shore-button-container">
          <button
            className="off-shore-option"
            onClick={showDevDetailsByOnSite}
            value="False"
          >
            On Site
          </button>
        </div>
     
    );
  };

  const DropdownByOffshore = () => {
    const offshoreDetails = [...new Set(Data.map((e) => e.Offshore && "True"))];

    console.log(offshoreDetails);

    return (
      
        <div className="off-shore-button-container">
          <button
            className="off-shore-option"
            onClick={showDevDetailsByOffshore}
            value="True"
          >
            Off Shore
          </button>
        </div>
     
    );
  };

  const DropdownByRole = () => {
    const roleDetails = [...new Set(Data.map((e) => e.Role))];

    //console.log(roleDetails)

    return (
      <Dropdown>
        <div className="roles-clear-container">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Role
          </Dropdown.Toggle>
        </div>

        <Dropdown.Menu>
          {roleDetails.map((e) => {
            return (
              <div>
                <input
                  type="button"
                  className="role-option"
                  name="Role"
                  value={e}
                  onClick={showDevDetailsByRole}
                />
              </div>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <>
      <div className="dev-display-container">
        <div className="dropdown-container">
          {DropdownByRole()}
          {DropdownByOffshore()}
          {DropdownByOnSite()}
          <button className="clear-btn" onClick={() => setDevList(Data)}>
            Clear
          </button>
        </div>

        <div>{renderSearchSection()}</div>
      </div>

      {renderDevList()}
    </>
  );
};

export default DeveloperData;
