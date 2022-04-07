function Footer() {
  return (
    <footer>
      <div className="footerIcons">
        <ul>
          <li>
            <a href="https://www.facebook.com/Lightency">
              <img
                className="icon"
                src="imgs/facebook.png"
                alt="facebook icon"
              />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/company/electrify-network/">
              <img
                className="icon"
                src="imgs/linkedin.png"
                alt="linkedin icon"
              />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/Lightencyio">
              <img className="icon" src="imgs/twitter.png" alt="twitter icon" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footerText">
        <ul>
          <li>email:contact@lightency.io</li>
          <li>|</li>
          <li>Adress: 128 Rue de la Boetie 75008 Paris, France</li>
          <li>|</li>
          <li>Lightency.io © 2021 All rights reserved</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
