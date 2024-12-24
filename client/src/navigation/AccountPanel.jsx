import { useContext, useRef, useState } from "react";
import { Methods } from "../App";
import PanelList from "./PanelList";
export default function AccountPanel() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const { id } = useContext(Methods);
  const master = useRef(null);

  function updateMenuStatus(bool) {
    setMenuIsOpened(bool);
  }
  function focuseOutsiedMenu(e) {
    const { target, relatedTarget } = e;
    const status = master.current.contains(relatedTarget);
    if (status || target == master.current) return;
    setMenuIsOpened(false);
  }
  return (
    <div
      tabIndex={0}
      ref={master}
      className="account-panel"
      onBlur={focuseOutsiedMenu}>
      {menuIsOpened ? (
        <PanelList />
      ) : (
        <button onClick={() => updateMenuStatus(true)} className="user-logo">
          <img src="/images/user.png" alt="user logo" />
        </button>
      )}
    </div>
  );
}
