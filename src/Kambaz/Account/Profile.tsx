import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-4">
      <h3 className="mb-3">Profile</h3>

      <Form>
        <Form.Control
          type="text"
          defaultValue="alice"
          placeholder="username"
          className="mb-2"
        />
        <Form.Control
          type="password"
          defaultValue="123"
          placeholder="password"
          className="mb-3"
        />

        <Form.Control
          type="text"
          defaultValue="Alice"
          placeholder="First Name"
          className="mb-2"
        />
        <Form.Control
          type="text"
          defaultValue="Wonderland"
          placeholder="Last Name"
          className="mb-2"
        />

        <Form.Control
          type="date"
          defaultValue="2000-01-01"
          className="mb-2"
        />

        <Form.Control
          type="email"
          defaultValue="alice@wonderland"
          placeholder="Email"
          className="mb-2"
        />

        <Form.Select defaultValue="FACULTY" className="mb-3">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>

        <Link to="/Kambaz/Account/Signin">
          <Button variant="danger" className="w-100">
            Signout
          </Button>
        </Link>
      </Form>
    </div>
  );
}
