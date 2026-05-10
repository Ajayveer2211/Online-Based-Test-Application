import React from 'react';

function Contact() {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-4 mb-4">
          <img
            src="public/images/testyou.jpg"
            alt="Testyou Logo"
            className="img-fluid mb-3"
          />
          <p>
            A site for educators, TestYou.in allows them to create and administer tests in a fast and reliable way.
            If you're one, this new platform lets you create tests using an interface that is intuitive and fully online.
          </p>
          <p>
            You'll be able to create tests and have them edited from anywhere. Any internet-enabled computer will do.
          </p>
        </div>

        {/* Middle Column */}
        <div className="col-md-4 mb-4">
          <h4 style={{ fontWeight: 'bold', color: '#333' }}>Contact Information</h4>
          <hr />
          <p>Email:</p>
          <p><a href="mailto:support@testyou.in">support@testyou.in</a></p>
          <hr />

          <p>Social Links:</p>
        <div className="d-flex gap-3">
  <a href="" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-facebook fs-4 text-primary"></i>
  </a>
  <a href="" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-twitter fs-4 text-info"></i>
  </a>
  <a href="" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-linkedin fs-4 text-primary"></i>
  </a>
  <a href="" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-google fs-4 text-danger"></i>
  </a>
</div>

        </div>

        {/* Right Column */}
        <div className="col-md-4">
          <h4 style={{
            color: '#aaa',           // Lighter color
            fontWeight: '500',       // Less bold
            fontSize: '22px',        // Slightly larger
            marginBottom: '15px'
          }}>
            Send us a message
          </h4>
          <form>
            <div className="form-group mb-2">
              <input type="text" className="form-control form-control-sm" placeholder="Enter Your Name *" required />
            </div>
            <div className="form-group mb-2">
              <input type="email" className="form-control form-control-sm" placeholder="E-mail *" required />
            </div>
            <div className="form-group mb-2">
              <input type="text" className="form-control form-control-sm" placeholder="City" />
            </div>
            <div className="form-group mb-2">
              <input type="text" className="form-control form-control-sm" placeholder="Contact Number" />
            </div>
            <div className="form-group mb-2">
              <textarea className="form-control" rows="3" placeholder="Your Message *" required></textarea>
            </div>
            <div className="form-group mb-2 d-flex align-items-center gap-2">
              <img src="https://via.placeholder.com/100x40?text=1shq2" alt="captcha" />
              <a href="#">Show another code</a>
            </div>
            <div className="form-group mb-2">
              <input type="text" className="form-control form-control-sm" placeholder="Verification Code *" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
