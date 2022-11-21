import React, { useState } from "react";
import PopupWindow from "../PopupWindow";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./index.css";

const EmployeeCard = (props) => {
  const [addModalShow, setModalShow] = useState(false);

  const randomcolors = () => {
    return "#" + Math.floor(Math.random() * 26743815).toString(16);
    //      Adding css  style 26723815 style={{backgroundColor : randomcolors()}}
  };

  let addModalClose = () => setModalShow(false);

  const { cardDetails } = props;
  const { ID, Name, Image_url, Role, Details } = cardDetails;
  const { Advance } = Details;
  const { Projects } = Advance;
  // const { id, Name, Role, image_url, Projects } = cardDetails;
  //console.log(Projects)

  return (
    <>
      <ButtonToolbar>
        <Button variant="black" onClick={() => setModalShow(true)}>
          <li
            className="dev-card-item"
            style={{ borderTopColor: randomcolors() }}
          >
            <div className="card_container">
              <div className="card_image">
                <img src={Image_url} alt="imagess" className="dev-image" />

                <h4 className="headings">{Name}</h4>
              </div>
              <hr />
              <div className="card_bottom">
                <h6 className="role_heading">
                  ROLE :- <span>{Role}</span>
                </h6>

                <div className="card_project">
                  <h6 className="project_heading">Project-Name:-</h6>

                  <div className="span_project">
                    {Projects.length > 0 ? (
                      Projects.map((each) => <span>{each.Project}</span>)
                    ) : (
                      <h6> -------- </h6>
                    )}
                  </div>
                </div>

                {Projects.length > 2 ? (
                  <h3 className="anchor">Show-More >>></h3>
                ) : (
                  " "
                )}
              </div>
            </div>
          </li>
        </Button>

        <PopupWindow
          key={ID}
          show={addModalShow}
          onHide={addModalClose}
          carddetails={cardDetails}
        />
      </ButtonToolbar>
    </>
  );
};

export default EmployeeCard;
