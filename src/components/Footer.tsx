// src/components/Footer.tsx

export const Footer = () => {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} Alethia AI — Verifying Digital Truth</p>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
};
