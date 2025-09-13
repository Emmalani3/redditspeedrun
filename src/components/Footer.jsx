import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <small>
        <a href="https://emmalani3.github.io/redditspeedrun/">I Draw Reddit</a> © <time dateTime={String(year)}>{year}</time> by 
        <a href="https://github.com/Emmalani3/redditspeedrun/tree/main">Emma Lani Bufalini</a>
        is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
      <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;" />
      <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;" />
      <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;" />
      <img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;" />
      </small>
    </footer>
  );
}

export default Footer;
