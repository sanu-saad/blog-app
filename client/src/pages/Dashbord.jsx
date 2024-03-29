import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";
const Dashbord = () => {
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
    <div className="flex bg-gray-700 min-h-screen">
      <div className="w-1/4">
        <DashSideBar />
      </div>
      {/* profile */}
      <div className="">{tab === "profile" && <DashProfile />}</div>
    </div>
  );
};

export default Dashbord;
