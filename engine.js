/* Camera, timeline and presenter controls. Steps are defined in steps.js. */
(function(){
const $=s=>document.querySelector(s);
const WR=$('#wrap'),ST=$('#stage'),CAM=$('#cam'),CAPW=$('#cap'),SCRIM=$('#scrim'),CHIP=$('#chip'),BAR=$('#bar'),NOTES=$('#notes'),CNT=$('#cnt');
const PH={a:$('#pa'),b:$('#pb'),c:$('#pc')};
const P=2000,RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE='cubic-bezier(.65,0,.25,1)';
const CH=[
 {n:'01',name:'Adrián',part:'Apertura',acc:'#8EC5FF',g:'#12305F',c:'#5AA9FF'},
 {n:'02',name:'María',part:'Mapa y avisos',acc:'#7DBBFF',g:'#0F3A73',c:'#7DBBFF'},
 {n:'03',name:'Tyson',part:'Lista de transportes',acc:'#FFC93C',g:'#4A3A08',c:'#FFC93C'},
 {n:'04',name:'Victoria',part:'Detalles y modo fácil',acc:'#45E08E',g:'#0C4A2A',c:'#45E08E'},
 {n:'05',name:'Santiago',part:'Planificador y negocio',acc:'#AE9FFF',g:'#2C2266',c:'#AE9FFF'},
 {n:'06',name:'Equipo',part:'Cierre',acc:'#FFB15C',g:'#4A2A08',c:'#FFB15C'}];
const FILM={acc:'#8EC5FF',g:'#12305F'};
const TEAM=[{n:'Adrián',p:'Apertura y cómo la hicimos',c:'#5AA9FF'},{n:'María',p:'Mapa y avisos de retraso',c:'#7FDBFF'},{n:'Tyson',p:'Lista de transportes',c:'#FFC93C'},{n:'Victoria',p:'Detalles, tutorial y modo fácil',c:'#45E08E'},{n:'Santiago',p:'Planificador y modelo de negocio',c:'#AE9FFF'}];
let steps=[],cur=-1,timers=[],raf=0,curCh=null;
const U=id=>window.MM.U(id);

const camT=c=>{const m=c.m||1,z=P*(1-1/m);return `translateZ(${z.toFixed(1)}px) rotateX(${c.rx||0}deg) rotateY(${c.ry||0}deg) rotateZ(${c.rz||0}deg) translate3d(${-(c.x||0)}px,${-(c.y||0)}px,${-(c.z||0)}px)`};
function cam(c,dur=1.6,ease=EASE){CAM.style.transition=`transform ${RM?.01:dur}s ${ease}`;CAM.style.transform=camT(c)}
function later(fn,ms){timers.push(setTimeout(fn,RM?Math.min(ms,50):ms))}
function every(fn,ms){const id=setInterval(fn,RM?Math.max(ms,4000):ms);timers.push({iv:id})}
function clear(){
  timers.forEach(t=>t&&t.iv?clearInterval(t.iv):clearTimeout(t));timers=[];cancelAnimationFrame(raf);
  const a=PH.a;
  a.querySelectorAll('.s-list .chip,.s-map .chip').forEach(c=>c.classList.toggle('on',!c.previousElementSibling));
  const fb=a.querySelector('.fb');fb.setAttribute('transform','translate(210 500)');
  a.querySelectorAll('.rt-c,.rt-l').forEach(l=>{l.style.strokeDashoffset='';l.style.transition=''});
  a.querySelectorAll('.typ').forEach(t=>t.classList.remove('cur'));
  a.querySelectorAll('.hl').forEach(x=>x.classList.remove('hl'));
  const tu=a.querySelector('.s-tut');if(tu)tu.dataset.p='0';
}
function setScreen(el,name){el.querySelectorAll('.sc').forEach(sc=>sc.classList.toggle('on',sc.classList.contains('s-'+name)))}
function setVal(k,txt){PH.a.querySelectorAll(`[data-v="${k}"]`).forEach(e=>e.textContent=txt)}
function typeVal(k,txt,at){
  setVal(k,'');const els=PH.a.querySelectorAll(`[data-v="${k}"]`);
  later(()=>{els.forEach(e=>e.classList.add('cur'));let n=0;every(()=>{n++;els.forEach(e=>e.textContent=txt.slice(0,n))},70)},at);
  later(()=>{els.forEach(e=>{e.textContent=txt;e.classList.remove('cur')})},at+txt.length*70+500);
}
function addCls(c){ST.classList.add(...c.split(' '))}

/* the bus drives the route and the camera rides along */
function follow(c,dur=4200,endK=.82){
  const a=PH.a,p=a.querySelector('.rt-l'),L=+p.dataset.len,fb=a.querySelector('.fb'),lines=a.querySelectorAll('.rt-c,.rt-l');
  lines.forEach(l=>{l.style.transition='none';l.style.strokeDashoffset=L});
  const at=(len,k)=>{const pt=p.getPointAtLength(len);return{pt,v:c.fixed?c:{...c,rz:(c.rz0||0)+((c.rz1||0)-(c.rz0||0))*k,x:pt.x-183+(c.ox||0),y:pt.y-300+(c.oy||0)}}};
  cam(at(0,0).v,c.fixed?1.6:1.3);
  if(RM){const f=at(endK*L,1);fb.setAttribute('transform',`translate(${f.pt.x} ${f.pt.y})`);lines.forEach(l=>l.style.strokeDashoffset=L-endK*L);cam(f.v,.01);return}
  later(()=>{const t0=performance.now();
    const f=now=>{const k=Math.min(1,(now-t0)/dur),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2,len=e*endK*L,r=at(len,e);
      fb.setAttribute('transform',`translate(${r.pt.x.toFixed(1)} ${r.pt.y.toFixed(1)})`);
      lines.forEach(l=>l.style.strokeDashoffset=L-len);
      if(!c.fixed){CAM.style.transition='none';CAM.style.transform=camT(r.v)}
      if(k<1)raf=requestAnimationFrame(f)};
    raf=requestAnimationFrame(f)},1300);
}
function busAt(k){const p=PH.a.querySelector('.rt-l'),pt=p.getPointAtLength(k*(+p.dataset.len));PH.a.querySelector('.fb').setAttribute('transform',`translate(${pt.x} ${pt.y})`)}
/* the tutorial screen turns its pages by itself */
function tutPages(ms=2600){const sc=PH.a.querySelector('.s-tut');let p=0;sc.dataset.p='0';every(()=>{p=(p+1)%3;sc.dataset.p=String(p)},ms)}

/* captions */
const words=(t,cls,d)=>t.split(' ').map((w,i)=>`<span class="w ${cls||''}" style="--d:${(d+i*.045).toFixed(3)}s">${w} </span>`).join('');
function capHTML(c){
  let d=.12,h='';
  if(c.eb){h+=`<p class="eb">${words(c.eb,'',d)}</p>`;d+=.18}
  if(c.h){h+=`<h2 class="h ${c.hc||''}">${words(c.h,c.gr?'gr':'',d)}</h2>`;d+=c.h.split(' ').length*.045+.12}
  if(c.ods){h+=`<div class="ods" style="--d:${d.toFixed(2)}s"><div class="odb"><span class="odl">ODS</span><span class="odn">11</span>${U('city')}</div><div class="odt"><b>${c.ods.t}</b><small>${c.ods.s}</small></div></div>`;d+=.3}
  if(c.sub){h+=`<p class="sub">${words(c.sub,'',d)}</p>`;d+=.25}
  if(c.qs)h+=`<div class="qs">${c.qs.map((q,i)=>`<div class="q" style="--d:${(d+i*(c.qd||.6)).toFixed(2)}s">${q}</div>`).join('')}</div>`;
  if(c.team)h+=`<div class="team">${TEAM.map((t,i)=>`<div class="tm"><div class="av" style="background:${t.c};--d:${(d+i*.12).toFixed(2)}s">${t.n[0]}</div><div class="tx2" style="--d:${(d+i*.12+.05).toFixed(2)}s"><b>${t.n}</b><span>${t.p}</span></div></div>`).join('')}</div>`;
  if(c.rows)h+=`<div class="rws">${c.rows.map((r,i)=>`<div class="rw" style="--d:${(d+i*.14).toFixed(2)}s"><span class="ri2" style="background:${r.c}">${U(r.ic)}</span><span><b>${r.t}</b><small>${r.s}</small></span></div>`).join('')}</div>`;
  if(c.dt)h+=`<div class="dts">${c.dt.map((s,i)=>`<div class="dtc${s.hot?' hot':''}" style="--d:${(d+i*.16).toFixed(2)}s"><span class="dtn">${i+1}</span><span class="dti">${U(s.ic)}</span><b>${s.t}</b><small>${s.s}</small></div>`).join('')}</div>`;
  if(c.chk)h+=`<div class="chks">${c.chk.map((k,i)=>`<div class="ck2" style="--d:${(d+i*.18).toFixed(2)}s"><span class="ckm">${U('chk')}</span><b>${k.t}</b><small>${k.s}</small></div>`).join('')}</div>`;
  if(c.ben)h+=`<div class="ben">${c.ben.map((b,i)=>`<div class="bi" style="--d:${(d+i*.15).toFixed(2)}s"><i style="background:${b.c}"></i>${b.k?`<em style="color:${b.c}">${b.k}</em>`:''}<b>${b.t}</b><span>${b.s}</span></div>`).join('')}</div>`;
  if(c.cost)h+=`<div class="csts">${c.cost.map((k,i)=>`<div class="cst" style="--d:${(d+i*.12).toFixed(2)}s"><span class="cti">${U(k.ic)}</span><b>${k.t}</b><small>${k.s}</small></div>`).join('')}</div>`;
  if(c.fut)h+=`<div class="fut">${c.fut.map((f,i)=>`<div class="fi" style="--d:${(d+i*.14).toFixed(2)}s"><i></i>${f}</div>`).join('')}</div>`;
  if(c.qr)h+=`<div class="qrb" style="--d:${(d+.1).toFixed(2)}s"><div class="qrc">${window.MM.QR}</div><div class="qrt"><b>${c.qr.u}</b><small>${c.qr.s}</small></div></div>`;
  if(c.sub2)h+=`<p class="sub2" style="--d:${(d+.7).toFixed(2)}s">${U(c.sub2i||'ppl')}<span>${c.sub2}</span></p>`;
  if(c.names)h+=`<p class="names">${words('Adrián · María · Tyson · Victoria · Santiago','',d+.3)}</p>`;
  return h;
}
function showCap(c){
  const old=[...CAPW.querySelectorAll('.cp:not(.out)')];
  old.forEach(o=>{o.classList.add('out');setTimeout(()=>o.remove(),420)});
  SCRIM.className=c&&!c.pane?'s'+(c.pos||'L'):'';
  if(!c)return;
  const el=document.createElement('div');el.className='cp '+(c.pos||'L')+(c.pane?' pane':'')+(c.k?' '+c.k:'');el.innerHTML=capHTML(c);CAPW.appendChild(el);
  const go=()=>requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('in')));
  if(c.at)later(go,c.at);else if(old.length)setTimeout(go,260);else go();
}
function chip(s){
  const key=s.film?'film':s.ch+'|'+(s.who||'');if(key===curCh)return;curCh=key;
  CHIP.classList.add('sw');
  setTimeout(()=>{if(!s.film){const c=CH[s.ch];CHIP.innerHTML=`<span class="dot"></span><span>${c.n} · ${s.who||c.name}</span><span class="pt">${s.part||c.part}</span>`}CHIP.classList.remove('sw')},320);
}
function bar(s){
  BAR.querySelectorAll('.seg').forEach((g,k)=>{
    const list=steps.filter(x=>!x.film&&x.ch===k),pos=list.indexOf(s);
    const w=s.film?0:(k<s.ch?100:k>s.ch?0:((pos+1)/list.length*100));
    g.querySelector('i').style.width=w+'%';g.classList.toggle('cur',!s.film&&k===s.ch)});
}
function eff(i){
  const e={a:{},b:{},c:{},v:{mq:'',pq:''}};
  for(let j=0;j<=i;j++){const s=steps[j];for(const k of ['a','b','c'])if(s[k])e[k]={...e[k],...s[k]};if(s.v)Object.assign(e.v,s.v)}
  return e;
}

