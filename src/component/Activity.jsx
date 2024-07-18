import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from "@mui/material";
import { Modal, Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'  
import activityService from '../service/activity.service';
import dayjs from 'dayjs';
export default function Activity() {

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await activityService.getAllActivities()
    setData(response.data);
  }

  const [formData, setFormData] = useState({
    activityName: '',
    frequency: 'Daily',
    activityTime: '',
    patient: {
      id: 1
    }
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value })
  }

  const [show, setShow] = useState(false);

  const handleSubmit =  async (event) => {
    event.preventDefault();
    activityService.saveActivity(formData)
        .then((res) => {
            setShow(true);
            console.log("Activity Added Successfully", res);
            setFormData({
              activityName: "",
              frequency: "Daily",
              activityTime: "",
              patient: {
                id: 1
              }
            });
            fetchData();
        }).catch((error) => {
            console.log(error);
        });
        handleClose();
  };

  return (
    <div className="App">
      <Alert show={show} variant="success" onClose={() => setShow(false)}>Activity has been created sucessfully!</Alert>  
      <div className="row">
        <div className="col-lg-12">
            <div className="col-lg-6 offset-md-3">
              <Button variant="contained" onClick={handleShow} className='float-sm-right mt-2 mb-2'>Create Activity</Button>
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
                      <td>{key+1}</td>
                      <td>{val.activityName}</td>
                      <td>{val.frequency}</td>
                      <td>{val.activityTime}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose} style={{"zIndex": 10000}}>
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
                value={formData.frequency} onChange={(e) => handleChange(e)}>
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
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
