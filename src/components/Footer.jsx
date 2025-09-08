import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <small>
        © <time dateTime={String(year)}>{year}</time> · Built by: Emma Lani Bufalini
      </small>
    </footer>
  );
}

export default Footer;
