import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-4">
      <h3 className="mb-3">Signin</h3>
      <Form>
        <Form.Control
          id="wd-username"
          placeholder="username"
          className="mb-2"
        />
        <Form.Control
          id="wd-password"
          type="password"
          placeholder="password"
          className="mb-3"
        />
        <Link
          id="wd-signin-btn"
          to="/Kambaz/Account/Profile"
          className="btn btn-primary w-100 mb-2"
        >
          Signin
        </Link>
      </Form>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        Signup
      </Link>
    </div>
  );
}
