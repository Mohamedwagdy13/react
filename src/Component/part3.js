import React, { Component } from 'react';
import img from './img/S2.webp'

export default class Part3 extends Component {
  render() {
    return (
      <>
        <div className="text-light" style={{ backgroundColor: "#000" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-5" style={{ marginTop: "20%" }}>
                <div className="w-75 m-auto text-center text-light">
                  <a href="#" className="text-light">
                    <h2>Visit Your local showroom</h2>
                  </a>
                  <p>With 83 locations, we’re here to help you get it right. Get professionally measured,
                      choose the perfect fabric and build your custom look with help from an expert Style
                      Guide.</p>
                  <span><a href="#" className="text-success">Find your showroom</a></span>
                </div>
              </div>
              <div className="col-md-7">
                <div>
                  <img src={img} alt="img" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around text-center pt-2 text-light" style={{ backgroundColor: "#000" }}>
          <a href="#">
            <i className="fa-solid fa-shirt ms-1 text-light"></i>
            <strong className="fs-5 text-light">THE PERFECT FIT</strong>
            <p className="text-light">Completely made to measure - just for you.</p>
          </a>
          <a href="#">
            <i className="fa-brands fa-intercom ms-1 text-light"></i>
            <strong className="fs-4 text-light">CUSTOMAIZBLE</strong>
            <p className="text-light">Choose fabrics, linings, and everything in between.</p>
          </a>
          <a href="#">
            <i className="fa-solid fa-bacon ms-1 text-light"></i> <strong className="fs-4 text-light">GET MEASURED UP</strong>
            <p className="text-light">Follow this link to get started.</p>
          </a>
        </div>
      </>
    )
  }
}
