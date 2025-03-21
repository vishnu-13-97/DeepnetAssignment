function Footer() {
  return (
    <footer className="bg-dark text-white py-3 ">
<div className="d-flex justify-content-evenly" style={{ height: "200px" }}>
  <div
    style={{
      width: "350px",
      height: "170px",
      border: "1px solid white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <h4>Connect with Us</h4>
    <h5>+91 9567843340</h5>
    <h5>info@deepnetsoft.com</h5>
  </div>

  <div
    style={{
      width: "350px",
      height: "170px",
      border: "1px solid white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <h2>
      <span style={{ color: "#0796EF" }}>DEEP</span>{" "}
      <span style={{ color: "white" }}>NET</span>{" "}
      <span style={{ color: "gray" }}>SOFT</span>
    </h2>
  </div>

  <div
    style={{
      width: "350px",
      height: "170px",
      border: "1px solid white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <h5 style={{ color: "#0796EF" }}>Find us</h5>
    <h5 style={{ color: "#857878" }}>
      First floor, Geo Infopark, Infopark EXPY, Kakkanad
    </h5>
  </div>
</div>



      <div className="container d-flex justify-content-between align-items-center">
        {/* Left-aligned text */}
        <p className="mb-0">© 2024 DeepNetSoft. All rights reserved.</p>
        
        {/* Right-aligned text in a flex container */}
        <div className="d-flex gap-3">
          <p className="mb-0">Terms & Conditions</p>
          <p className="mb-0">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
