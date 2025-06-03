import { Col, Form, Row, Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import type { RootState } from "../../store";
import { useState, useEffect } from "react";
import type { Assignment } from "./types";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existing = useSelector((state: RootState) =>
    state.assignments.find((a) => a._id === aid)
  );

  const [assignment, setAssignment] = useState<Assignment>(() => existing || {
    _id: uuidv4(),
    course: cid ?? "",
    title: "",
    description: "",
    points: 100,
    group: "Assignments",
    displayGrade: "Percentage",
    submissionType: "Online",
    assignTo: "Everyone",
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  useEffect(() => {
    if (existing) setAssignment(existing);
  }, [existing]);

  const handleChange = (field: keyof Assignment) => (e: any) => {
    setAssignment({ ...assignment, [field]: e.target.value });
  };

  const handleSave = () => {
    if (existing) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            id="wd-name"
            placeholder="Title"
            value={assignment.title}
            onChange={handleChange("title")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-description">Description</Form.Label>
          <Form.Control
            as="textarea"
            id="wd-description"
            className="w-50"
            rows={3}
            value={assignment.description}
            onChange={handleChange("description")}
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Points</Form.Label>
          <Col sm={4}>
            <Form.Control
              type="number"
              value={assignment.points}
              onChange={handleChange("points")}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Assignment Group</Form.Label>
          <Col sm={4}>
            <Form.Select value={assignment.group} onChange={handleChange("group")}>
              <option value="Assignments">Assignments</option>
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
              <option value="Project">Project</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Display Grade</Form.Label>
          <Col sm={4}>
            <Form.Select value={assignment.displayGrade} onChange={handleChange("displayGrade")}>
              <option value="Percentage">Percentage</option>
              <option value="Points Earned">Points Earned</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Submission Type</Form.Label>
          <Col sm={10}>
            <Form.Select value={assignment.submissionType} onChange={handleChange("submissionType")}>
              <option value="Online">Online</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Assign To</Form.Label>
          <Col sm={4}>
            <Form.Control value={assignment.assignTo} onChange={handleChange("assignTo")} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Due Date</Form.Label>
          <Col sm={4}>
            <Form.Control type="date" value={assignment.dueDate} onChange={handleChange("dueDate")} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Available From</Form.Label>
          <Col sm={4}>
            <Form.Control type="date" value={assignment.availableFrom} onChange={handleChange("availableFrom")} />
          </Col>
          <Form.Label column sm={2}>Available Until</Form.Label>
          <Col sm={4}>
            <Form.Control type="date" value={assignment.availableUntil} onChange={handleChange("availableUntil")} />
          </Col>
        </Form.Group>

        <div className="d-flex gap-2 float-end">
          <Button type="button" variant="danger" onClick={handleSave}>Save</Button>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary">Cancel</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
