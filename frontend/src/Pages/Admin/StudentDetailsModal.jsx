import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const StudentDetailsModal = ({ student, show, onHide }) => {
  if (!student) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Student Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src={student.avatar || `https://ui-avatars.com/api/?name=${student.name}`}
                alt={student.name}
                className="img-fluid rounded-circle border mb-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h4>{student.name}</h4>
            </div>
            <div className="col-md-8">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <td>{student.email}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{student.phone || "Not specified"}</td>
                  </tr>
                  <tr>
                    <th>Date of Birth</th>
                    <td>{student.dob ? new Date(student.dob).toLocaleDateString() : "Not specified"}</td>
                  </tr>
                  <tr>
                    <th>University</th>
                    <td>{student.studentDetails?.university || "Not specified"}</td>
                  </tr>
                  <tr>
                    <th>Course</th>
                    <td>{student.studentDetails?.course || "Not specified"}</td>
                  </tr>
                  <tr>
                    <th>Semester</th>
                    <td>{student.studentDetails?.semester || "Not specified"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default StudentDetailsModal;