import NavigationBar from "./NavigationBar";

function Header() {
  return (
    <header>
      <div className="headerSection">
        <a href="https://lightency.io/#/">
          <img
            className="headerLogo"
            src="imgs/lightencyLogo.png"
            alt="Lightency logo"
          />
        </a>
        <a href="https://lightency.io/#/">
          <h1 className="logoTitle">Lightency</h1>
        </a>
      </div>
      <NavigationBar />
    </header>
  );
}
export default Header;
