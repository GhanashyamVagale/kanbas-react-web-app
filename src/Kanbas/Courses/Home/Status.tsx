<<<<<<< HEAD
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdHome, IoIosNotifications } from "react-icons/io";
import { RiBarChart2Fill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";
import { useSelector } from "react-redux";

export default function CourseStatus() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      {currentUser.role === "FACULTY" && (
        <>
          <div className="d-flex">
            <div className="w-50 pe-1">
              <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
              </button>
            </div>
            <div className="w-50">
              <button className="btn btn-lg btn-success w-100">
                <FaCheckCircle className="me-2 fs-5" /> Publish
              </button>
            </div>
          </div>

          <br />
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <BiImport className="me-2 fs-5" />
            Import Existing Content
          </button>
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <LiaFileImportSolid className="me-2 fs-5" />
            Import from Commons
          </button>
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <IoMdHome className="me-2 fs-5" />
            Choose Home Page
          </button>
          <br />
        </>
      )}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <RiBarChart2Fill className="me-2 fs-5" />
        View Course Screen
      </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <TfiAnnouncement className="me-2 fs-5" />
        View Announcement
      </button>
      <br />
      {currentUser.role === "FACULTY" && (
        <>
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <RiBarChart2Fill className="me-2 fs-5" />
            New Analytics
          </button>
          <br />
        </>
      )}

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoIosNotifications className="me-2 fs-5" />
        View Course Notifications
      </button>
    </div>
  );
}
=======
import { FaCheckCircle } from "react-icons/fa";
import { RiProhibited2Line } from "react-icons/ri";
import { CiImport } from "react-icons/ci";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdHome } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsBarChartFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";

export default function CourseStatus() {
    return (
      <div id="wd-course-status" style={{ width: "300px" }}>
        <h2>Course Status</h2>

        <button id="wd-unpublish" className="btn btn-lg btn-secondary flex-grow-1 mx-1 me-1 text-start">
        <RiProhibited2Line className="me-2" />
        Unpublish
        </button>

        <button id="wd-publish" className="btn btn-lg btn-success flex-grow-1 mx-1 me-1 text-start">
        <FaCheckCircle className="me-2"/>
        Publish
        </button>
        <br /><br />

        <div className = "d-flex flex-column gap-1">
        <button id="wd-import-existing-content" className="btn btn-lg btn-secondary mx-1 me-1 text-start">
        <CiImport className="me-2"/>
        Import Existing Content
        </button>

        <button id="wd-import-from-commons" className="btn btn-lg btn-secondary mx-1 me-1 text-start">
        <LiaFileImportSolid className="me-2"/>
        Import from Commons
        </button>

        <button id="wd-choose-home-page" className="btn btn-lg btn-secondary mx-1 me-1 text-start">
        <MdHome className="me-2"/>
        Choose Home Page 
        </button>

        <button id="wd-view-course-screen" className="btn btn-lg btn-secondary mx-1 me-1 text-start">
        <RiBarChart2Fill className="me-2" />
        View Course Screen
        </button>

        <button id="wd-new-announcement" className="btn btn-lg btn-secondary mx-1 me-1 text-start">
        <TfiAnnouncement className="me-2"/>
        New Announcement
        </button>

        <button id="wd-new-analytics" className="btn btn-lg btn-secondary mx-1 me-1 text-start">
        <BsBarChartFill className="me-2"/>
        New Analytics
        </button>

        <button id="wd-view-course-notifications" className="btn btn-lg btn-secondary mx-1 me-1 text-start">
        <FaBell className="me-2"/>
        View Course Notifications
        </button>
      </div>
      </div>
  );}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