function go(i){
  if(i<0||i>=steps.length)return;
  const prev=cur;cur=i;clear();
  const s=steps[i],fwd=i===prev+1,e=eff(i);
  if(i>0)WR.classList.add('started');
  ST.className=(s.film?'film ':'')+(s.cls||'');
  const ch=s.film?FILM:CH[s.ch];
  ST.style.setProperty('--acc',ch.acc);ST.style.setProperty('--g',s.g||ch.g);ST.style.setProperty('--gx',(s.gx||0)+'px');
  for(const k of ['a','b','c']){const ps=e[k],el=PH[k];
    const hid=ps.o===0;
    el.style.transition=`transform ${RM?.01:1.5}s ${EASE},visibility 0s ${hid&&!RM?1.5:0}s`;
    el.style.transform=ps.t||'none';el.style.visibility=hid?'hidden':'visible';
    if(ps.s){if(fwd&&s[k]&&s[k].sd)later(()=>setScreen(el,ps.s),s[k].sd);else setScreen(el,ps.s)}}
  for(const k in e.v){if(fwd&&s.type===k)typeVal(k,e.v[k],s.typeAt||500);else setVal(k,e.v[k])}
  if(s.hl)later(()=>PH.a.querySelector(s.hl)?.classList.add('hl'),s.hlAt||1200);
  if(s.cam0){cam(s.cam0,0);CAM.getBoundingClientRect()}
  if(s.seq&&fwd&&!RM){s.seq.forEach(q=>later(()=>cam(q.c,q.d||1.6,q.e||EASE),q.at||0))}
  else if(s.seq){cam(s.seq[s.seq.length-1].c,1.6)}
  else if(s.cam)cam(s.cam,s.dur||1.6,s.ease||EASE);
  if(s.late)s.late.forEach(([c,ms])=>later(()=>addCls(c),fwd?ms:0));
  showCap(s.cap);chip(s);bar(s);
  NOTES.innerHTML=s.note?`<b>${s.film?'Comercial':(s.who||CH[s.ch].name)}</b>${s.note}`:'';
  CNT.textContent=`${i}/${steps.length-1}`;
  if(s.enter)s.enter(fwd);
  if(s.auto)later(()=>go(cur+1),s.auto);
}
const next=()=>go(cur+1),prev=()=>go(cur-1);
const chStart=k=>steps.findIndex(s=>!s.film&&s.ch===k);
const filmStart=()=>steps.findIndex(s=>s.film&&s.auto);

