import React, { Component } from 'react';
import img from './img/S2.webp'

export default class Part3 extends Component {
  render() {
    return (
      <div className="text-dark" style={{ backgroundColor: "#EBE4D6" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div>
                <img src={img} alt="img" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="col-md-7 p-5">
              <div className="w-75 m-auto mt-5 p-5 m-3">
                <div>
                  <h2>SPRING/SUMMER 2024</h2>
                  <p>Discover the essence of tailoring with an ease inspired by the breathtaking beauty of Hawaii. Traditional tailoring blends with contemporary design for a collection that evokes the essence of an effortless wardrobe and easy dressing. </p>
                  <span><a className="btn btn-outline-light p-2" style={{ backgroundColor: "#dacdb4", width: "30%" }}>Shop Menswear</a></span>
                  <span><a className="btn btn-outline-light ms-3 p-2" style={{ backgroundColor: "#dacdb4" }}>Shop Womenswear</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
