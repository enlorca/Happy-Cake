import React from "react";

const Contacto = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center gap-1 p-4 w-50">
        <h3>Cuentanos, ¿en que te podemos ayudar?</h3>

        <div className="form-group d-flex flex-column justify-content-center align-items-center gap-2 w-100">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
          />
          <label>Descripción</label>
          <input type="text" className="form-control" />
          <button
            type="submit"
            className="btn btn-primary w-10 bg-danger border-danger"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
