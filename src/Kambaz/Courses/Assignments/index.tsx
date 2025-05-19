import { FaPlus, FaCheckCircle } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { PiNotebookLight } from "react-icons/pi";
import { AiOutlineSearch, AiOutlineMore } from "react-icons/ai";
import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";

export default function Assignments() {
  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup style={{ maxWidth: "300px" }}>
          <InputGroup.Text>
            <AiOutlineSearch />
          </InputGroup.Text>
          <FormControl placeholder="Search for Assignments" />
        </InputGroup>

        <div>
          <Button variant="outline-secondary" className="me-2 text-nowrap">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" className="text-nowrap">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center bg-light p-3 fw-bold mb-1 border rounded">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-4" />
          ASSIGNMENTS
        </div>
        <div>40% of Total <AiOutlineMore className="ms-2" /></div>
      </div>

      <ListGroup>
        {[1, 2, 3].map((id) => (
          <ListGroup.Item
            key={id}
            className="d-flex align-items-start p-3 mb-2 bg-white shadow-sm"
            style={{ borderLeft: "4px solid #198754", border: "none", borderRadius: "0" }}
          >
            <PiNotebookLight className="me-3 fs-4 mt-1 text-success" />
            <div className="flex-grow-1">
              <a
                href={`#/Kambaz/Courses/1234/Assignments/12${id}`} // you can adjust this URL pattern
                className="fw-bold fs-5 mb-1 d-block text-dark text-decoration-none"
              >
                A{id}
              </a>
              <div className="text-muted small">
                Multiple Modules &nbsp; | &nbsp; Not available until May {5 + id} at 12:00am &nbsp; | &nbsp;
                <strong>Due</strong> May {12 + id * 2} at 11:59pm &nbsp; | &nbsp; 100pts
              </div>
            </div>
            <FaCheckCircle className="text-success fs-5 mt-1 ms-3" />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
