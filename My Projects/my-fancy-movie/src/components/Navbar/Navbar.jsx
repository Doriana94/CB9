import styles from "./navbar.module.scss";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const menuList = ["Home", "About", "Contact"];

  return (
    <nav className={styles.navbarContainer}>
      <Logo />
      <h1>Fancy-Movie</h1>
      <ul className={styles.menuList}>
        {menuList.map((item, index) => (
          <li key={index}><a href={item}>{item}</a></li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
