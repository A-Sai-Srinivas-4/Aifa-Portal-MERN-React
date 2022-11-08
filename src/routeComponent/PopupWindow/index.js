import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./index.css";

const PopupWindow = (props) => {
  //console.log(props.cardDetails);
  const data = props.carddetails;
  console.log(data);
  const name = data.Name;
  console.log(name);
  const projectData = data.Projects;
  console.log(projectData);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      autoFocus="true"
      className="transition"
      backdrop="false"
      contentClassName="body-color"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Developer Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-color">
        <>
          <div className="details_container">
            <div className="top_details_container">
              <img src={data.image_url} alt="" className="pop-image" />
              <div className="pop-card">
                <h6 className="pop-heading">
                  NAME :-<span className="pop-span">{data.Name}</span>
                </h6>
                <h1 className="pop-heading">
                  ROLE :-<span className="pop-span">{data.Role}</span>
                </h1>
                <h1 className="pop-heading">
                  EXPERIENCE :-{" "}
                  <span className="pop-span">{data.Experience}</span>
                </h1>
              </div>
            </div>
            <div className="projects-list">
              {projectData.map((eachItems) => {
                return (
                  <div className="pop-project_container">
                    <h1 className="pop-heading">
                      PROJECTS :
                      <span className="pop-span">{`${eachItems.Name}`}</span>
                    </h1>
                    <h1 className="pop-heading">
                      Role :{" "}
                      <span className="pop-span">{`${eachItems.Role}`}</span>
                    </h1>
                    <h1 className="pop-heading">
                      Tech_Stack :
                      <span className="pop-span">{`${eachItems.Tech_Stack}`}</span>
                    </h1>
                    <h1 className="pop-heading">
                      Allocation :
                      <span className="pop-span">{`${eachItems.Allocation}`}</span>
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </Modal.Body>
      <Modal.Footer className="close-btn">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupWindow;
