import  react  from "react";
import Carrito from "../../CartWidget.js";

function Bootstrap() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">git 
        <div className="container-fluid">
          <a className="navbar-brand" href="#">tienda de plantas</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">plantas de interior</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">plantas de exterior</a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
    
              <button className="btn btn-outline-success" type="submit"> carrito </button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Bootstrap