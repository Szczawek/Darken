import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function PanelList({ avatar }) {
  const list = useRef(null);

//   Without this, the first click outside the panel list doesn't close the menu
  useEffect(() => {
    if (list.current) list.current.focus();
  }, []);

  return (
    <ul tabIndex={0} ref={list} className="panel-list">
      <li className="panel-link">
        <Link>
          <div className="avatar-link">
            <img src={avatar ? avatar : "/images/user.png"} alt="avatar" />
          </div>
        </Link>
      </li>
      <li className="panel-link">
        <Link>Settings</Link>
      </li>
      <li className="panel-link">
        <Link>Notification</Link>
      </li>
      <li className="panel-link">
        <Link>Contact</Link>
      </li>
      <li className="panel-link">
        <button>Logout</button>
      </li>
    </ul>
  );
}
