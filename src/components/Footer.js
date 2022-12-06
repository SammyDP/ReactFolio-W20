function Footer() {
  return (
    <footer>
      <h2 className="center-link">My Links </h2>
      <ul className="spacing2">
        <li className="align space">
          <a href="https://github.com/SammyDP" target="_blank" rel="noreferrer">
            {" "}
            <i className="fa-brands fa-square-github fa-2xl github"></i>
          </a>
        </li>
        <li className="align space">
          <a
            href="https://www.linkedin.com/in/sammy-pennell-001a65193"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-2xl linkedin"></i>
          </a>
        </li>
        <li className="align space">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-twitter fa-2xl twitter"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
