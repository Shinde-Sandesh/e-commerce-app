import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AddressForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddressForm({ show, close }) {

  const [input, setInput] = useState("");
  const [validated, setValidated] = useState(false);
  const [addressForm, setAddressForm] = useState({
    id: Number(Math.random()).toFixed(3),
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    mobile: ""
  });

  function handleInput(event){
    event.preventDefault()
    const { name, value } = event.target;
    setAddressForm((addressForm) => ({ ...addressForm, [name]: value }));
    setInput(event.target.value)
    console.log("first", input)
  }

  function saveFormDetails(event){
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log("form details saved")
  }

  useEffect(() => {

  }, [])
  return (
    <>
      <Modal show={show} onHide = {close} centered>
      <Modal.Dialog className="custom-modal-dialog">
        <Modal.Header closeButton>
          <Modal.Title>Add New Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={validated} onSubmit={(e) => saveFormDetails(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                value = {addressForm.name}
                required
                onChange = {handleInput}
              />
              <Form.Label>Enter House No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter House No. Road, Colony"
                required
                value = {addressForm.street}
                onChange = {handleInput}
              />
              <Form.Label>Enter City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                required
                value = {addressForm.city}
                onChange = {handleInput}
              />
              <Form.Label>Enter State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                required
                value = {addressForm.state}
                onChange = {handleInput}
              />
              <Form.Label>Enter Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                required
                value = {addressForm.country}
                onChange = {handleInput}
              />
              <Form.Label>Enter Postal Code</Form.Label>
              <Form.Control
                type="number"
                placeholder="Postal Code"
                required
                value = {addressForm.pincode}
                onChange = {handleInput}
              />
              <Form.Label>Enter Mobile Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Mobile Number"
                required
                value = {addressForm.mobile}
                onChange = {handleInput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" type = "submit">
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}

export default AddressForm;
