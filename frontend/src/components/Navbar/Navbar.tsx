import { Link } from "react-router-dom";
import "./Navbar.css"
import { useState } from "react";

const Navbar = () => {

  const [menu, setMenu] = useState("Home");

  return (
    <nav className="h-20 text-xl p-2 flex items-center justify-between">

<div className="menu-items-left">
        <ul className="flex gap-3">
          <li onClick={()=> setMenu("Home")} className={menu==="Home"? "active": ""} >Home</li>
          <li onClick={()=> setMenu("Shop")} className={menu==="Shop"? "active": ""}>Shop</li>
        </ul>
      </div>

      <div className="logo flex justify-center items-center">
        <Link className="font-bold" to={"/"}>
          <p>Aurel.</p>
        </Link>
      </div>

      <div className="menu-items-right">
        <ul className="flex gap-3">
          <li>
           <i className="fa-solid fa-basket-shopping"></i>
          </li>
          <li>
           <i className="fa-regular fa-user"></i>
          </li>
        </ul>
      </div>

    </nav>
  );
}
export default Navbar
