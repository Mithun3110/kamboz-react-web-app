import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser, FaLaptopCode } from "react-icons/fa6";
import { HiOutlineInbox } from "react-icons/hi";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

type NavTabProps = {
  to: string;
  label: string;
  icon: ReactNode;
  exact?: boolean;
  iconColor?: string;
  forceWhite?: boolean;
};

function NavTab({
  to,
  label,
  icon,
  exact = false,
  iconColor = "text-danger",
  forceWhite = false,
}: NavTabProps) {
  const location = useLocation();
  const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);
  const isAccount = label === "Account";

  const itemClass = isActive
    ? isAccount
      ? "bg-white text-black"
      : "bg-white text-danger"
    : "bg-black text-white";

  const resolvedIconColor =
    forceWhite || isAccount
      ? isActive
        ? "text-black"
        : "text-white"
      : isActive
        ? "text-danger"
        : iconColor;

  return (
    <ListGroup.Item
      as={Link}
      to={to}
      className={`text-center border-0 ${itemClass}`}
      style={{ fontSize: "0.85rem", paddingTop: "14px", paddingBottom: "10px" }}
    >
      <div className={`fs-1 ${resolvedIconColor}`}>{icon}</div>
      <div style={{ marginTop: "-4px" }}>{label}</div>
    </ListGroup.Item>
  );
}

export default function KambazNavigation() {
  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: "110px" }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroup.Item
        id="wd-neu-link"
        action
        href="https://www.northeastern.edu/"
        target="_blank"
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </ListGroup.Item>

      <NavTab to="/Kambaz/Account" label="Account" icon={<FaRegCircleUser />} forceWhite />
      <NavTab to="/Kambaz/Dashboard" label="Dashboard" icon={<AiOutlineDashboard />} />
      <NavTab to="/Kambaz/Courses" label="Courses" icon={<LiaBookSolid />} />
      <NavTab to="/Kambaz/Calendar" label="Calendar" icon={<IoCalendarOutline />} />
      <NavTab to="/Kambaz/Inbox" label="Inbox" icon={<HiOutlineInbox />} />
      <NavTab to="/Labs" label="Labs" icon={<FaLaptopCode />} />
    </ListGroup>
  );
}
