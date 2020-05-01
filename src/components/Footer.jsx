import React from "react";

let d = new Date();
d = d.getFullYear();
function Footer() {
  return (
    <footer>
      <p> CopyRight Ⓒ {d} </p>
    </footer>
  );
}

export default Footer;
