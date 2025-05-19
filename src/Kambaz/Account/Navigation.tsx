import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="p-3">
      <Link to="/Kambaz/Account/Signin" className="text-danger d-block mb-2">
        Signin
      </Link>
      <Link to="/Kambaz/Account/Signup" className="text-danger d-block mb-2">
        Signup
      </Link>
      <Link to="/Kambaz/Account/Profile" className="text-danger d-block">
        Profile
      </Link>
    </div>
  );
}
