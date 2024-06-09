import React from 'react';
import '../styles/footer.css';
import { Facebook, YouTube, Twitter } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Revlon. All rights reserved.</p>
        <div className="footer-links">
          <a href="/support">Support</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className="footer-social">
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <YouTube />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <Twitter />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
