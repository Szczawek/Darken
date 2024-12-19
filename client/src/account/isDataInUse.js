async function isDataInUse(data) {
  const options = {
    method: "POST",
    credentials: "include",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  };
  const res = await fetch(`${process.env.VITE_DOMAIN}/login`, options);
  const obj = await res.json();
  if (!res.ok) throw { code: res.status, type: obj };
}

export {isDataInUse}