import { useSelector } from "react-redux";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="px-56">
      <form>
        <h1 className="title">User Profile</h1>
        <label htmlFor="">Name :</label>
        <input type="text" className="input" value={currentUser.name} />
        <label htmlFor="">Email :</label>
        <input type="email" className="input" value={currentUser.email} />
        <label htmlFor="">Password :</label>
        <input type="password" className="input" placeholder="*******" />
        <button className="btn my-2 w-full">Update</button>
      </form>
      <div className="flex justify-between">
        <span>Delete Account</span>
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default DashProfile;
