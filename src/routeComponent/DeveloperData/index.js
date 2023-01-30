import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
//import Data from "../Json/data.json";
import EmployeeCard from "../EmployeeCard";
import axios from "axios";
import "./index.css";

const DeveloperData = () => {
  const [search, setSearch] = useState("");
  const [devEmpList, setDevEmpList] = useState([]);
  const [Data1, setData] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);

  async function fetchData() {
    await axios.get(`http://localhost:8000/api/resources`).then((res) => {
      const reso = res.data;
      //console.log(reso.length);
      setData(...reso);
    });
  }

  //console.log(Data.Resources)
  console.log(Data1);
  useEffect(() => {
    fetchData();
    console.log(devEmpList);
    if (Data1.Resources !== undefined) {
      setDevEmpList(Data1.Resources.Empolyee_Details);
    }
  }, []);

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

  console.log(devEmpList);

  const renderDevList = () => (
    <ul className="dev-cards-list">
      {devEmpList
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
    if (Data1.Resources !== undefined) {
      Data1.Resources.Empolyee_Details.map(
        (each) =>
          each.Details.Advance.Offshore === event.target.value && [
            myArray.push(each),
          ]
      );

      myArray.forEach((element) => {
        setDevEmpList(myArray);
      });
    }
  };

  const showDevDetailsByOffshore = (event) => {
    const myArray = [];
    if (Data1.Resources !== undefined) {
      Data1.Resources.Empolyee_Details.map(
        (each) =>
          each.Details.Advance.Offshore === event.target.value && [
            myArray.push(each),
          ]
      );
      myArray.forEach((element) => {
        setDevEmpList(myArray);
      });
    }
  };

  const showDevDetailsByRole = (event) => {
    const myArray = [];
    if (Data1.Resources !== undefined) {
      Data1.Resources.Empolyee_Details.map(
        (each) => each.Role === event.target.value && [myArray.push(each)]
      );
      myArray.forEach((element) => {
        setDevEmpList(myArray);
      });
    }
  };

  const DropdownByOnSite = () => {
    if (Data1.Resources !== undefined) {
      const onsiteDetails = [
        ...new Set(
          Data1.Resources.Empolyee_Details.map(
            (e) => e.Details.Advance.Offshore === "False" && "False"
          )
        ),
      ];

      //console.log(onsiteDetails);

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
    }
  };

  const DropdownByOffshore = () => {
    if (Data1.Resources !== undefined) {
      const offshoreDetails = [
        ...new Set(
          Data1.Resources.Empolyee_Details.map(
            (e) => e.Details.Advance.Offshore && "True"
          )
        ),
      ];

      //console.log(offshoreDetails);

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
    }
  };

  const DropdownByRole = () => {
    if (Data1.Resources !== undefined) {
      const roleDetails = [
        ...new Set(Data1.Resources.Empolyee_Details.map((e) => e.Role)),
      ];

      //console.log(roleDetails)

      return (
        <Dropdown>
          <div className="roles-clear-container">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Role
            </Dropdown.Toggle>
          </div>

          <Dropdown.Menu className="drop-menu-container">
            {roleDetails.map((e) => {
              return (
                <input
                  type="button"
                  className="role-option"
                  name="Role"
                  value={e}
                  onClick={showDevDetailsByRole}
                />
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      );
    }
  };

  console.log(Data1.Resources);

  return (
    <>
      {Data1.Resources !== undefined && (
        <>
          <div className="dev-display-container">
            <div className="dropdown-container">
              {DropdownByRole()}
              {DropdownByOffshore()}
              {DropdownByOnSite()}
              <button
                className="clear-btn"
                onClick={() => setDevEmpList(Data1.Resources.Empolyee_Details)}
              >
                Clear
              </button>
            </div>

            <div>{renderSearchSection()}</div>
          </div>
          {renderDevList()}
          {!isDataLoaded &&
            setTimeout(() => {
              setDevEmpList(Data1.Resources.Empolyee_Details);
              setDataLoaded(true);
            }, 1)}
        </>
      )}
    </>
  );
};

export default DeveloperData;
