import styles from "./navbar.module.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const menuList = [
    {name: "Home", path: "/"},
    {name: 'About', path: '/about'},
    {name: 'Contact', path: '/contacts'},
  ]

  return (
    <nav className={styles.navbarContainer}>
      <Logo />
      <ul className={styles.menuList}>
        {menuList.map((item, index) => (
          <li key={index}>
            {/* <a href={item.path}>{item.name}</a> */}
            <Link to={item.path}>{item.name}</Link>

            </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
