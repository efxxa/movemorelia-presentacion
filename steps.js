/* The shot list: a self-running commercial, then the final presentation, one click per shot. */
(function(){
const T=(x,y,z,ry,rx=0)=>`translate3d(${x}px,${y}px,${z}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
const HIDE_B={t:T(-200,1500,-600,30,-40),o:0},HIDE_C={t:T(200,1500,-600,-30,-40),o:0};
const TRIO_B={t:T(-470,30,-220,30),o:1},TRIO_C={t:T(470,30,-220,-30),o:1};
const PUSH='cubic-bezier(.7,0,.9,.45)',LAND='cubic-bezier(.15,.6,.2,1)';
const CHAP=(n,name,h,sub)=>({pos:'L',eb:`${n} · ${name}`,h,gr:true,sub,at:300});
const SIDE={x:-480,m:1};
/* zoomed screens sit in the right half so captions on the left never cover them */
const Z=(y,more={})=>({x:-179,y,m:2.3,...more});
const film='El comercial corre solo. Si hace falta, presiona → para adelantar.';

const steps=[
/* ---------- comercial ---------- */
{film:1,cls:'black night ui0',a:{t:T(0,0,0,0),s:'map',o:1},b:HIDE_B,c:HIDE_C,v:{mq:'',pq:''},
 cam:{x:0,y:90,m:5.4,rx:44,rz:-12},dur:.01,cap:{pos:'C',eb:'Equipo MoveMorelia presenta'},
 note:'Pantalla de inicio. Da clic o presiona → para que empiece el comercial.'},
{film:1,auto:5400,cls:'night ui0',cam0:{x:0,y:90,m:5.4,rx:44,rz:-12},cam:{x:10,y:-10,m:4.6,rx:38,rz:-5},dur:6.5,ease:'cubic-bezier(.3,0,.4,1)',
 cap:{pos:'C',eb:'Morelia · 7:40 a.m.',h:'Todos vamos a algún lado.',hc:'m',at:700},note:film},
{film:1,auto:4300,cls:'night ui0 qs',cam:{x:-70,y:130,m:4.2,rx:42,rz:5},dur:5,ease:'cubic-bezier(.3,0,.4,1)',
 cap:{pos:'C',qs:['¿Ya pasó?','¿Cuánto falta?','¿Va lleno?'],qd:.9},note:film},
{film:1,auto:4800,gx:300,cam:SIDE,dur:2.6,ease:'cubic-bezier(.7,0,.2,1)',
 cap:{pos:'L',h:'MoveMorelia',hc:'xl',gr:true,sub:'Todo el transporte de Morelia, en una sola app.',at:1500},note:film},
{film:1,auto:3900,cls:'tokens',cam:{x:-300,y:-10,m:.92,rx:6,ry:-28},dur:2,
 cap:{pos:'L',h:'Camiones. Taxis. Autos.',hc:'m',at:500},note:film},
{film:1,auto:3700,v:{mq:'Centro Histórico'},type:'mq',typeAt:900,hl:'.s-map .srch',hlAt:600,cam:{x:0,y:-295,m:3,rx:4},dur:1.5,
 cap:{pos:'BC',pane:1,h:'Dices a dónde vas.',hc:'m',at:400},note:film},
{film:1,auto:5600,cls:'rf',enter:()=>E.follow({m:3.1,rx:36,rz0:-8,rz1:6}),
 cap:{pos:'B',pane:1,h:'Te traza la ruta.',hc:'m',at:700},note:film},
{film:1,auto:3900,cls:'route dst',enter:()=>E.busAt(.82),cam:{x:135,y:-185,m:3.6,rx:14},dur:1.4,
 cap:{pos:'BC',pane:1,h:'Y te dice cuándo llega.',hc:'m',at:600},note:film},
{film:1,auto:4600,cls:'route nD nS',enter:()=>E.busAt(.82),cam:{x:0,y:-262,m:2.4,rx:6},dur:1.3,
 cap:{pos:'BC',pane:1,h:'Si viene tarde, te avisa.',hc:'m',at:700},note:film},
{film:1,auto:4600,a:{t:T(0,0,0,360),s:'list',sd:750},v:{mq:''},late:[['explode',1500]],cam:{x:-300,y:70,z:60,m:1.05,rx:10,ry:-34},dur:1.8,
 cap:{pos:'L',h:'Todo lo que tienes cerca.',hc:'m',at:900},note:film},
{film:1,auto:5200,cls:'late',a:{s:'det',sd:1000},late:[['stops',2600]],
 seq:[{c:{x:0,y:28,m:6},d:1,e:PUSH},{c:{x:-230,y:214,m:2.1,rx:14,ry:8},d:1.6,e:LAND,at:1050}],
 cap:{pos:'L',h:'Hasta tu parada.',hc:'m',at:2200},note:film},
{film:1,auto:5000,a:{t:T(0,0,0,720),s:'plan',sd:750},v:{pq:'Tecmilenio'},cls:'typed',late:[['opts',1400],['pick',3000]],
 cam:{x:0,y:-40,z:80,m:.86,rx:4},dur:1.8,cap:{pos:'T',h:'Tú eliges cómo llegar.',hc:'m',at:1500},note:film},
{film:1,auto:4400,a:{t:T(0,0,60,720)},b:TRIO_B,c:TRIO_C,cls:'typed',cam:{x:0,y:150,m:.64},dur:2.4,
 cap:{pos:'CB',eb:'MoveMorelia',h:'Muévete mejor.',gr:true,at:900},note:film},
{film:1,cls:'typed dim',cam:{x:0,y:150,m:.6,ry:8},dur:3,
 cap:{pos:'C',eb:'Proyecto final · Tecmilenio Campus Morelia',h:'Así funciona MoveMorelia.',sub:'Una app para moverte por Morelia en camión, taxi o auto.',names:true},
 note:'Aquí termina el comercial. Adrián pasa al frente y da clic para empezar la presentación.'},

/* ---------- 01 Adrián · apertura y cómo la hicimos ---------- */
{ch:0,a:{t:T(0,0,0,1080),s:'map',sd:750},b:HIDE_B,c:HIDE_C,v:{mq:'',pq:''},gx:300,cam:{x:-560,y:0,m:.95,ry:-14},dur:2,
 cap:{pos:'L',eb:'Quién presenta',h:'El equipo.',hc:'m',team:true},
 note:'Hola, buenos días. Somos el equipo de MoveMorelia y hoy les presentamos la versión final de nuestro proyecto. Yo empiezo con el problema, la idea y cómo la hicimos. María les enseña el mapa y los avisos, Tyson la lista de transportes, Victoria los detalles, el tutorial y el modo fácil, y Santiago el planificador y cómo gana dinero la app. Al final cerramos entre todos.'},
{ch:0,cls:'night ui0 qs',cam:{x:-120,y:60,m:4.2,rx:38,rz:-6},dur:2.4,
 cap:{pos:'L',eb:'El problema',h:'Esperamos sin saber nada.',hc:'m',sub:'No sabes si ya pasó, cuánto falta o si va lleno.'},
 note:'Todos hemos estado en una parada esperando el camión sin saber si ya pasó o cuánto falta. Tampoco sabes qué ruta te deja más cerca, y a veces llega tan lleno que ni te puedes subir. Así perdemos tiempo y llegamos tarde a la escuela o al trabajo.'},
{ch:0,gx:300,cam:SIDE,dur:2.4,
 cap:{pos:'L',eb:'La idea',h:'Uber, pero para el transporte público.',hc:'m',sub:'Camiones, taxis y autos en tiempo real, en una sola app.'},
 note:'Por eso hicimos MoveMorelia. Es como Uber, pero para el transporte público: en una sola app ves camiones, taxis y autos, sabes en cuánto llegan, si tienen lugar y cuánto cuestan.'},
{ch:0,a:{s:'who',sd:500},late:[['whot',2000]],gx:300,cam:{x:-430,y:-20,m:1.12,ry:-10},dur:1.8,
 cap:{pos:'L',eb:'Para quién es',h:'Hecha para ti.',hc:'m',rows:[
  {ic:'school',c:'#5AA9FF',t:'Estudiantes',s:'Su pasaje de estudiante y a qué hora salir para llegar a clase.'},
  {ic:'work',c:'#45E08E',t:'Trabajadores',s:'Llegar a tiempo y saber si su camión viene tarde.'},
  {ic:'aa',c:'#FFC93C',t:'Personas mayores',s:'Un modo fácil con letra grande y la app les lee las instrucciones.'}]},
 note:'La app es para tres tipos de personas. Para estudiantes, que ven su pasaje de estudiante y a qué hora salir para llegar a clase. Para trabajadores, que necesitan llegar a tiempo. Y para personas mayores, con un modo fácil. Por eso, lo primero que te pregunta la app es para qué la vas a usar.'},
{ch:0,cls:'dim',a:{s:'map',sd:900},cam:{x:0,y:-1350,m:.72},dur:2.2,
 cap:{pos:'C',eb:'Cómo la hicimos',h:'Con Design Thinking.',hc:'m',dt:[
  {ic:'eye',t:'Empatizar',s:'Nosotros también lo vivimos todos los días.'},
  {ic:'tgt',t:'Definir',s:'No sabes cuándo llega tu camión ni si va lleno.'},
  {ic:'bulb',t:'Idear',s:'Una app tipo Uber para el transporte público.'},
  {ic:'phn',t:'Prototipar',s:'Hicimos la app con datos de ejemplo.'},
  {ic:'ppl',t:'Probar',s:'La probamos con 5 usuarios reales.',hot:1}]},
 note:'Para hacerla usamos Design Thinking. Primero nos pusimos en el lugar de la gente que usa el camión, porque nosotros también lo vivimos. Luego definimos el problema: no sabes cuándo llega ni si va lleno. Después pensamos ideas, hicimos un prototipo de la app y al final lo probamos con 5 usuarios reales.'},
{ch:0,cls:'late',a:{t:T(0,0,60,1080),s:'det',sd:400},b:{...TRIO_B,s:'plan'},c:{...TRIO_C,s:'tut'},cam:{x:0,y:350,m:.54},dur:2.4,
 cap:{pos:'CB',eb:'Lo probamos con 5 usuarios',h:'Nos pidieron esto. Y lo agregamos.',hc:'m',chk:[
  {t:'Ver precios',s:'Agregado'},{t:'Avisos de retraso',s:'Agregado'},{t:'Un tutorial',s:'Agregado'}]},
 note:'Cuando lo probamos, los usuarios nos dijeron qué le faltaba: querían ver cuánto cuesta cada opción, que la app les avise cuando el camión viene tarde y un tutorial para aprender a usarla. Todo eso lo agregamos a la versión final. Ahora María les enseña cómo funciona.'},

/* ---------- 02 María · mapa y avisos ---------- */
{ch:1,a:{t:T(0,0,0,1440),s:'map',sd:750},b:HIDE_B,c:HIDE_C,v:{mq:''},gx:300,cam:SIDE,dur:1.8,
 cap:CHAP('02','María','Mapa interactivo.','Toda la ciudad en movimiento, en una sola pantalla.'),
 note:'Gracias, Adrián. Yo les voy a enseñar la pantalla principal: el mapa. Es lo primero que ves al abrir la app.'},
{ch:1,v:{mq:'Centro Histórico'},type:'mq',typeAt:1400,hl:'.s-map .srch',cam:Z(-295,{rx:4}),dur:1.6,
 cap:{pos:'L',h:'Escribes a dónde vas.',hc:'m',sub:'Una calle, una plaza o el Centro.'},
 note:'Arriba está el buscador. Ahí escribes a dónde quieres ir, por ejemplo el Centro Histórico.'},
{ch:1,cam:{x:-250,y:40,m:1.55,rx:26},dur:1.8,
 cap:{pos:'L',h:'Cada vehículo, en tiempo real.',hc:'m',sub:'Azul es camión, amarillo es taxi y verde es auto.'},
 note:'En el mapa aparecen todos los vehículos en tiempo real, o sea, ves por dónde van ahorita. Cada transporte tiene su color: azul para camiones, amarillo para taxis y verde para autos. Y con los botones de arriba ves solo el que quieras.'},
{ch:1,cls:'rf',enter:()=>E.follow({fixed:1,x:-230,y:20,m:1.75,rx:28}),
 cap:{pos:'L',h:'Te dibuja la ruta.',hc:'m',sub:'Paso a paso, desde donde estás.',at:600},
 note:'Cuando eliges tu destino, la app te dibuja la ruta. Aquí ven cómo el camión avanza por el camino.'},
{ch:1,cls:'route dst sheet',late:[['avis',1400],['nA',2400]],enter:()=>E.busAt(.82),cam:{x:-215,y:-10,m:1.1,rx:4},dur:1.4,
 cap:{pos:'L',h:'Y te avisa cuándo llega.',hc:'m',sub:'Le das a “Avisarme” y te llega un aviso cuando ya esté cerca.'},
 note:'Si tocas tu camión, te dice cuánto falta y cuánto espacio tiene. Le das a "Avisarme" y la app te manda un aviso cuando ya esté por llegar, así no tienes que esperar tanto en la parada.'},
{ch:1,cls:'route nD nS',enter:()=>E.busAt(.82),cam:Z(-262,{rx:4,m:2.1}),dur:1.5,
 cap:{pos:'L',eb:'Lo que más nos pidieron',h:'Y si viene tarde, también.',hc:'m',sub:'Te dice por qué, cuánto se tarda y te da otra opción.'},
 note:'Esto fue lo que más nos pidieron los usuarios. Si tu camión viene con retraso, por ejemplo por una obra o por tráfico, te llega un aviso con cuántos minutos se tarda. Y te da otra opción, como otra ruta que ya viene llegando. Ahora Tyson les enseña la lista de transportes.'},

/* ---------- 03 Tyson · lista de transportes ---------- */
{ch:2,a:{t:T(0,0,0,1800),s:'list',sd:750},v:{mq:''},gx:300,cam:SIDE,dur:1.8,
 cap:CHAP('03','Tyson','Lista de transportes.','Todo lo que tienes cerca, ordenado y claro.'),
 note:'Gracias, María. Yo les voy a enseñar la segunda pantalla: la lista de transportes que tienes cerca.'},
{ch:2,enter:()=>{const ch=E.PH.a.querySelectorAll('.s-list .chip');let j=0;E.every(()=>{j=(j+1)%4;ch.forEach((c,n)=>c.classList.toggle('on',n===j))},900)},
 cam:{x:-195,y:-229,m:2.3,rx:6},dur:1.6,cap:{pos:'L',h:'Filtras por tipo.',hc:'m',sub:'Todos, camiones, taxis o coches.'},
 note:'Arriba hay filtros para que escojas qué quieres ver: todo, solo camiones, solo taxis o solo coches.'},
{ch:2,hl:'.s-list .pti',hlAt:900,cam:Z(-102,{rx:4}),dur:1.5,
 cap:{pos:'L',eb:'Nuevo',h:'Te dice a qué hora salir.',hc:'m',sub:'Con tu pasaje de estudiante y tu hora de entrada.'},
 note:'Esta tarjeta es nueva. Como le dijiste a la app que eres estudiante, te dice a qué hora salir para llegar a tiempo a la escuela, qué camión tomar y cuánto pagas con pasaje de estudiante. Si eres trabajador, te lo dice para tu hora de entrada al trabajo.'},
{ch:2,cls:'explode',cam:{x:-330,y:130,z:90,m:1.05,rx:10,ry:-34},dur:1.8,
 cap:{pos:'L',h:'Cada tarjeta lo dice todo.',hc:'m',sub:'Ruta, tiempo de llegada y lugares libres.'},
 note:'Cada tarjeta te dice la ruta, en cuánto tiempo llega y cuántos lugares tiene libres.'},
{ch:2,cls:'explode',cam:{x:-170,y:28,z:60,m:2.3,rx:4,ry:-16},dur:1.6,
 cap:{pos:'L',h:'Los minutos bajan en vivo.',hc:'m',sub:'Y la barra te dice cuánto espacio queda.'},
 note:'Fíjense en los minutos: van bajando en vivo. Y la barrita de abajo te dice cuánto espacio le queda.'},
{ch:2,cls:'tap',cam:{x:-300,y:60,m:1.3},dur:1.6,cap:{pos:'L',h:'Un toque y ves los detalles.',hc:'m'},
 note:'Si le picas a uno, te lleva a ver todos sus detalles. Eso se los explica Victoria.'},

/* ---------- 04 Victoria · detalles, tutorial y modo fácil ---------- */
{ch:3,a:{s:'det',sd:1000},gx:300,seq:[{c:{x:0,y:28,m:6},d:1,e:PUSH},{c:SIDE,d:1.6,e:LAND,at:1050}],
 cap:{...CHAP('04','Victoria','Detalles del vehículo.','Sabes qué esperar antes de que llegue.'),at:1600},
 note:'Gracias, Tyson. Cuando le picas a un vehículo se abre esta pantalla de detalles.'},
{ch:3,cam:Z(-244,{rx:4}),dur:1.6,cap:{pos:'L',h:'Su estado, en vivo.',hc:'m',sub:'En camino, llegando o con retraso.'},
 note:'Arriba ves el camión y su estado: si va en camino, si ya está llegando o si viene con retraso.'},
{ch:3,cls:'late',cam:Z(-34,{rx:4,m:2.05}),dur:1.5,
 cap:{pos:'L',h:'Cuánto falta y cuánto espacio hay.',hc:'m',sub:'Y si viene tarde, te dice por qué y cuándo pasa el siguiente.'},
 note:'Aquí dice cuánto falta para que llegue a tu parada y cuántos lugares libres tiene. Si viene tarde, te dice por qué, por ejemplo una obra, y en cuánto pasa el siguiente camión.'},
{ch:3,cls:'late',late:[['stops',600]],cam:{x:-210,y:214,m:2,rx:14,ry:8},dur:1.6,
 cap:{pos:'L',h:'Todas las paradas.',hc:'m',sub:'Con la tuya marcada, para que no te pases.'},
 note:'Y aquí están las paradas de la ruta, con la tuya marcada. Vean cómo el camión avanza hasta tu parada.'},
{ch:3,a:{s:'tut',sd:600},gx:300,enter:()=>E.tutPages(2600),cam:{x:-430,y:-20,m:1.12,ry:-10},dur:1.8,
 cap:{pos:'L',eb:'Lo pidieron los usuarios',h:'Un tutorial al abrirla.',hc:'m',sub:'Seis pasos cortos para aprender a usarla.'},
 note:'La primera vez que abres la app te sale un tutorial. En seis pasos cortos te explica el mapa, cómo buscar, cómo comparar y cómo funcionan los avisos. Esto lo pidieron los usuarios, porque al principio no sabían por dónde empezar.'},
{ch:3,a:{t:T(0,0,0,2160),s:'easy',sd:700},late:[['voice',2300]],gx:300,cam:{x:-430,y:-20,m:1.12,ry:-10},dur:1.8,
 cap:{pos:'L',eb:'Para personas mayores',h:'Y un modo fácil.',hc:'m',sub:'Letra grande, botones sencillos y te lee las instrucciones en voz alta.'},
 note:'Y para las personas mayores hicimos el modo fácil. Las letras se hacen más grandes, los botones son más sencillos, como "A la escuela" o "A mi casa", y la app te lee las instrucciones en voz alta. Ahora Santiago les enseña el planificador.'},

/* ---------- 05 Santiago · planificador y modelo de negocio ---------- */
{ch:4,a:{t:T(0,0,0,2520),s:'plan',sd:750},v:{pq:''},gx:300,cam:SIDE,dur:1.8,
 cap:CHAP('05','Santiago','Planificador de rutas.','Dices a dónde vas. La app te dice cómo llegar.'),
 note:'Gracias, Victoria. Yo les voy a presentar el planificador de rutas y después cómo puede ganar dinero la app.'},
{ch:4,v:{pq:'Tecmilenio'},type:'pq',typeAt:1300,late:[['typed',2500]],cam:Z(-250,{rx:4}),dur:1.6,
 cap:{pos:'L',h:'De dónde sales y a dónde vas.',hc:'m'},
 note:'Primero pones de dónde sales y a dónde vas, por ejemplo a Tecmilenio.'},
{ch:4,cls:'typed opts',cam:{x:0,y:-40,z:80,m:.86,rx:4},dur:1.8,cap:{pos:'T',h:'Comparas camión, taxi o coche. Con precio.',hc:'m'},
 note:'La app te enseña las opciones. De cada una ves cuánto tardas, a qué hora llegas y, ahora también, cuánto cuesta. Por ejemplo, el camión te sale en 6 pesos con pasaje de estudiante y el taxi en 64, pero el taxi es más rápido.'},
{ch:4,cls:'typed opts',late:[['pick',900]],cam:{x:-510,y:13,z:160,m:1.9,ry:10},dur:1.6,
 cap:{pos:'L',h:'Y tú eliges.',hc:'m',sub:'Seleccionas una opción y la app te guía paso a paso.'},
 note:'Al final tú eliges la que más te conviene y la app te dice el camino paso a paso. La idea es que si eliges taxi o auto, lo pidas y lo pagues ahí mismo, como en Uber.'},
{ch:4,a:{t:T(0,0,60,2520),s:'map',sd:400},b:{...TRIO_B,s:'list'},c:{...TRIO_C,s:'plan'},cls:'typed',cam:{x:0,y:400,m:.54},dur:2.4,
 cap:{pos:'CB',k:'low',eb:'Modelo de negocio · como Uber',ben:[
  {k:'Comisión',t:'En taxis y autos',s:'Pagas tu viaje desde la app y MoveMorelia se queda con una parte.',c:'#5AA9FF'},
  {k:'$29 al mes',t:'MoveMorelia Premium',s:'Como Uber One: sin anuncios, alertas extra y descuentos en taxis y autos.',c:'#FFC93C'},
  {k:'Anuncios',t:'Negocios locales',s:'Los negocios de Morelia se anuncian en la app.',c:'#45E08E'}],
  sub2:'Ver los camiones siempre es gratis: el pasaje se lo pagas al chofer.',sub2i:'bus'},
 note:'¿Y cómo gana dinero la app? Funciona como Uber. Ver dónde vienen los camiones siempre es gratis, porque el pasaje se lo pagas al chofer. Pero cuando pides un taxi o un auto desde la app, pagas tu viaje y MoveMorelia se queda con una comisión. Si la usas mucho, está MoveMorelia Premium por 29 pesos al mes, como Uber One: sin anuncios, con alertas extra y descuentos en taxis y autos. Y los negocios locales también se pueden anunciar en la app.'},
{ch:4,a:{t:T(0,0,0,2520)},b:HIDE_B,c:HIDE_C,cls:'night ui0',gx:300,cam:{x:-470,y:-40,m:1.05,rx:8,ry:-16},dur:2,
 cap:{pos:'L',eb:'Para hacerla real',h:'Lo que cuesta.',hc:'m',cost:[
  {ic:'code',t:'Equipo de programación',s:'Para terminar la app y mantenerla.'},
  {ic:'gps',t:'GPS en los camiones',s:'Para saber dónde va cada uno.'},
  {ic:'srv',t:'Servidor',s:'Donde se guarda la información.'},
  {ic:'meg',t:'Publicidad',s:'Para que la gente la conozca.'}],
  sub2:'Por eso trabajaríamos con las autoridades de movilidad y los concesionarios.'},
 note:'Para hacerla real, los costos principales son el equipo de programación, el GPS que va en cada camión, el servidor donde se guarda la información y la publicidad para que la gente la conozca. Por eso trabajaríamos junto con las autoridades de movilidad y los concesionarios de los camiones.'},

/* ---------- 06 Cierre · entre todos ---------- */
{ch:5,who:'Victoria',part:'ODS 11',cls:'night ui0',a:{t:T(0,0,0,2520),s:'map'},gx:300,cam:{x:-330,y:60,m:2.6,rx:40,rz:-8},dur:2.4,
 cap:{pos:'L',eb:'Objetivo de Desarrollo Sostenible',ods:{t:'Ciudades y comunidades sostenibles',s:'Meta 11.2: transporte seguro, accesible y para todos.'},
  fut:['Más gente usa el camión y menos el coche.','Menos tiempo esperando en la parada.','La pueden usar todos, también las personas mayores.']},
 note:'Nuestro proyecto va con el Objetivo de Desarrollo Sostenible número 11: Ciudades y comunidades sostenibles. Una de sus metas es que todos tengan transporte seguro y accesible, sobre todo las personas mayores. MoveMorelia ayuda porque hace más fácil usar el camión, así más gente lo usa en lugar del coche, y con el modo fácil la puede usar cualquiera.'},
{ch:5,who:'Tyson',part:'Pruébala',a:{t:T(0,1500,-600,2520,-40),o:0},cls:'tri',gx:300,cam:{x:0,y:0,m:1},dur:2,
 enter:()=>{let f=0;E.every(()=>{f=1-f;E.ST.classList.toggle('triflip',!!f)},4200)},
 cap:{pos:'L',eb:'Pruébala tú',h:'Escanea y úsala.',hc:'m',qr:{u:'adriangtzgnz-del.github.io<br>/movemorelia',s:'Se abre en el celular, sin descargar nada. Es el mismo código de nuestro tríptico.'}},
 note:'Ahora ustedes la pueden probar. Escaneen este código con la cámara del celular y se abre la app, sin descargar nada. Es el mismo código que viene en el tríptico que hicimos, que por un lado explica el problema y por dentro cómo se usa.'},
{ch:5,who:'María',part:'Lo que sigue',a:{t:T(0,0,60,2880),o:1,s:'map'},b:{...TRIO_B,s:'list'},c:{...TRIO_C,s:'plan'},cls:'typed dim',cam:{x:-300,y:150,m:.66,ry:-12},dur:2.2,
 cap:{pos:'L',eb:'Lo que sigue',h:'La siguiente parada.',hc:'m',fut:['Pagar el pasaje desde la app, con QR o tarjeta.','Reportes de la comunidad: tráfico y retrasos.','GPS real en los camiones, con las autoridades.','Publicarla en App Store y Google Play.']},
 note:'Esto es lo que nos gustaría hacer después: pagar el pasaje desde la app con QR o tarjeta, que la gente reporte tráfico y retrasos, poner GPS real en los camiones junto con las autoridades y publicarla en App Store y Google Play.'},
{ch:5,who:'Adrián',part:'¡Gracias!',cls:'typed qrm',cam:{x:0,y:330,m:.56},dur:2.4,
 cap:{pos:'CB',h:'Muévete mejor.',gr:true,sub:'¡Gracias! ¿Preguntas?',names:true},
 note:'Y eso es MoveMorelia: una app para que moverte en Morelia sea más fácil, más rápido y más tranquilo, para todos. Muchas gracias por escucharnos. ¿Tienen alguna pregunta? (Pasen todos al frente.)'}
];
E.start(steps);
})();
