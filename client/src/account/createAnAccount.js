async function createAnAccount(data) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  };
  const res = await fetch(`${procces.env.VITE_DOMAIN}/create-account`, options);
  if (!res.ok) throw res.status;
}

export {createAnAccount}