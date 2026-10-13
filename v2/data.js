/* Deterministic fictional demo data. No customer data or equipment connections. */
(function(){
 const sites=[
  {id:'A',name:'Building A',kind:'Hotel',factor:1,zones:['Meeting room 01','Open office','Lobby','Server room']},
  {id:'B',name:'Building B',kind:'Resort',factor:1.8,zones:['Conference room','Guest corridor','Guest lobby','Plant room']},
  {id:'C',name:'Building C',kind:'Retail / F&B',factor:.67,zones:['Staff room','Shop floor','Entrance','Cold storage']}
 ];
 const weights=Array.from({length:30},(_,i)=>90+((i*17)%31)+(i%7<5?12:-9));
 const weightTotal=weights.reduce((a,b)=>a+b,0);
 function series(site){const baseline=weights.map(x=>Math.floor(100000*site.factor*x/weightTotal));baseline[29]+=Math.round(100000*site.factor)-baseline.reduce((a,b)=>a+b,0);const actual=baseline.map(x=>Math.floor(x*.75));actual[29]+=Math.round(75000*site.factor)-actual.reduce((a,b)=>a+b,0);return baseline.map((b,i)=>({date:`2026-09-${String(i+1).padStart(2,'0')}`,baseline:b,scenario:actual[i]}));}
 function metrics(id,days=30){const site=sites.find(s=>s.id===id)||sites[0],rows=series(site).slice(-days);const baseline=rows.reduce((s,d)=>s+d.baseline,0),energy=rows.reduce((s,d)=>s+d.scenario,0),gross=(baseline-energy)*4,subscription=10000*site.factor*days/30;return {baseline,energy,reduction:(baseline-energy)/baseline*100,cost:energy*4,gross,subscription,net:gross-subscription,rows};}
 function freshSite(){return {mode:'Assist',acted:false,override:false,policy:{vacancy:15,min:23,max:26},events:[],selectedZone:0};}
 function initial(){return {site:'A',days:30,sites:Object.fromEntries(sites.map(s=>[s.id,freshSite()])),tour:-1};}
 window.KDemo={sites,series,metrics,freshSite,initial};
})();
