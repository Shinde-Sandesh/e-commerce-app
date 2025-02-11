import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AddressForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddressForm({ show, close, onAddressAdded }) {

  const [input, setInput] = useState("");
  const [addressForm, setAddressForm] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    mobile: ""
  });

  function handleInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setAddressForm((addressForm) => ({ ...addressForm, [name]: value }));
    setInput(event.target.value);
    console.log("Updated addressForm:", addressForm);
  }

  function saveFormDetails(event) {
    const form = event.currentTarget;
    event.preventDefault();
    // Pass the current addressForm to the parent component
    onAddressAdded(addressForm);

  }

  useEffect(() => {

  }, [])
  return (
    <>
      <Modal show={show} onHide={close} centered>
        <Modal.Dialog className="custom-modal-dialog">
          <Modal.Header closeButton>
            <Modal.Title>Add New Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => saveFormDetails(e)}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter House No.</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter House No. Road, Colony"
                  required
                  onChange={handleInput}
                />
                <Form.Label>Enter City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  required
                  onChange={handleInput}
                />
                <Form.Label>Enter State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  required
                  onChange={handleInput}
                />
                <Form.Label>Enter Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Country"
                  required
                  onChange={handleInput}
                />
                <Form.Label>Enter Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Postal Code"
                  required
                  onChange={handleInput}
                />
                <Form.Label>Enter Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mobile Number"
                  required
                  onChange={handleInput}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={(e) => saveFormDetails(e)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}

export default AddressForm;
