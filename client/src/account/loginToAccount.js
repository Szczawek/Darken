async function login(data) {
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    };
    const res = await fetch(`${process.env.VITE_DOMAIN}/login`, options);
    if (!res.ok) throw res.status;
  }
  