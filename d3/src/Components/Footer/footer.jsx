
import React from 'react';


const footer = () => {
   
    
      return (
        <footer className="mt-3 text-center text-lg-start bg-primary text-light">
        <div>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-github" />
          </a>
        </div>
        <section className>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary" />Company name
                </h6>
                <p>
                  keyShop, 'cause it's just a shop, where we sell keys...
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">We</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Just</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Sell</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Keys</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3 text-secondary" /> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="#">keyShop.com</a>
        </div>
      </footer>
          
      );
    
  }



  export default footer;