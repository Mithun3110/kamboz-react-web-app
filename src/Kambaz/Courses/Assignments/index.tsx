import { ListGroup } from "react-bootstrap";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControl from "./AssignmentsControl";
import { FaAngleDown, FaPlus, FaTrash } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { deleteAssignment } from "./reducer";
import type { Assignment } from "./types";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignment = useSelector((state: RootState) =>
    state.assignments.filter((a: Assignment) => a.course === cid)
  );

  const handleDelete = (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmed) {
      dispatch(deleteAssignment(id));
    }
  };

  return (
    <div id="wd-assignments">
      <AssignmentControl />
      <br />

      <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <span>
            <BsGripVertical className="fs-4" />
            <FaAngleDown className="me-2" />
            ASSIGNMENTS 40% of Total
          </span>
          <div className="d-flex align-items-center gap-2">
            <span className="fs-6 border border-light px-2 py-1 rounded">
              40% of total
            </span>
            <FaPlus
              className="fs-5"
              onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}
            />
            <IoEllipsisVertical className="fs-4" />
          </div>
        </div>

        <ListGroup className="wd-lessons rounded-0">
          {assignment.map((a: Assignment) => (
            <ListGroup.Item key={a._id} className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-start me-3">
                  <BsGripVertical className="me-2 fs-4" />
                  <MdAssignment className="me-2 fs-4 text-success" />
                </div>
                <div className="flex-grow-1">
                  <Link
                    to={`/Kambaz/Courses/${cid}/Assignments/${a._id}`}
                    className="wd-assignment-link text-decoration-none"
                  >
                    {a.title}
                  </Link>
                  <br />
                  <small>
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> {a.availableUntil} at 12:00 am |
                    Due {a.dueDate} at 11:59 pm | {a.points} pts
                  </small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <AssignmentControlButtons />
                  <FaTrash
                    className="text-danger cursor-pointer"
                    onClick={() => handleDelete(a._id)}
                  />
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </ListGroup.Item>
    </div>
  );
}
