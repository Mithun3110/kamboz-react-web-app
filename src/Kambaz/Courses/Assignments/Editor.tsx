export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
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
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select name="group" id="wd-group">
                    <option value="Assignments">Assignments</option>
                    <option value="Labs">Labs</option>
                    <option value="Evaluation">Evaluation</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade</label>
            </td>
            <td>
                <select name="display-grade" id="wd-display-grade-as">
                    <option value="percentage">Percentage</option>
                    <option value="marks">Marks</option>
                    <option value="average">Average</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select name="submission-type" id="wd-submission-type">
                    <option value="online">Online</option>
                    <option value="in-person">In Person</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
          <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Online Entry Options</label>
            </td>
            <td>
                <select name="wd-submission-type" id="wd-submission-type">
                <option value="wd-entry-type">Text Entry</option>
                <option value="wd-website-url">Website URL</option>
                <option value="wd-media-recordings">Media Recordings</option>
                <option value="wd-student-annotation">Student Annotations</option>
                <option value="wd-file-upload">File Uploads</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign anyone to</label>
            </td>
            <td>
              <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr>
          <br />
            <tr>
            <td>
                <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
                <input type="date" id="wd-due-date" name="wd-due-date"></input>
              </td>
            </tr>
            <br />

            <tr>
            <td>
                <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
                <input type="date" id="wd-available-from" name="wd-available-from"></input>
            </td>   
            </tr>

            <br />
            <tr>
              <td>
                  <label htmlFor="wd-available-until">Available until</label>
              </td>
              <td>
                  <input type="date" id="wd-available-until" name="wd-available-until"></input>
              </td> 
            </tr>
            <br />
          <hr />
          <tr>
            <button>
              Cancel
            </button>
            <button>
              Save
            </button>
          </tr>


        </table>
      </div>
  );}
  