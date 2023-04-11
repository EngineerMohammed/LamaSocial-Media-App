import Rightbar from "../../Components/Rightbar/Rightbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/TobBar/Topbar";
import Feed from "../../Components/Feed/Feed";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/person/7.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Cokague</h4>
              <span className="profileInfoDesc">Hello My Friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
