import React, { Component } from 'react'
import logo from './img/logo@2x.webp'
export default class Navbar extends Component {
  render() {
    return (
      <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="logo" style={{width: "100px"}} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Get Started</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menswear</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Womenswear</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">accessories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="#">Sale</a>
                        </li>
                    </ul>
                    <form className="d-flex ms-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="search" aria-label="search"/>
                        <button className="btn btn-outline-success" type="submit">search</button>
                    </form>
                </div>
                <i className="fa-solid fa-user ms-3"></i>
                <i className="fa-solid fa-shop ms-3"></i>
            </div>
        </nav>
        </>
    )
  }
}
