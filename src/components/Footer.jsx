import "./Footer.css"
function Footer() {
  return (
    <footer className="footer bg-success text-light py-3 mt-5">
      <div className="container text-center">
        <p className="mb-0">
          © {new Date().getFullYear()} React Website. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
