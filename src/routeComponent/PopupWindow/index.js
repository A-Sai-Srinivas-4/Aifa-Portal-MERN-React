import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./index.css";

const PopupWindow = (props) => {
  //console.log(props.carddetails);
  const data = props.carddetails;
  //console.log(data);
  const projectData = data.Details.Advance.Projects;
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
              <img src={data.Image_url} alt="" className="pop-image" />
              <div className="pop-card">
                <h6 className="pop-heading">
                  NAME :-<span className="pop-span">{data.Name}</span>
                </h6>
                <h1 className="pop-heading">
                  ROLE :-<span className="pop-span">{data.Role}</span>
                </h1>
                <h1 className="pop-heading">
                  EXPERIENCE :-{" "}
                  <span className="pop-span">
                    {data.Details.Advance.Experience}
                  </span>
                </h1>
              </div>
            </div>
            <div className="projects-list">
              {projectData.map((eachItems) => {
                return (
                  <div className="pop-project_container">
                    <h1 className="pop-heading">
                      PROJECTS :
                      <span className="pop-span">{`${eachItems.Project}`}</span>
                    </h1>
                    <h1 className="pop-heading">
                      Role : <span className="pop-span">{`${data.Role}`}</span>
                    </h1>
                    <h1 className="pop-heading">
                      Tech_Stack :
                      <span className="pop-span">{`${data.Details.Advance.TechStack}`}</span>
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
