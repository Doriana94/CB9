import Navbar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>

  );
};

export default DefaultLayout;
