import React from 'react';
import { Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-container">
            <Cloud className="logo-icon" strokeWidth={1.5} />
            <span>Terassikodu.ee</span>
          </div>
          <p className="footer-tagline">
            Kvaliteetsed terrassilahendused Tartus ja Tartumaal aastast 2020.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigatsioon</h4>
          <Link to="/" className="footer-link">Avaleht</Link>
          <Link to="/teenused" className="footer-link">Teenused</Link>
          <span className="footer-link">Tehtud tööd</span>
          <Link to="/epood" className="footer-link">E-pood</Link>
        </div>

        <div className="footer-contact">
          <h4>Kontakt</h4>
          <p>Tel: +372 555 1234</p>
          <p>E-mail: info@terassikodu.ee</p>
          <p>Asukoht: Tartu, Eesti</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Terassikodu.ee. Kõik õigused kaitstud.</p>
      </div>
    </footer>
  );
};

export default Footer;
