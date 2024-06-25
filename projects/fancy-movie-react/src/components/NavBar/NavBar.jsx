import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const menuList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contacts" },
  ];

  return (
    <nav className={styles.navbarContainer}>
      <Logo />
      <ul className={styles.menuList}>
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
