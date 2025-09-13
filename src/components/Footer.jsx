import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <small>
        <a href="https://emmalani3.github.io/redditspeedrun/">
          I Draw Reddit
        </a>{" "}
        © <time dateTime={String(year)}>{year}</time> by{" "}
        <a href="https://github.com/Emmalani3/redditspeedrun/tree/main">
          Emma Lani Bufalini
        </a>{" "}
        is licensed under{" "}
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY-NC-SA 4.0
        </a>
        <img
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
          alt="CC"
          style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
        />
        <img
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
          alt="BY"
          style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
        />
        <img
          src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
          alt="NC"
          style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
        />
        <img
          src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
          alt="SA"
          style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
        />
      </small>
    </footer>
  );
}

export default Footer;