/* fit the 1920x1080 stage into the window */
function fit(){const s=Math.min(WR.clientWidth/1920,WR.clientHeight/1080);ST.style.transform=`scale(${s})`}
addEventListener('resize',fit);

let wake=null;
function keep(){if(wake||!navigator.wakeLock)return;navigator.wakeLock.request('screen').then(w=>wake=w).catch(()=>{})}
addEventListener('keydown',ev=>{
  const k=ev.key;
  if(['ArrowRight','ArrowDown','PageDown',' ','Enter'].includes(k)){ev.preventDefault();keep();next()}
  else if(['ArrowLeft','ArrowUp','PageUp','Backspace'].includes(k)){ev.preventDefault();prev()}
  else if(k==='n'||k==='N')NOTES.hidden=!NOTES.hidden;
  else if(k==='f'||k==='F')fs();
  else if(k==='c'||k==='C')go(filmStart());
  else if(k==='Home')go(0);
  else if(k==='End')go(steps.length-1);
  else if(k>='1'&&k<='6')go(chStart(+k-1));
});
function fs(){try{if(document.fullscreenElement)document.exitFullscreen();else WR.requestFullscreen().catch(()=>{})}catch(e){}}
let px=null;
ST.addEventListener('pointerdown',e=>{px=e.clientX});
ST.addEventListener('pointerup',e=>{if(px===null)return;const dx=e.clientX-px;px=null;if(e.target.closest('#ctrl'))return;keep();if(dx>60)prev();else next()});
$('#bPrev').onclick=e=>{e.stopPropagation();prev()};
$('#bNext').onclick=e=>{e.stopPropagation();next()};
$('#bNotes').onclick=e=>{e.stopPropagation();NOTES.hidden=!NOTES.hidden};
$('#bFs').onclick=e=>{e.stopPropagation();fs()};
let hideT=0;
addEventListener('pointermove',()=>{WR.classList.add('ui');clearTimeout(hideT);hideT=setTimeout(()=>WR.classList.remove('ui'),2500)});

BAR.innerHTML=CH.map(c=>`<div class="seg" style="--c:${c.c}"><span>${c.name==='Equipo'?'Cierre':c.name}</span><div class="tr"><i></i></div></div>`).join('');
$('#hud').insertAdjacentHTML('beforeend',`<div id="qrm"><div class="qrc">${window.MM.QR}</div><span>Escanea y pruébala</span></div>`);

window.E={cam,later,every,follow,busAt,tutPages,setScreen,addCls,PH,ST,go,list:()=>steps,
  start(list){steps=list;fit();
    const h=(location.hash||'').replace('#','');const m=/^p([1-6])$/.exec(h);
    go(m?chStart(+m[1]-1):h==='comercial'?filmStart():0)}};
})();
