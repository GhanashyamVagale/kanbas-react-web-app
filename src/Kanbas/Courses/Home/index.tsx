import Modules from "../Modules";
import CourseStatus from "./CourseStatus";

const Home = () => {
  return (
    <table id="wd-home">
      <tr>
        <td valign="top"><Modules /></td>
        <td valign="top"><CourseStatus /></td>
      </tr>
    </table>
  );
};

export default Home;