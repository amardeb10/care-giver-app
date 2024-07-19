import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "@mui/material";
import { Modal, Form } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import activityService from "../service/activity.service";
import dayjs from "dayjs";
export default function Activity() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await activityService.getAllActivities();
    setData(response.data);
  }

  const [formData, setFormData] = useState({
    activityName: "",
    frequency: "Daily",
    activityTime: "",
    patient: {
      id: 1,
    },
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const [show, setShow] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    activityService
      .saveActivity(formData)
      .then((res) => {
        setShow(1);
        console.log("Activity Added Successfully", res);
        setFormData({
          activityName: "",
          frequency: "Daily",
          activityTime: "",
          patient: {
            id: 1,
          },
        });
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };

  const deleteActivity = async (activityId) => {
    console.log("delete " + activityId);
    activityService
      .deleteActivity(activityId)
      .then((res) => {
        setShow(2);
        console.log("Activity deleted Successfully", res);
        setFormData({
          activityName: "",
          frequency: "Daily",
          activityTime: "",
          patient: {
            id: 1,
          },
        });
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };
  return (
    <div className="App">
      <Alert show={show == 1} variant="success" onClose={() => setShow(1)}>
        Activity has been created sucessfully!
      </Alert>
      <Alert show={show == 2} variant="success" onClose={() => setShow(2)}>
        Activity has been deleted sucessfully!
      </Alert>
      <div className="row">
        <div className="col-lg-12">
          <div className="col-lg-6 offset-md-3">
            <Button
              variant="contained"
              onClick={handleShow}
              className="float-sm-right mt-2 mb-2"
            >
              Create Activity
            </Button>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Activity Name</th>
                  <th>Frequency</th>
                  <th>Activity Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{val.activityName}</td>
                    <td>{val.frequency}</td>
                    <td>{val.activityTime}</td>
                    <td
                      onClick={() => deleteActivity(val.id)}
                      className="text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose} style={{ zIndex: 10000 }}>
        <Form onSubmit={handleSubmit} id="activity-form">
          <Modal.Header>
            <Modal.Title>Add Activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="activityName">
              <Form.Label>Activity Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter activity name"
                name="activityName"
                value={formData.activityName}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="frequncy">
              <Form.Label>Select Frequency</Form.Label>
              <Form.Control
                as="select"
                name="frequency"
                value={formData.frequency}
                onChange={(e) => handleChange(e)}
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="activityTime">
              <Form.Label>Activity Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter activity time"
                name="activityTime"
                value={formData.activityTime}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
