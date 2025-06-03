import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

export default function AssignmentsControls() {
  const { cid } = useParams();
  const navigate = useNavigate();

  return (
    <Row className="align-items-center">
      <Col xs="auto">
        <InputGroup style={{ maxWidth: "300px" }}>
          <InputGroup.Text>
            <AiOutlineSearch />
          </InputGroup.Text>
          <FormControl placeholder="Search for Assignments" />
        </InputGroup>
      </Col>

      <Col className="d-flex justify-content-end gap-2">
        <Button variant="outline-secondary">+ Group</Button>
        <Button 
          variant="danger"
          onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}
        >
          + Assignment
        </Button>
      </Col>
    </Row>
  );
}