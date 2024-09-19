export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3>Assignment Name </h3></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as </label>
            </td>
            <td>
            <select id="wd-display-grade-as">
            <option value="Grade">Grade</option>
            <option value="GPA">GPA</option>
            <option selected value="Percentage">
                Percentage
            </option>
            </select>
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type </label>
            </td>
            <td>
            <select id="wd-submission-type">
            <option value="Grade">Offline</option>
            <option selected value="Online">
                Online
            </option>
            </select>
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
            <label>Online Entry Options</label>
            </td>
            <td>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
        <label htmlFor="wd-text-entry">Text Entry</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
        <label htmlFor="wd-website-url">Website URL</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
        <label htmlFor="wd-media-recordings">Media Recordings</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
        <label htmlFor="wd-student-annotation">Student Annotations</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
        <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
        </tr>
        <br />
        <tr>
        <td align="right" valign="top">
            Assign 
          </td>
          <td>
          <label htmlFor="wd-assign-to">Assign to</label>
          <br />
            <input id="wd-assign-to" value={"Everyone"} />
          </td>
        </tr>
        <br />
        <tr>
            <td>
            
            </td>
            <td>
                <label htmlFor="wd-due-date">Due</label>
                <br />
                <input type="date"
                id="wd-due-date"
                value="2024-05-13"/><br/>
            </td>
        </tr>
        <br />
        <tr>
            <td>
                
            </td>
            <td>
            <label htmlFor="wd-available-from">Available from</label>
                <br />
                <input type="date"
                id="wd-available-from"
                value="2024-05-06"/><br/>
            </td>
            <td>
            <label htmlFor="wd-available-until">Until</label>
                <br />
                <input type="date"
                id="wd-available-until"
                value="2024-05-20"/><br/>
            </td>
        </tr>
      </table>
      <hr />
      <button id="wd-all-good">
          Cancel
        </button>
        <span> </span>
        <button id="wd-all-good">
          Save
        </button>
    </div>
);}

  