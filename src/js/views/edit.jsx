import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  const { actions } = useContext(Context);

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/")
  }

  const params = useParams();
  console.log(params);

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.editContact({
      full_name: e.target.name.value,
      email: e.target.email.value,
      agenda_slug: "Miguel",
      address: e.target.location.value,
      phone: e.target.phone.value,
    }, params.id);
    navigateToHome();
  };

  return (
    <form 
      className="container mt-4 p-4 bg-dark text-light rounded"
      onSubmit={handleSubmit}
    >
      <h1>Edit Contact</h1>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Change Name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
        />
      </div>
      
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Change Location
        </label>
        <input
          name="location"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Change Phone
        </label>
        <input
          name="phone"
          type="tel"
          className="form-control"
        />
      </div>

      
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Change Email
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
        />
      </div>

      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditContact;