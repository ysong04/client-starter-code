/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus } = props;

  // Render a single Campus view with list of its students
  return (
    <div>
      <div class="card" >
        <div class="title">
          <h1>{campus.name}</h1>
          <h2>{campus.address}</h2>
          <h2>{campus.description}</h2>
        </div>
        <div class="content">
        <h3>Students</h3>
          {campus.students.map(student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <div key={student.id}>
                <Link to={`/student/${student.id}`}>
                  <h2>{name}</h2>
                </Link>
              </div>
            );
          })}
          <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Link to={`/students`}>
              <button className="bg-green button">Add new/existing students</button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CampusView;