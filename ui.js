/* Builds the 3D phones, their app screens (as in the final app) and the floating pieces. */
(function(){
const SYM=`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="bus" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M6.5 3h11A2.5 2.5 0 0 1 20 5.5V16a2 2 0 0 1-1.5 1.94V20H16v-2H8v2H5.5v-2.06A2 2 0 0 1 4 16V5.5A2.5 2.5 0 0 1 6.5 3zM6 6.5V11h12V6.5zM7.5 13.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zm9 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z"/></symbol>
<symbol id="car" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.3 5h9.4a2 2 0 0 1 1.85 1.24L20 10a2 2 0 0 1 1 1.73V17h-2v2.2h-2.6V17H7.6v2.2H5V17H3v-5.27A2 2 0 0 1 4 10l1.45-3.76A2 2 0 0 1 7.3 5zM6.4 10h11.2l-1.1-3H7.5zM6.5 12.4a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zm11 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z"/></symbol>
<symbol id="tax" viewBox="0 0 24 24"><path d="M9.5 1.8h5V4h-5z"/><use href="#car"/></symbol>
<symbol id="pin" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></symbol>
<symbol id="star" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z"/></symbol>
<symbol id="usr" viewBox="0 0 24 24"><path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-8 9c0-4 3.6-7 8-7s8 3 8 7z"/></symbol>
<symbol id="hom" viewBox="0 0 24 24"><path d="M12 3l9 8h-2.5v9h-5v-6h-3v6h-5v-9H3z"/></symbol>
<symbol id="rt" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M6 8.5V12a3 3 0 0 0 3 3h6.5"/></g></symbol>
<symbol id="sch" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 20 20"/></g></symbol>
<symbol id="loc" viewBox="0 0 24 24"><path d="M21 3 3 10.5l7.5 2.9L13.4 21z"/></symbol>
<symbol id="chv" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="bk" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="clk" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></g></symbol>
<symbol id="ppl" viewBox="0 0 24 24"><path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-7 9c0-3.5 3.1-6 7-6s7 2.5 7 6zm14.5-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm1 2c2.6.3 4.5 2.4 4.5 5v2h-3.5c0-2.6-1-4.9-2.6-6.4z"/></symbol>
<symbol id="mapi" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 6l6-2.5 6 2.5 6-2.5v14.5L15 20.5l-6-2.5-6 2.5zm6 0v10l6 2.5v-10z"/></symbol>
<symbol id="swp" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4v15M4 8l4-4 4 4M16 20V5M12 16l4 4 4-4"/></g></symbol>
<symbol id="wlk" viewBox="0 0 24 24"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 8l-3 2v4h2v-3l1.4-.9-1.6 8.4L6 22h2.4l2.2-3 1.4 1.5V22h2v-2.4l-2-2.2.7-3.4 1.3 1.5H18v-2h-3l-2-3-1.5-.9L10 8z"/></symbol>
<symbol id="mm" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 1.5a8 8 0 0 1 8 8c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 8-8zM8 13V6.5l4 4 4-4V13h-2V10l-2 2-2-2v3z"/></symbol>
<symbol id="bell" viewBox="0 0 24 24"><path d="M12 2.5a6.2 6.2 0 0 0-6.2 6.2v3.9L3.9 16v1.4h16.2V16l-1.9-3.4V8.7A6.2 6.2 0 0 0 12 2.5zM9.4 19a2.6 2.6 0 0 0 5.2 0z"/></symbol>
<symbol id="lst" viewBox="0 0 24 24"><path d="M3.5 5h3v3h-3zm5 0h12v3h-12zM3.5 10.5h3v3h-3zm5 0h12v3h-12zM3.5 16h3v3h-3zm5 0h12v3h-12z"/></symbol>
<symbol id="school" viewBox="0 0 24 24"><path d="M12 3 1 8.6l11 5.6 8.6-4.4V16h1.9V8.6zM5.4 12.5v3.6c0 1.9 3 3.6 6.6 3.6s6.6-1.7 6.6-3.6v-3.6L12 15.9z"/></symbol>
<symbol id="work" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9 3h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2zm0 2v2h6V5z"/></symbol>
<symbol id="aa" viewBox="0 0 24 24"><text x="12" y="17.5" text-anchor="middle" font-size="14.5" font-weight="800" font-family="system-ui,-apple-system,sans-serif">Aa</text></symbol>
<symbol id="warn" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.5 1.5 21h21zM11 9.5h2v6h-2zm0 7.5h2v2h-2z"/></symbol>
<symbol id="chk" viewBox="0 0 24 24"><path d="M4.5 12.5l5 5L19.5 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="code" viewBox="0 0 24 24"><path d="M8 6.5 2.5 12 8 17.5M16 6.5l5.5 5.5-5.5 5.5M13.8 4l-3.6 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="gps" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="7"/><path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22"/></g><circle cx="12" cy="12" r="2.8"/></symbol>
<symbol id="srv" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 3h16a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 20 11H4a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 4 3zm0 10h16a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 20 21H4a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 4 13zm2.5-7v2h2V6zm0 10v2h2v-2z"/></symbol>
<symbol id="meg" viewBox="0 0 24 24"><path d="M3 9.5v5a1 1 0 0 0 1 1h2.2l1.6 5.5h3l-1.6-5.5h.8l9 4.5V4.5l-9 4H4a1 1 0 0 0-1 1z"/></symbol>
<symbol id="spk" viewBox="0 0 24 24"><path d="M3.5 9h4l5-4v14l-5-4h-4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.3 5.8a8.8 8.8 0 0 1 0 12.4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></symbol>
<symbol id="eye" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 5c5.2 0 9 4.4 10.2 7-1.2 2.6-5 7-10.2 7S3 14.6 1.8 12C3 9.4 6.8 5 12 5zm0 3.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2z"/></symbol>
<symbol id="tgt" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/></g><circle cx="12" cy="12" r="1.8"/></symbol>
<symbol id="bulb" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-4 12.8V17h8v-2.2A7 7 0 0 0 12 2zM9 18.5h6V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"/></symbol>
<symbol id="phn" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8 1.5h8A2.5 2.5 0 0 1 18.5 4v16a2.5 2.5 0 0 1-2.5 2.5H8A2.5 2.5 0 0 1 5.5 20V4A2.5 2.5 0 0 1 8 1.5zM7.5 5v13h9V5zM10.5 19.5v1h3v-1z"/></symbol>
<symbol id="city" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 21V10h5V6h4v4h1V3h7v18zm2-9v2h2v-2zm0 4v2h2v-2zm5-8v2h1V8zm5-3v2h3V5zm0 4v2h3V9zm0 4v2h3v-2zm0 4v2h3v-2zm-5-5v2h1v-2zm0 4v2h1v-2z"/><path d="M20 21v-9h2v9z"/></symbol>
</defs></svg>`;
document.body.insertAdjacentHTML('afterbegin',SYM);

const U=(id,c='')=>`<svg class="i ${c}" aria-hidden="true"><use href="#${id}"/></svg>`;
const SB=dk=>`<div class="sbar${dk?' dk':''}"><span>9:41</span><span class="ic"><svg width="18" height="12" viewBox="0 0 18 12" style="fill:currentColor"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="2.5" width="3" height="9.5" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg><i class="bat"></i></span></div>`;
const NAV=on=>`<div class="nav chrome">${[['pin','Mapa'],['lst','Cerca'],['rt','Rutas'],['star','Favoritos'],['usr','Perfil']].map(([i,t])=>`<div class="${t===on?'on':''}">${U(i)}${t}</div>`).join('')}</div>`;
const HIC=`<div class="hic"><span class="hb">${U('bell')}<i></i></span><div class="menu"><i></i><i></i><i></i></div></div>`;
const HD=(sm,x='')=>`<div class="hd chrome${sm?' sm':''}${x}"><b>MoveMorelia</b>${HIC}</div>`;
const CHIPS=cls=>`<div class="${cls}">${[['Todos',''],['Camiones','#1E6AE6'],['Taxis','#F5B700'],['Coches','#22C55E']].map(([t,c],i)=>`<span class="chip${i?'':' on'}">${c?`<i style="background:${c}"></i>`:''}${t}</span>`).join('')}</div>`;

/* ---- map ---- */
function marker(cls,ic,fill,ink,q){return `<g transform="translate(-11 -11)"><rect width="22" height="22" rx="6.5" fill="${fill}" stroke="#fff" stroke-width="1.5"/><svg x="3.5" y="3.5" width="15" height="15" viewBox="0 0 24 24"><use href="#${ic}" fill="${ink}"/></svg></g>${q?`<g class="vq" transform="translate(9 -22)"><circle r="9" fill="#fff"/><text y="4.5" text-anchor="middle" font-size="13" font-weight="800" fill="#E5484D" font-family="system-ui">?</text></g>`:''}`}
function mover(path,dur,begin,ic,fill,ink,q){return `<g>${marker('',ic,fill,ink,q)}<animateMotion dur="${dur}s" begin="${begin}s" repeatCount="indefinite" path="${path}"/></g>`}
function mapSVG(simple){
  let minor='';
  for(let x=30;x<366;x+=40)minor+=`M${x} 0V628`;
  for(let y=36;y<628;y+=40)minor+=`M0 ${y}H366`;
  const maj='M0 96H366M0 300H366M0 500H366M70 0V628M210 0V628M318 0V628M-10 430L376 250';
  const pA='M-20 96H386',pB='M70 -20V648',pC='M386 500H-20',pD='M318 648V-20',pE='M-10 430L376 250';
  const R='M210 500V300H318V150';
  const base=`<rect class="m-bg" width="366" height="628"/>
<path class="m-min" d="${minor}" stroke-width="4" fill="none"/>
<rect class="m-park" x="88" y="118" width="104" height="160" rx="10"/><rect class="m-park" x="232" y="322" width="70" height="160" rx="10"/><rect class="m-park" x="8" y="518" width="48" height="100" rx="10"/>
<path class="m-cas" d="${maj}" stroke-width="16" fill="none"/><path class="m-maj" d="${maj}" stroke-width="12" fill="none"/>
<text class="m-lbl" x="140" y="200" text-anchor="middle">Bosque Cuauhtémoc</text>
<text class="m-lbl" x="130" y="303" text-anchor="middle">Av. Madero</text>`;
  const me=`<g class="me"><circle cx="210" cy="500" r="8" fill="#1E6AE6" opacity=".35"><animate attributeName="r" values="8;26" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".45;0" dur="2s" repeatCount="indefinite"/></circle><circle cx="210" cy="500" r="7.5" fill="#1E6AE6" stroke="#fff" stroke-width="3"/></g>`;
  if(simple)return `<svg viewBox="0 0 366 628" aria-hidden="true">${base}${mover(pA,15,-4,'bus','#1E6AE6','#fff',0)}${mover(pB,12,-3,'bus','#1E6AE6','#fff',0)}${mover(pD,11,-2,'car','#22C55E','#fff',0)}${mover(pE,13,-6,'tax','#FFC93C','#3A2A00',0)}${me}</svg>`;
  return `<svg viewBox="0 0 366 628" aria-hidden="true">${base}
${['m-halo','m-glow'].map(c=>`<g class="${c}"><path d="${pA}" style="color:#5AA9FF"/><path d="${pB}" style="color:#5AA9FF"/><path d="${pC}" style="color:#FFC93C"/><path d="${pD}" style="color:#45E08E"/><path d="${pE}" style="color:#FFC93C"/></g>`).join('')}
<path class="rt-c" d="${R}"/><path class="rt-l" d="${R}"/>
<g class="stp"><circle cx="264" cy="300" r="6" fill="#fff" stroke="#1E6AE6" stroke-width="3"/><text class="m-lbl" x="264" y="321" text-anchor="middle">Fuente de las Tarascas</text><circle cx="318" cy="225" r="6" fill="#fff" stroke="#1E6AE6" stroke-width="3"/><text class="m-lbl" x="308" y="228" text-anchor="end">Plaza de Armas</text></g>
${mover(pA,15,0,'bus','#1E6AE6','#fff',1)}${mover(pA,15,-7,'bus','#1E6AE6','#fff',1)}${mover(pB,12,-3,'bus','#1E6AE6','#fff',1)}${mover(pC,17,-5,'tax','#FFC93C','#3A2A00',0)}${mover(pD,11,-2,'car','#22C55E','#fff',0)}${mover(pE,13,-6,'tax','#FFC93C','#3A2A00',0)}
${me}
<g class="fb" data-dyn transform="translate(210 500)"><g transform="scale(1.25)">${marker('','bus','#1E6AE6','#fff',0)}</g></g>
<g transform="translate(318 150)"><g class="dpin"><path d="M0 0C-6-10-14-16-14-26a14 14 0 1 1 28 0c0 10-8 16-14 26z" fill="#E5484D"/><circle cy="-26" r="5.5" fill="#fff"/></g>
<g class="bub"><g transform="translate(-142 -60)"><rect width="120" height="40" rx="11" fill="#fff" stroke="#E3E7EE"/><text x="12" y="17" font-size="10.5" font-weight="700" fill="#111827" font-family="system-ui">Centro Histórico</text><text x="12" y="31" font-size="9.5" font-weight="600" fill="#16A34A" font-family="system-ui">Ruta 08 llega en 3 min</text></g></g></g>
</svg>`;
}

/* ---- data (same examples as the final app) ---- */
const CARDS=[{t:'bu',ic:'bus',n:'Camión Ruta 08',s:'Centro – Villas del Pedregal',m:3,e:'12/40',p:30,c:'#1E6AE6'},{t:'tx',ic:'tax',n:'Taxi 087',s:'Disponible cerca de ti',m:2,e:'4/4',p:100,c:'#F5B700'},{t:'bu',ic:'bus',n:'Camión Ruta 21',s:'Centro – Las Américas',m:6,e:'19/40',p:48,c:'#1E6AE6'}];
const cardIn=c=>`<div class="tile ${c.t}">${U(c.ic)}</div><div class="cinfo"><b>${c.n}</b><small>${c.s}</small><p>Llegada: <strong><span data-m="${c.m}">${c.m}</span> min</strong></p><em>Espacio disponible: ${c.e}</em><div class="kbar"><i style="width:${c.p}%;background:${c.c}"></i></div></div>${U('chv','chev')}`;
const OPTS=[{t:'bu',ic:'bus',n:'Camión Ruta 33',d:'19 min · 4.3 km',a:'Llegas 10:15 a.m.',pl:'Espacio: 18/40',pc:'pb',b:'b1',pr:'$6',pn:'Estudiante',f:'Más barato',fc:'#15803D'},{t:'tx',ic:'tax',n:'Taxi 087',d:'9 min · 3.8 km',a:'Llegas 10:05 a.m.',pl:'Disponible: 4/4',pc:'pg',b:'b2',pr:'$64',f:'Más rápido',fc:'#22C55E'},{t:'cr',ic:'car',n:'Auto de plataforma',d:'12 min · 3.8 km',a:'Llegas 10:08 a.m.',pl:'Disponible: 3/4',pc:'pg',b:'b2',pr:'$58'}];
const optIn=o=>`${o.f?`<span class="fast" style="background:${o.fc}">${o.f}</span>`:''}<div class="tile ${o.t}">${U(o.ic)}</div><div class="cinfo"><b>${o.n}</b><small>${o.d}</small><p>${o.a}</p><span class="tag ${o.pc}">${o.pl}</span></div><div class="oa"><span class="pr">${o.pr}</span>${o.pn?`<span class="pn">${o.pn}</span>`:''}<span class="sel ${o.b}">Seleccionar<span class="ok">¡Listo!</span></span></div>`;

const VSHEET=`<div class="vsheet"><div class="grab"></div><div class="vrow"><div class="tile bu">${U('bus')}</div><div class="cinfo"><b>Camión Ruta 08</b><small>Villas del Pedregal – Centro</small><p>Llegada: <strong><span data-m="3">3</span> min</strong> · Fuente de las Tarascas</p><em>Espacio disponible: 12/40</em></div><span class="vx">✕</span></div><div class="vbtns"><span class="vb1">${U('bell')}Avisarme</span><span class="vb2">Ver detalles</span></div></div>`;
const PTI=`<div class="pti"><div class="ptk">${U('school')}Para ti · Estudiante</div><b>Para llegar a Tecmilenio a las 7:00</b><small>Sal a las 6:35 a.m. · Ruta 33 · 20 min</small><div class="ptb"><span>Pasaje estudiante: $6</span><i>Ver ruta</i></div></div>`;
const MINI=(t,ic,b,s,x='')=>`<div class="mini"><span class="tile ${t}">${U(ic)}</span><span class="mt"><b>${b}</b><small>${s}</small></span>${x}</div>`;
const ART={
 map:`<div class="amap"><i class="agrid"></i><span class="otile bu f1">${U('bus')}</span><span class="otile tx f2">${U('tax')}</span><span class="otile cr f3">${U('car')}</span><span class="amed"></span>${MINI('bu','bus','Camión Ruta 08','Espacio: 26/40','<strong>3 min</strong>')}</div>`,
 cmp:`<div class="acol">${MINI('bu','bus','Camión Ruta 33','24 min · $6 estudiante','<strong>Elegir</strong>')}${MINI('tx','tax','Taxi 214','11 min · $64','<strong>Elegir</strong>')}${MINI('cr','car','Auto de plataforma','15 min · $58','<strong>Elegir</strong>')}</div>`,
 alert:`<div class="acol two">${MINI('wa','warn','Retraso en la Ruta 08','Tráfico en Av. Madero · +6 min')}${MINI('bu','bus','La Ruta 33 está llegando','Llega en 1 min a tu parada')}</div>`
};
const TPG=(i,n,h,p,art)=>`<div class="tpg tpg${i}"><div class="otop"><small>${n} de 6</small><span>Saltar</span></div><div class="oart">${art}</div><h3 class="oh one">${h}</h3><p class="op2">${p}</p><div class="odots">${[1,2,3,4,5,6].map(k=>`<i class="${k==n?'on':''}"></i>`).join('')}</div><div class="obtn">Siguiente</div></div>`;
const NTS=`<div class="nts"><div class="nt ntA"><div class="ni bu">${U('bus')}</div><div class="nx"><b>Tu camión llega en 3 min</b><small>Ruta 08 · Fuente de las Tarascas</small></div><em>ahora</em></div><div class="nt ntD"><div class="ni wa">${U('warn')}</div><div class="nx"><b>Retraso en la Ruta 08</b><small>Obra en Periférico Norte. Llega 7 min tarde: ahora en 16 min.</small></div><em>ahora</em></div><div class="nt ntS"><div class="ni ok">${U('bus')}</div><div class="nx"><b>La Ruta 33 está llegando</b><small>Otra opción: llega en 1 min a tu parada.</small></div><em>ahora</em></div></div>`;

/* ---- screens ---- */
const S={
map:()=>`<div class="sc s-map">${SB()}${HD()}<div class="mapw">${mapSVG()}</div><div class="srch chrome">${U('sch')}<span class="typ" data-v="mq" data-ph="¿A dónde vas?"></span></div>${CHIPS('mchips chrome')}<div class="loc chrome">${U('loc')}</div>${VSHEET}${NAV('Mapa')}<div class="home"></div></div>`,
list:()=>`<div class="sc s-list lst">${SB()}${HD(1)}<div class="lsrch">${U('sch')}Buscar ruta o destino</div>${CHIPS('chips')}<div class="lhd">Cerca de ti<span class="live"><i></i>En vivo</span></div>${PTI}${CARDS.map((c,i)=>`<div class="card c${i}" style="top:${384+i*116}px">${cardIn(c)}${i?'':'<div class="tapr"></div>'}</div>`).join('')}${NAV('Cerca')}<div class="home"></div></div>`,
det:()=>`<div class="sc s-det">${SB(1)}<div class="dhd">${U('bk')}<b>Detalles</b></div>
<div class="hero"><div class="cloud" style="top:16px"></div><div class="cloud" style="top:40px;width:60px;animation-delay:-8s"></div><div class="sky"></div><div class="sky b"></div><div class="road"></div>
<svg class="dbus" viewBox="0 0 220 90" aria-hidden="true"><rect x="6" y="6" width="208" height="66" rx="14" fill="#1E6AE6"/><rect x="6" y="6" width="208" height="12" rx="10" fill="#3B8BFF"/><rect x="6" y="54" width="208" height="7" fill="#fff" opacity=".9"/><rect x="18" y="22" width="28" height="24" rx="4" fill="#0E2E66"/><rect x="52" y="22" width="28" height="24" rx="4" fill="#0E2E66"/><rect x="86" y="22" width="28" height="24" rx="4" fill="#0E2E66"/><rect x="120" y="22" width="28" height="24" rx="4" fill="#0E2E66"/><rect x="156" y="22" width="24" height="44" rx="3" fill="#0E2E66"/><rect x="167" y="22" width="2" height="44" fill="#1E6AE6"/><rect x="186" y="18" width="24" height="30" rx="6" fill="#0E2E66"/><rect x="204" y="58" width="8" height="7" rx="2" fill="#FFE07A"/><text x="24" y="69" font-size="9" font-weight="800" fill="#1E6AE6" font-family="system-ui">RUTA 08</text><g class="wh"><circle cx="50" cy="74" r="14" fill="#1C1C22"/><circle cx="50" cy="74" r="6" fill="#B8C0CA"/><rect x="48.5" y="62" width="3" height="24" fill="#B8C0CA"/></g><g class="wh"><circle cx="172" cy="74" r="14" fill="#1C1C22"/><circle cx="172" cy="74" r="6" fill="#B8C0CA"/><rect x="170.5" y="62" width="3" height="24" fill="#B8C0CA"/></g></svg>
<div class="pill"><i></i><span class="st">En camino</span><span class="st2">Con retraso</span></div></div>
<div class="dtt"><b>Camión Ruta 08</b><span>Centro – Villas del Pedregal</span></div>
<div class="dlate">${U('warn')}<div><b>Retraso de 7 min</b><small>Obra en Periférico Norte. Los tiempos ya incluyen el retraso.</small></div></div>
<div class="dmov"><div class="dsx"><div class="dbx">${U('clk')}<div><small>Llega a tu parada</small><strong class="ll">3 min</strong><strong class="ll2">16 min</strong></div></div><div class="dbx">${U('ppl')}<div style="flex:1"><small>Espacio disponible</small><strong>12 / 40</strong><div class="ob"><i></i></div></div></div></div>
<div class="dnx">Siguiente camión: <b>25 min</b> · después 35 min</div>
<div class="dpt">Paradas cercanas</div>
<div class="dtl"><div class="rail"></div><div class="rfill"></div><div class="bmk">${U('bus')}</div><div class="row"><span class="d"></span>Av. Madero</div><div class="row me"><span class="d"></span>Fuente de las Tarascas<em>Tu parada</em></div><div class="row"><span class="d"></span>Plaza de Armas</div><div class="row"><span class="d"></span>Centro</div></div></div>
<div class="dbtn">${U('mapi')}Ver en el mapa</div><div class="home"></div></div>`,
plan:()=>`<div class="sc s-plan">${SB()}${HD(1)}<div class="od"><div class="odr"><span class="gdot"></span>Tu ubicación actual</div><div class="odr">${U('pin')}<span class="typ" data-v="pq" data-ph="Destino"></span></div><div class="swp">${U('swp')}</div></div>
<div class="tabs"><div class="on">${U('rt')}Todas</div><div>${U('bus')}Camión</div><div>${U('tax')}Taxi</div><div>${U('car')}Coche</div></div><div class="plb">3 opciones · Salida ahora</div>
${OPTS.map((o,i)=>`<div class="opt o${i}" style="top:${324+i*128}px">${optIn(o)}</div>`).join('')}
<div class="steps"><span>${U('wlk')}3 min</span><i>›</i><span style="color:#1E5FD6">${U('bus')}Ruta 33</span><i>›</i><span>${U('wlk')}2 min</span></div>${NAV('Rutas')}<div class="home"></div></div>`,
who:()=>`<div class="sc s-who">${SB(1)}<div class="otop"><small>1 de 6</small><span>Saltar</span></div><div class="oart"><span class="otile big">${U('mm')}</span><span class="otile bu f1">${U('bus')}</span><span class="otile tx f2">${U('tax')}</span><span class="otile cr f3">${U('car')}</span></div>
<h3 class="oh">¡Hola! ¿Para qué vas a usar MoveMorelia?</h3><p class="op">Así te mostramos lo que más te sirve.</p>
<div class="owho"><div class="ob1"><span class="tile bu">${U('school')}</span><span><b>Soy estudiante</b><small>Voy a la escuela o a la universidad</small></span><i class="otap"></i></div><div class="ob2"><span class="tile cr">${U('work')}</span><span><b>Soy trabajador</b><small>Voy al trabajo todos los días</small></span></div></div>
<div class="odots"><i class="on"></i><i></i><i></i><i></i><i></i><i></i></div><div class="home"></div></div>`,
tut:()=>`<div class="sc s-tut" data-p="0">${SB(1)}${TPG(0,2,'Mira todo en el mapa','Ve en tiempo real dónde van los camiones, taxis y autos.',ART.map)}${TPG(1,4,'Compara y elige','Camión, taxi o auto: ves cuánto tardas, cuánto cuesta y a qué hora llegas.',ART.cmp)}${TPG(2,5,'Te avisamos','Si tu camión viene con retraso o ya está por llegar, te llega un aviso.',ART.alert)}<div class="home"></div></div>`,
easy:()=>`<div class="sc s-easy">${SB()}${HD(0,' ez')}<div class="ezmap">${mapSVG(1)}</div><div class="ezs">${U('sch')}¿A dónde vas?</div>
<div class="ezv">${U('spk')}<span><b>Leyendo en voz alta</b>“Camina 3 minutos a tu parada.”</span><i class="wv"><i></i><i></i><i></i></i></div>
<div class="ezsh"><b class="ezq">¿A dónde quieres ir?</b>${[['bu','school','A la escuela','Tecmilenio'],['cr','hom','A mi casa','Lugar guardado'],['gy','sch','A otro lugar','Escribe a dónde vas']].map(([c,i,t,s])=>`<div class="ezb"><span class="tile ${c}">${U(i)}</span><span class="ezt"><b>${t}</b><small>${s}</small></span>${U('chv','chev')}</div>`).join('')}</div>
${NAV('Mapa')}<div class="home"></div></div>`
};

/* ---- phone ---- */
function phone(id,screens,extra='',over=''){
  let lay='';for(let k=1;k<=11;k++)lay+=`<div class="lay" style="transform:translateZ(${-k*3}px)"></div>`;
  const back=`<div class="back"><div class="bump"><div class="lens" style="left:14px;top:14px"></div><div class="lens" style="left:14px;top:88px"></div><div class="lens" style="left:88px;top:51px"></div></div><div class="logo">${U('mm')}</div></div>`;
  const el=document.createElement('div');el.className='ph';el.id=id;
  el.innerHTML=`${back}${lay}<div class="body"><div class="scr"><div class="island"></div>${screens.map(s=>S[s]()).join('')}${over}</div><div class="glare"></div></div>${extra}`;
  el.querySelector('.sc').classList.add('on');
  return el;
}
const xcards=CARDS.map((c,i)=>`<div class="card xc" style="left:28px;top:${396+i*116}px;--i:${i};--z:${50+i*38}px">${cardIn(c)}</div>`).join('');
const XO=[{x:-330,y:40,r:16},{x:330,y:-118,r:-16},{x:345,y:96,r:-12}];
const xopts=OPTS.map((o,i)=>`<div class="opt xo o${i}" style="left:28px;top:${336+i*128}px;--i:${i};--x:${XO[i].x}px;--y:${XO[i].y}px;--r:${XO[i].r}deg">${optIn(o)}</div>`).join('');
const tok=(ic,cls,ink,name,sub,x,y,z,r,d)=>`<div class="tok" style="--x:${x}px;--y:${y}px;--z:${z}px;--r:${r}deg;--d:${d}s"><div class="bob"><div class="tl ${cls}" style="transform:translateZ(-8px);box-shadow:inset 0 0 0 200px rgba(0,0,0,.4)"></div><div class="tl ${cls}" style="transform:translateZ(-16px);box-shadow:inset 0 0 0 200px rgba(0,0,0,.55)"></div><div class="tf ${cls}" style="color:${ink}">${U(ic)}</div><div class="tn">${name}<small>${sub}</small></div></div></div>`;
/* the tríptico: three panels, outside on the front faces and inside on the back faces */
const TRI=`<div id="tri"><div class="tsw"><div class="tfl">${[0,1,2].map(i=>`<div class="trp r${i}"><div class="tfc" style="background-position:${-i*300}px 0"></div><div class="tbk" style="background-position:${-(2-i)*300}px 0"></div></div>`).join('')}</div></div></div>`;

const W=document.getElementById('world');
W.appendChild(phone('pa',['map','list','det','plan','who','tut','easy'],xcards+xopts,NTS));
W.appendChild(phone('pb',['list','plan']));
W.appendChild(phone('pc',['plan','tut']));
W.insertAdjacentHTML('beforeend',tok('bus','bu','#fff','Camiones','AZUL',-170,-300,220,10,0)+tok('tax','tx','#3A2A00','Taxis','AMARILLO',300,-110,240,-12,.12)+tok('car','cr','#fff','Autos','VERDE',240,270,300,-8,.24)+TRI);

/* the phones b and c show their screens in a finished state */
document.querySelectorAll('#pb .typ,#pc .typ').forEach(t=>t.textContent='Tecmilenio');

/* route length for the drawing animation */
const pa=document.getElementById('pa');
pa.querySelectorAll('.rt-c,.rt-l').forEach(p=>{const L=p.getTotalLength();p.style.strokeDasharray=L;p.dataset.len=L;p.setAttribute('stroke-dashoffset',L)});

/* always-on live data: minutes tick down, detail status cycles */
setInterval(()=>document.querySelectorAll('[data-m]').forEach(e=>{let v=+e.textContent-1;if(v<1)v=+e.dataset.m;e.textContent=v}),3200);
let k=0;const V=['3 min','2 min','1 min','Llegando'];
setInterval(()=>{k=(k+1)%4;document.querySelectorAll('.ll').forEach(e=>e.textContent=V[k]);document.querySelectorAll('.pill').forEach(p=>{p.classList.toggle('arr',k===3);p.querySelector('.st').textContent=k===3?'Llegando':'En camino'})},2400);

window.MM={U,QR:`<svg class="qrs" viewBox="-2 -2 37 37" shape-rendering="crispEdges" aria-label="Código QR para abrir la app MoveMorelia" role="img"><rect x="-2" y="-2" width="37" height="37" fill="#fff"/><path fill="#0B1F45" d="M0 0h7v1h-7zM8 0h1v1h-1zM13 0h1v1h-1zM17 0h2v1h-2zM22 0h1v1h-1zM26 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM8 1h3v1h-3zM12 1h3v1h-3zM18 1h2v1h-2zM26 1h1v1h-1zM32 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM8 2h9v1h-9zM19 2h3v1h-3zM24 2h1v1h-1zM26 2h1v1h-1zM28 2h3v1h-3zM32 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM9 3h1v1h-1zM14 3h3v1h-3zM18 3h4v1h-4zM24 3h1v1h-1zM26 3h1v1h-1zM28 3h3v1h-3zM32 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM8 4h3v1h-3zM12 4h1v1h-1zM15 4h3v1h-3zM26 4h1v1h-1zM28 4h3v1h-3zM32 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM14 5h4v1h-4zM19 5h1v1h-1zM21 5h1v1h-1zM23 5h2v1h-2zM26 5h1v1h-1zM32 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h7v1h-7zM13 7h1v1h-1zM15 7h2v1h-2zM18 7h1v1h-1zM0 8h1v1h-1zM3 8h6v1h-6zM11 8h2v1h-2zM14 8h1v1h-1zM16 8h2v1h-2zM23 8h3v1h-3zM28 8h1v1h-1zM30 8h3v1h-3zM2 9h2v1h-2zM5 9h1v1h-1zM7 9h4v1h-4zM13 9h3v1h-3zM17 9h4v1h-4zM22 9h2v1h-2zM28 9h3v1h-3zM0 10h2v1h-2zM4 10h1v1h-1zM6 10h2v1h-2zM11 10h1v1h-1zM13 10h1v1h-1zM15 10h1v1h-1zM20 10h2v1h-2zM23 10h1v1h-1zM25 10h2v1h-2zM28 10h5v1h-5zM2 11h1v1h-1zM4 11h2v1h-2zM7 11h5v1h-5zM13 11h1v1h-1zM18 11h2v1h-2zM23 11h3v1h-3zM27 11h1v1h-1zM30 11h2v1h-2zM1 12h1v1h-1zM3 12h1v1h-1zM6 12h2v1h-2zM9 12h1v1h-1zM11 12h3v1h-3zM15 12h1v1h-1zM17 12h1v1h-1zM22 12h1v1h-1zM24 12h1v1h-1zM26 12h2v1h-2zM31 12h1v1h-1zM0 13h1v1h-1zM5 13h1v1h-1zM10 13h1v1h-1zM13 13h2v1h-2zM18 13h3v1h-3zM23 13h1v1h-1zM25 13h1v1h-1zM27 13h1v1h-1zM29 13h1v1h-1zM0 14h1v1h-1zM2 14h1v1h-1zM5 14h3v1h-3zM15 14h1v1h-1zM19 14h2v1h-2zM26 14h2v1h-2zM29 14h1v1h-1zM1 15h2v1h-2zM5 15h1v1h-1zM8 15h3v1h-3zM12 15h3v1h-3zM16 15h1v1h-1zM20 15h1v1h-1zM25 15h1v1h-1zM27 15h2v1h-2zM30 15h1v1h-1zM32 15h1v1h-1zM0 16h1v1h-1zM3 16h4v1h-4zM8 16h1v1h-1zM10 16h4v1h-4zM15 16h2v1h-2zM22 16h8v1h-8zM1 17h2v1h-2zM5 17h1v1h-1zM7 17h3v1h-3zM13 17h1v1h-1zM15 17h1v1h-1zM17 17h5v1h-5zM26 17h1v1h-1zM28 17h1v1h-1zM30 17h1v1h-1zM32 17h1v1h-1zM0 18h1v1h-1zM2 18h2v1h-2zM5 18h2v1h-2zM8 18h1v1h-1zM12 18h4v1h-4zM17 18h4v1h-4zM23 18h2v1h-2zM27 18h1v1h-1zM29 18h2v1h-2zM32 18h1v1h-1zM0 19h1v1h-1zM2 19h2v1h-2zM8 19h1v1h-1zM11 19h1v1h-1zM13 19h2v1h-2zM22 19h3v1h-3zM26 19h1v1h-1zM28 19h4v1h-4zM0 20h7v1h-7zM8 20h4v1h-4zM13 20h2v1h-2zM16 20h1v1h-1zM18 20h1v1h-1zM21 20h2v1h-2zM24 20h1v1h-1zM29 20h1v1h-1zM32 20h1v1h-1zM0 21h5v1h-5zM9 21h6v1h-6zM17 21h1v1h-1zM22 21h2v1h-2zM27 21h3v1h-3zM0 22h1v1h-1zM6 22h1v1h-1zM8 22h1v1h-1zM11 22h1v1h-1zM13 22h2v1h-2zM17 22h1v1h-1zM19 22h6v1h-6zM26 22h1v1h-1zM28 22h1v1h-1zM31 22h2v1h-2zM0 23h1v1h-1zM4 23h1v1h-1zM8 23h2v1h-2zM11 23h1v1h-1zM13 23h1v1h-1zM15 23h1v1h-1zM17 23h4v1h-4zM22 23h1v1h-1zM24 23h2v1h-2zM27 23h1v1h-1zM30 23h3v1h-3zM0 24h4v1h-4zM6 24h1v1h-1zM10 24h1v1h-1zM13 24h1v1h-1zM16 24h1v1h-1zM18 24h1v1h-1zM20 24h1v1h-1zM23 24h7v1h-7zM8 25h1v1h-1zM11 25h1v1h-1zM15 25h4v1h-4zM21 25h4v1h-4zM28 25h1v1h-1zM30 25h2v1h-2zM0 26h7v1h-7zM8 26h1v1h-1zM10 26h1v1h-1zM12 26h2v1h-2zM15 26h1v1h-1zM17 26h1v1h-1zM19 26h2v1h-2zM23 26h2v1h-2zM26 26h1v1h-1zM28 26h1v1h-1zM30 26h2v1h-2zM0 27h1v1h-1zM6 27h1v1h-1zM8 27h3v1h-3zM12 27h1v1h-1zM14 27h2v1h-2zM17 27h3v1h-3zM21 27h4v1h-4zM28 27h3v1h-3zM0 28h1v1h-1zM2 28h3v1h-3zM6 28h1v1h-1zM8 28h1v1h-1zM10 28h1v1h-1zM12 28h2v1h-2zM15 28h3v1h-3zM21 28h8v1h-8zM32 28h1v1h-1zM0 29h1v1h-1zM2 29h3v1h-3zM6 29h1v1h-1zM8 29h1v1h-1zM10 29h1v1h-1zM12 29h1v1h-1zM16 29h1v1h-1zM18 29h1v1h-1zM21 29h5v1h-5zM27 29h1v1h-1zM32 29h1v1h-1zM0 30h1v1h-1zM2 30h3v1h-3zM6 30h1v1h-1zM9 30h3v1h-3zM13 30h1v1h-1zM15 30h1v1h-1zM19 30h1v1h-1zM22 30h1v1h-1zM24 30h2v1h-2zM27 30h2v1h-2zM30 30h3v1h-3zM0 31h1v1h-1zM6 31h1v1h-1zM9 31h1v1h-1zM11 31h2v1h-2zM18 31h3v1h-3zM23 31h1v1h-1zM27 31h6v1h-6zM0 32h7v1h-7zM8 32h1v1h-1zM10 32h1v1h-1zM12 32h1v1h-1zM14 32h4v1h-4zM19 32h1v1h-1zM23 32h2v1h-2zM26 32h3v1h-3z"/></svg>`};
})();
