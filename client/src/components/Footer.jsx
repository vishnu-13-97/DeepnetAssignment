function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        {/* Flex container for the sections */}
        <div className="row text-center text-md-left">
          
          {/* Connect with Us section */}
          <div className="col-12 col-md-4 mb-4">
            <div
              className="footer-section p-3"
              style={{
                border: "1px solid white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "170px",
              }}
            >
              <h4>Connect with Us</h4>
              <h5>+91 9567843340</h5>
              <h5>info@deepnetsoft.com</h5>
            </div>
          </div>

          {/* DeepNetSoft Logo Section */}
          <div className="col-12 col-md-4 mb-4">
            <div
              className="footer-section p-3"
              style={{
                border: "1px solid white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "170px",
              }}
            >
              <h2>
                <span style={{ color: "#0796EF" }}>DEEP</span>{" "}
                <span style={{ color: "white" }}>NET</span>{" "}
                <span style={{ color: "gray" }}>SOFT</span>
              </h2>
            </div>
          </div>

          {/* Find Us Section */}
          <div className="col-12 col-md-4 mb-4">
            <div
              className="footer-section p-3"
              style={{
                border: "1px solid white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "170px",
              }}
            >
              <h5 style={{ color: "#0796EF" }}>Find us</h5>
              <h5 style={{ color: "#857878" }}>
                First floor, Geo Infopark, Infopark EXPY, Kakkanad
              </h5>
            </div>
          </div>

        </div>

        {/* Bottom Container with Terms & Privacy Links */}
        <div className="d-flex justify-content-between align-items-center mt-4 flex-column flex-md-row">
          <p className="mb-0">© 2024 DeepNetSoft. All rights reserved.</p>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <p className="mb-0">Terms & Conditions</p>
            <p className="mb-0">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
