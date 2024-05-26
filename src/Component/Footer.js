import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-around">
                <div className='mt-2'>
                  <strong>SHOPPING</strong><br />
                  <a href="#">news</a><br />
                  <a href="#">suit</a><br />
                  <a href="#">shirt</a><br />
                  <a href="#">pants</a><br />
                </div>
                <div>
                  <strong>GET STARTED </strong><br />
                  <a href="#">news</a><br />
                  <a href="#">suit</a><br />
                  <a href="#">shirt</a><br />
                  <a href="#">pants</a><br />
                </div>
                <div>
                  <strong>ABOUT INDOCHINO</strong><br />
                  <a href="#">news</a><br />
                  <a href="#">suit</a><br />
                  <a href="#">shirt</a><br />
                  <a href="#">pants</a><br />
                </div>
                <div>
                  <strong>Help</strong><br />
                  <a href="#">news</a><br />
                  <a href="#">suit</a><br />
                  <a href="#">shirt</a><br />
                  <a href="#">pants</a><br />
                </div>
              </div>
              <div className="col-md-5 ms-5">
                <div>
                  <h2>ENTER YOUR EMAIL TO STAY IN TOUCH!</h2>
                  <input className="form-control" type="text" placeholder="Sign up" aria-label="Sign up" />
                  <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-user-plus"></i></button><br />
                  <input type="checkbox" /><label>I agree to receive emails, including offers & product news, from
                            Indochino (you can unsubscribe at any time). Read Our Privacy Policy
                        </label>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}
