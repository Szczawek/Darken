import { Outlet, Link } from "react-router-dom";
import "../navigation/navigation.css"
import AccountPanel from "../navigation/AccountPanel";
export default function Navigation() {
  return (
    <>
      <header className="navigation-bar">
        <nav className="navigation">
          <Link to="/">
            <img className="logo" src="/images/Darken.png" alt="logo" />
          </Link>
          <label htmlFor="find-by-name-inp" className="search-lb">
            <input placeholder="Find your video..." type="search" id="find-by-name-inp" />
          </label>
          <AccountPanel />
        </nav>
      </header>
      <Outlet />
    </>
  );
} 
