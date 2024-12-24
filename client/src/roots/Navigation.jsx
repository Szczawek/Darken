import { Outlet, Link } from "react-router-dom";
import "../navigation/navigation.css";
import AccountPanel from "../navigation/AccountPanel";
export default function Navigation({ id }) {
  return (
    <>
      <header className="navigation-bar">
        <nav className="navigation">
          <Link to="/">
            <img className="logo" src="/images/Darken.png" alt="logo" />
          </Link>
          <label htmlFor="find-by-name-inp" className="search-lb">
            <input
              placeholder="Find your video..."
              type="search"
              id="find-by-name-inp"
            />
          </label>
          {id == 0 ? (
            <Link to={"/account"}>
              <div className="user-logo">
                <img src="/images/user.png" alt="avatar" />
              </div>
            </Link>
          ) : (
            <AccountPanel />
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
}
