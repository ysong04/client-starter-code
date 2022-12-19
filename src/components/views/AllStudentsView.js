/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link, useHistory } from "react-router-dom";

const AllStudentsView = (props) => {
  const history = useHistory()
  const { students, deleteStudent } = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <p>There are no students.</p>
        <Link style={{ textDecoration: 'none' }} to={`newstudent`}>
          <button className="bg-green button">Add New Student</button>
        </Link>
      </div>
    );
  }

  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students</h1>

      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div class="card" key={student.id} style={{margin:"50px auto"}}>
            {student.image && <img src={student.image} style={{ width: '200px', height: '200px' }} alt="" />}
            <div class="title">
              <h1 onClick={()=>history.push(`/student/${student.id}`)} style={{cursor:"pointer"}}>{name}</h1>
            </div>
            <div class="content">
              <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <button className="button bg-blue" onClick={() => {
                  localStorage.setItem("CurrentStudent", JSON.stringify(student))
                  history.push(`/editStudent?id=${student.id}`)
                }} to={`/editStudent?id=${student.id}`}>Edit</button>
                <button className="button bg-red" onClick={() => deleteStudent(student.id)}>Delete</button></div>
            </div>
          </div>
        );
      }
      )}
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', alignItems: 'center' }}><Link style={{ textDecoration: 'none' }} to={`/newstudent`}>
        <button className="bg-green button">Add New Student</button>
      </Link></div>

      <br /><br />
    </div>
  );
};


export default AllStudentsView;