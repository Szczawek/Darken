import { Outlet, Link } from "react-router-dom";
import AccountPanel from "../navigation/AccountPanel";
export default function Navigation() {
  return (
    <>
      <header className="navigation-bar">
        <nav>
          <Link to="/">
            <h2>Logo</h2>
          </Link>
          <label htmlFor="find-by-name-inp" className="search-lb">
            <input type="search" id="find-by-name-inp" />
          </label>
          <AccountPanel />
        </nav>
      </header>
      <Outlet />
    </>
  );
}
