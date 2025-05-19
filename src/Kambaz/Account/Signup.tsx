import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-4">
      <h3 className="mb-3">Signup</h3>
      <Form>
        <Form.Control placeholder="username" className="mb-2" />
        <Form.Control type="password" placeholder="password" className="mb-2" />
        <Form.Control
          type="password"
          placeholder="verify password"
          className="mb-3"
        />
        <Link
          to="/Kambaz/Account/Profile"
          className="btn btn-primary w-100 mb-2"
        >
          Signup
        </Link>
      </Form>
      <Link to="/Kambaz/Account/Signin">Signin</Link>
    </div>
  );
}
