import CreateAccount from "../account/CreateAccount";
import Login from "../account/Login";
import { Route, Routes } from "react-router-dom";

export default function AccountForm() {
  return (
    <div className="account-form">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
      <div className="routing-panel"></div>
    </div>
  );
}
