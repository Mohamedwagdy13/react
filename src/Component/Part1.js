import React, { Component } from 'react';
import img0 from './img/S1.webp'

export default class Part2 extends Component {
  render() {
    return (
      <>
        <div className="text-center p-3" style={{ backgroundColor: "#5C0005" }}>
          <div className="m-75 m-auto text-light">
            <h4> Save 25% Off Sitewide! <span className="skinny-bold"> Use Code: WEEKEND</span></h4>
          </div>
        </div>
        <div className="d-flex justify-content-around text-center pt-2" style={{ backgroundColor: "#F0EFEB" }}>
          <a href="#">
            <i className="fa-solid fa-shirt ms-1"></i>
            <strong className="fs-5">THE PERFECT FIT</strong>
            <p>Completely made to measure - just for you.</p>
          </a>
          <a href="#">
            <i className="fa-brands fa-intercom ms-1"></i>
            <strong className="fs-4">CUSTOMAIZBLE</strong>
            <p>Choose fabrics, linings, and everything in between.</p>
          </a>
          <a href="#">
            <i className="fa-solid fa-bacon ms-1"></i> <strong className="fs-4">GET MEASURED UP</strong>
            <p>Follow this link to get started.</p>
          </a>
        </div>
        <div className="text-light" style={{ backgroundColor: "#0b3e55" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div>
                  <img src={img0} alt="img" style={{ width: "100%" }} />
                </div>
              </div>
              <div className="col-md-7 p-5">
                <div className="w-75 m-auto mt-5 p-5 m-3">
                  <p>MEMORIAL DAY SALE</p>
                  <h2>Save 25% Off Sitewide</h2><br />
                  <span><strong>Use Code: WEEKEND</strong></span><br />
                  <span>Act now (and we mean right now!) to Save 25% Off Sitewide!</span><br /><br />
                  <span><a className="btn btn-outline-light p-2" style={{ backgroundColor: "#5C0005", width: "30%" }}>Shop now</a></span>
                  <span><a className="btn btn-outline-light ms-5 p-2" style={{ backgroundColor: "#5C0005" }}>BOOK APPONTMENT</a></span><br />
                  <br /><small>*Online and In-Store, excluding SS24 New Arrivals, Studio Collection and Clearance.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
