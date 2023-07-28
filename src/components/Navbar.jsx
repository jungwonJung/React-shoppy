import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="p-3 flex justify-between border-b border-gray-300">
      <Link
        to="/"
        className="flex items-center text-4
       text-brand text-3xl"
      >
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={"LogIn"} onClick={login} />}
        {user && <Button text={"LogOut"} onClick={logout} />}
      </nav>
    </header>
  );
}

export default Navbar;
