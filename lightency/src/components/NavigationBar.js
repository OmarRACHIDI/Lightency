function NavigationBar() {
  return (
    <nav>
      <a href="#" className="navToggle">
        <img src="/imgs/hamburger.png" />
      </a>

      <ul>
        <li>
          <a href="https://lightency.io/#/">Home</a>
        </li>
        <li>
          <a href="https://lightency.io/#/about-us/">About Us</a>
        </li>
        <li>
          <a href="https://lightency.io/#/our-solution/">Our Solution</a>
        </li>
        <li>
          <a href="https://lightency.io/#/get-in-touch/">Get In Touch</a>
        </li>
      </ul>
    </nav>
  );
}
export default NavigationBar;
