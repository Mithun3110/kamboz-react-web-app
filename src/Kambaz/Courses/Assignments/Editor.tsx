import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div className="container mt-4 mb-5" id="wd-assignment-editor">
      <h5 className="mb-3 text-muted">202440, 2 Summer 1 2024 Section</h5>

      <Form>
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control type="text" placeholder="Assignment Name" defaultValue="A1" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="assignmentDescription">
          <Form.Control
            as="textarea"
            rows={8}
            defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="points">
          <Form.Label className="fw-bold">Points</Form.Label>
          <Form.Control type="number" defaultValue="100" />
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="assignmentGroup">
              <Form.Label className="fw-bold">Assignment Group</Form.Label>
              <Form.Select defaultValue="ASSIGNMENTS">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>PROJECTS</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="displayGrade">
              <Form.Label className="fw-bold">Display Grade as</Form.Label>
              <Form.Select defaultValue="Percentage">
                <option>Percentage</option>
                <option>Grade</option>
                <option>Points</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="submissionType">
          <Form.Label className="fw-bold">Submission Type</Form.Label>
          <Form.Select defaultValue="Online">
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </Form.Select>

          <div className="mt-3 ms-2">
            <div className="mb-1 fw-bold">Online Entry Options</div>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Uploads" />
          </div>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Assign</Form.Label>
          <Form.Control type="text" defaultValue="Everyone" className="mb-3" />

          <Row>
            <Col md={4}>
              <FloatingLabel label="Due">
                <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
              </FloatingLabel>
            </Col>
            <Col md={4}>
              <FloatingLabel label="Available from">
                <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
              </FloatingLabel>
            </Col>
            <Col md={4}>
              <FloatingLabel label="Until">
                <Form.Control type="datetime-local" />
              </FloatingLabel>
            </Col>
          </Row>
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
