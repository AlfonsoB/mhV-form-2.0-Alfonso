import * as React from 'react';
import { useState } from 'react';
import './contactPage.scss';
import { Button } from 'react-bootstrap';

export default function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="message"
            value={state.message}
            placeholder="Get in touch!"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label></label>
          <Button className="submit-btn" variant="primary" type="submit">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
}
