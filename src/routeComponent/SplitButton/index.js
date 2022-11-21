import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

function SplitBasic() {
  return (
    <Dropdown as={ButtonGroup} autoClose="outside">
      <Button href="/projects" variant="success">
        Projects
      </Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
      <div className="menu-container">
        <Dropdown.Menu>
          <Dropdown.Item href="/project_details/Transmart">
            Transmart
          </Dropdown.Item>
          <Dropdown.Item href="/project_details/IAVR Enterprise">
            IAVR Enterprise
          </Dropdown.Item>
          <Dropdown.Item href="/project_details/JJT">JJT</Dropdown.Item>
          <Dropdown.Item href="/project_details/PAC">PAC</Dropdown.Item>
          <Dropdown.Item href="/project_details/Genie">Genie</Dropdown.Item>
        </Dropdown.Menu>
      </div>
    </Dropdown>
  );
}

export default SplitBasic;
