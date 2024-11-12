import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAgenda();
  }, []); // Llama a getAgenda cuando el componente se monte

  return (
    <div className="text-center mt-5 text-light">
      <div className="container bg-dark">
        <h1 className="fw-bold">Contacts</h1>
      </div>
      {Array.isArray(store.agenda) ? (
        store.agenda.map((item) => {
          return (
            <div className="card container bg-dark fw-bold my-3" key={item.id}>
              <div className="d-flex justify-content-between my-2">
                <div className="d-flex mx-2">
                  <img
                    src={item.imageURL || "defaultImagePath.jpg"} // Ajusta la URL a tus imágenes
                    className="image me-3"
                    alt="profile"
                  />
                  <div className="dataContainer">
                    <div className="d-flex justify-content-start">
                      <h5 className="card-title mx-2">{item.full_name}</h5>
                    </div>
                    <div className="d-flex justify-content-start">
                      <p>
                        <i className="fa-solid fa-location-dot mx-2"></i>
                        {item.address}
                      </p>
                    </div>
                    <div className="d-flex justify-content-start">
                      <p>
                        <i className="fa-solid fa-phone mx-2"></i>
                        {item.phone}
                      </p>
                    </div>
                    <div className="d-flex justify-content-start">
                      <p>
                        <i className="fa-solid fa-envelope mx-2"></i>
                        {item.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="justify-content-end">
                  <Link to={`/edit/${item.id}`} className="btn btn-primary my-2">
                    <i className="fa-solid fa-pencil"></i>
                  </Link>
                  <button
                    className="btn btn-danger my-2 mx-2"
                    onClick={() => actions.removeContact(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No hay contactos disponibles</p>
      )}
    </div>
  );
};

export default Home;
