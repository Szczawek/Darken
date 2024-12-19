import { useState } from "react";
import { createAnAccount } from "./createAnAccount";
import { isDataInUse } from "./isDataInUse";
export default function CreateAccount() {
  const [data, setData] = useState({
    nick: "",
    email: "",
    password: "",
    confirmPassword: "",
    unqiueName: "",
  });

  const [fetchAction, setFetchAction] = useState({
    loading: false,
    error: false,
  });

  const [warnings, setWarnings] = useState({
    unqiueName: false,
    email: false,
    password: false,
  });

  function updateData(e) {
    const { value, name } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  function updateAction(type, bool) {
    setFetchAction((prev) => ({ ...prev, [type]: bool }));
  }

  function updateWarnigns(type, bool) {
    setWarnings((prev) => ({ ...prev, [type]: bool }));
  }

  async function tryToCreate() {
    try {
      updateAction("laoding", true);
      await createAnAccount(data);
    } catch (err) {
      updateAction("error", true);
    } finally {
      updateAction("loading", false);
    }
  }
  async function isDataCorret() {
    try {
      const { unqiueName, password, email, confirmPassword } = data;
      if ([unqiueName, password, email, confirmPassword].includes("")) return;
      await isDataInUse({ unqiueName, email });
    } catch (err) {
      if (err.code != 403) {
        setFetchAction("error", true);
      }
      return false;
      // const {email,unqiueName} = err.type
      // [email,unqiueName].forEach(e => {

      // });
    }
  }
  async function submit(e) {
    e.preventDefault();
    const actionSuccessful = await isDataCorret();
    if (!actionSuccessful) return;
    await tryToCreate();
  }

  if (fetchAction.error)
    return (
      <div className="error-box">
        <p>Server is sleeping currently, so wait yyy.... 5min? MAYBE?</p>
      </div>
    );

  return (
    <div className="create-account">
      <h2>Sign in</h2>
      <form onSubmit={submit}>
        <label htmlFor="cr-nick">
          <input
            name="nick"
            value={data.nick}
            onChange={updateData}
            id="cr-nick"
            type="text"
          />
        </label>
        <label htmlFor="cr-unqiue-nick">
          <input
            name="unqiueName"
            value={data.unqiueName}
            onChange={updateData}
            id="cr-unqiue-nick"
            type="text"
          />
        </label>
        <label htmlFor="cr-email">
          <input
            name="email"
            value={data.email}
            onChange={updateData}
            id="cr-email"
            type="email"
          />
        </label>
        <label htmlFor="cr-password">
          <input
            name="password"
            value={data.password}
            onChange={updateData}
            id="cr-password"
            type="password"
          />
        </label>
        <label htmlFor="cr-confirm-password">
          <input
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={updateData}
            id="cr-confirm-password"
            type="password"
          />
        </label>
        <button disabled={fetchAction.loading ? true : false} type="submit">
          {fetchAction.loading ? "Loading" : "Submit"}
        </button>
      </form>
    </div>
  );
}
