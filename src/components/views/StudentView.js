import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteStudentThunk } from "../../store/thunks";

/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <div class="card" >
        <div class="title">
          <h1 onClick={() => history.push(`/student/${student.id}`)} style={{ cursor: "pointer" }}>{student.firstname + " " + student.lastname}</h1>
          <h2>{student?.email}</h2>
          <h2>{student?.gpa}</h2>
          {student.campus?.id ? <h2 onClick={() => history.push(`/campus/${student.campus?.id}`)} style={{ cursor: "pointer" }}>{student.campus?.name}</h2> :
            <div>
              This Student is not Enrolled at any Campus
            </div>
          }
        </div>
        <div class="content">
          <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
            <button className="button bg-red" onClick={() => {
              dispatch(deleteStudentThunk(student.id));
              history.push('/students')
            }}>Delete</button></div>
        </div>
      </div>

    </div>
  );

};

export default StudentView;