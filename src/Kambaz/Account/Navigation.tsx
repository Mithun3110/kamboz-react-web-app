import { Link, useLocation} from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const { pathname } = useLocation();
 const active = (path: string) => (pathname.includes(path) ? "active" : "");
  return (
    <div id="wd-account-navigation" className="p-3">
      <Link to="/Kambaz/Account/Signin" className="text-danger d-block mb-2">
        Signin
      </Link>
      <Link to="/Kambaz/Account/Signup" className="text-danger d-block mb-2">
        Signup
      </Link>
      {/* <Link to="/Kambaz/Account/Profile" className="text-danger d-block">
        Profile
      </Link> */}
      {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
    </div>
  );
}
