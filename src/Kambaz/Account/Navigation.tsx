import { Link} from "react-router-dom";
// import { useSelector } from "react-redux";

export default function AccountNavigation() {
  // const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  // const { pathname } = useLocation();
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
