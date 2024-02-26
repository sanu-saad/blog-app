import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const DashSideBar = () => {
  const location = useLocation();
  // console.log(location); isme path name , search etc milenge
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search); //serch ki value (?tab=profile)
    const tabFromUrl = urlParams.get("tab"); // tab ki value mil jayegi
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="bg-gray-800  h-full w-full">
      <ul className="flex flex-col text-center  gap-2 ">
        <li className={tab === "profile" ? "active" : ""}>
          <Link>PROFILE</Link>
        </li>
        <li>
          <Link className="">Sign Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashSideBar;
