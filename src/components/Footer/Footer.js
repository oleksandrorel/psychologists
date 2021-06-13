import React from 'react';
import './Footer.scss';

export const Footer = () => (
  <footer className="Footer">
    <img
      src="img/logo.svg"
      alt="footer-logo"
      className="Footer-Logo"
    />
    <div>
      <p className="Footer-Text">© All rights reserved</p>
    </div>
    <div className="Footer-Anchor">
      <span
        className="Footer-AnchorText"
      >
        Back to top
      </span>
      <button
        type="button"
        className="Footer-UpIcon"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src="img/arrow-up.svg" alt="move-up" />
      </button>
    </div>
  </footer>
);
