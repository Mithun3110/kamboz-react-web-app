import { Button, Col, FormControl, InputGroup, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical, BsPlus } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { PiNotebookLight } from "react-icons/pi";

export default function Assignments() {
  return (
    <div className="container-fluid p-4">
      {/* Top Controls: Search + Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup style={{ maxWidth: "300px" }}>
          <InputGroup.Text><AiOutlineSearch /></InputGroup.Text>
          <FormControl placeholder="Search for Assignments" />
        </InputGroup>
        <div>
          <Button variant="outline-secondary" className="me-2">+ Group</Button>
          <Button variant="danger">+ Assignment</Button>
        </div>
      </div>

      {/* Assignment Group Header */}
      <ListGroup className="rounded-0">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border border-secondary-subtle">
          <div className="wd-title d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary text-white">
            <div>
              <BsGripVertical className="me-2 fs-5" />
              ASSIGNMENTS 40% of Total
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3 text-dark bg-light px-2 py-1 rounded small">40% of total</span>
              <BsPlus className="fs-4 me-3" />
              <BsThreeDotsVertical className="fs-5" />
            </div>
          </div>

          {/* Assignment Items using Row + Col */}
          <ListGroup className="wd-lessons rounded-0">
            <Row className="g-0">
              {/* A1 */}
              <Col xs={12}>
                <ListGroup.Item
                    className="d-flex align-items-start p-3 bg-white"
                    style={{ borderLeft: "4px solid #198754", borderTop: "none", borderRight: "none", borderBottom: "1px solid #dee2e6" }}
                  >
                  <BsGripVertical className="me-2 fs-5" />
                  <PiNotebookLight className="me-3 fs-4 mt-1 text-success" />
                  <div className="flex-grow-1">
                    <a
                      href="#/Kambaz/Courses/1234/Assignments/123"
                      className="fw-bold text-decoration-none text-primary"
                    >
                      A1 - ENV + HTML
                    </a>
                    <div className="text-danger small">Multiple Modules</div>
                    <div className="text-muted small">
                      <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59p | 100 pts
                    </div>
                  </div>
                  <FaCheckCircle className="text-success fs-5 mt-1 me-2" />
                  <BsThreeDotsVertical className="mt-1 fs-5" />
                </ListGroup.Item>
              </Col>

              {/* A2 */}
              <Col xs={12}>
                <ListGroup.Item
                  className="d-flex align-items-start p-3 bg-white"
                  style={{ borderLeft: "4px solid #198754", borderTop: "none", borderRight: "none", borderBottom: "1px solid #dee2e6" }}
                >
                  <BsGripVertical className="me-2 fs-5" />
                  <PiNotebookLight className="me-3 fs-4 mt-1 text-success" />
                  <div className="flex-grow-1">
                    <a
                      href="#/Kambaz/Courses/1234/Assignments/124"
                      className="fw-bold text-decoration-none text-primary"
                    >
                      A2 - CSS + BOOTSTRAP
                    </a>
                    <div className="text-danger small">Multiple Modules</div>
                    <div className="text-muted small">
                      <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59p | 100 pts
                    </div>
                  </div>
                  <FaCheckCircle className="text-success fs-5 mt-1 me-2" />
                  <BsThreeDotsVertical className="mt-1 fs-5" />
                </ListGroup.Item>
              </Col>

              {/* A3 */}
              <Col xs={12}>
                <ListGroup.Item
                  className="d-flex align-items-start p-3 bg-white"
                  style={{ borderLeft: "4px solid #198754", borderTop: "none", borderRight: "none", borderBottom: "1px solid #dee2e6" }}
                >
                  <BsGripVertical className="me-2 fs-5" />
                  <PiNotebookLight className="me-3 fs-4 mt-1 text-success" />
                  <div className="flex-grow-1">
                    <a
                      href="#/Kambaz/Courses/1234/Assignments/125"
                      className="fw-bold text-decoration-none text-primary"
                    >
                      A3 - JAVASCRIPT + REACT
                    </a>
                    <div className="text-danger small">Multiple Modules</div>
                    <div className="text-muted small">
                      <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59p | 100 pts
                    </div>
                  </div>
                  <FaCheckCircle className="text-success fs-5 mt-1 me-2" />
                  <BsThreeDotsVertical className="mt-1 fs-5" />
                </ListGroup.Item>
              </Col>
            </Row>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
