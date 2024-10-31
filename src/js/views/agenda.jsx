import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"

const Agenda = () => {
  const navigate = useNavigate()
  const navigateToHome = () => {
   navigate("/")
  }

  const { actions } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.getNewContact({
      full_name: e.target.name.value,
      email: e.target.email.value,
      agenda_slug: "Miguel",
      address: e.target.location.value,
      phone: e.target.phone.value,
    });
    navigateToHome();
  };

  return (
    <div>
    <form
      className="container mt-4 p-4 bg-dark text-light rounded"
      onSubmit={handleSubmit}
    >
      <h1>New Contact</h1>
      <div className="mb-3">
        <label className="form-label">
          Name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="of the next..."
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Location
        </label>
        <input
          name="location"
          type="text"
          className="form-control"
          placeholder="Where the victim lives?"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Phone
        </label>
        <input
          name="phone"
          type="tel"
          className="form-control"
          placeholder="Phone number of our dear friend?"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          placeholder="We have your email"
        />
      </div>

      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
    </div>
  );
};

export default Agenda;