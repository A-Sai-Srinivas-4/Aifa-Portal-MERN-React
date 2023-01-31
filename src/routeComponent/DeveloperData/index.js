import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
//import Data from "../Json/data.json";
import EmployeeCard from "../EmployeeCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchedData } from "../../redux/dataSlice";
//import axios from "axios";
import "./index.css";

const DeveloperData = () => {
  const [search, setSearch] = useState("");
  const [devEmpList, setDevEmpList] = useState([]);
  //const [Data1, setData] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const Data = useSelector(state => state.Data)
  const dispatch = useDispatch()

  // async function fetchData() {
  //   await axios.get(`http://localhost:8000/api/resources`).then((res) => {
  //     const reso = res.data;
  //     //console.log(reso);
  //     setData(reso);
  //   });
  // }

  //console.log(Data.Resources)
  //console.log(Data1);

  useEffect(() => {
    //fetchData();
    dispatch(fetchedData())
    if (Data.Data.Resources !== undefined) {
      //console.log(Data.Data.Resources.Employee_Details);
      setDevEmpList(Data.Data.Resources.Employee_Details);
    }
  }, [dispatch]);

  console.log(Data);
  // useEffect(() => {
  //   fetchData();
  //   //console.log(devEmpList);
  //   if (Data1.Resources !== undefined) {
  //     //console.log(Data1.Resources.Employee_Details);
  //     setDevEmpList(Data1.Resources.Employee_Details);
  //   }
    
  // }, []);

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

  //console.log(devEmpList);

  const renderDevList = () => (
    <ul className="dev-cards-list">
      {Data.Data.Resources !== undefined &&
        devEmpList
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
    if (Data.Data.Resources !== undefined) {
      Data.Data.Resources.Employee_Details.map(
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
    if (Data.Data.Resources !== undefined) {
      Data.Data.Resources.Employee_Details.map(
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
    if (Data.Data.Resources !== undefined) {
      Data.Data.Resources.Employee_Details.map(
        (each) => each.Role === event.target.value && [myArray.push(each)]
      );
      myArray.forEach((element) => {
        setDevEmpList(myArray);
      });
    }
  };

  const DropdownByOnSite = () => {
    if (Data.Data.Resources !== undefined) {
      const onsiteDetails = [
        ...new Set(
          Data.Data.Resources.Employee_Details.map(
            (e) => e.Details.Advance.Offshore === "False" && "False"
          )
        ),
      ];

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
    }
  };

  const DropdownByOffshore = () => {
    if (Data.Data.Resources !== undefined) {
      const offshoreDetails = [
        ...new Set(
          Data.Data.Resources.Employee_Details.map(
            (e) => e.Details.Advance.Offshore && "True"
          )
        ),
      ];

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
    }
  };

  const DropdownByRole = () => {
    if (Data.Data.Resources !== undefined) {
      const roleDetails = [
        ...new Set(Data.Data.Resources.Employee_Details.map((e) => e.Role)),
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

  //console.log(Data.Data.Resources);

  return (
    <>
      {Data.Data.Resources !== undefined && (
        <>
          <div className="dev-display-container">
            <div className="dropdown-container">
              {DropdownByRole()}
              {DropdownByOffshore()}
              {DropdownByOnSite()}
              <button
                className="clear-btn"
                onClick={() => setDevEmpList(Data.Data.Resources.Employee_Details)}
              >
                Clear
              </button>
            </div>

            <div>{renderSearchSection()}</div>
          </div>
          {renderDevList()}
          {!isDataLoaded &&
            setTimeout(() => {
              setDevEmpList(Data.Data.Resources.Employee_Details);
              setDataLoaded(true);
            }, 1)}
        </>
      )}
    </>
  );
};

export default DeveloperData;



