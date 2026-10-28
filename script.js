'use strict';
// Opcional: coloca tu número comercial con código de país y sin '+' ni espacios, por ejemplo 5939XXXXXXXX.
// Si se deja vacío, se ofrece copiar la solicitud y abrir TikTok.
const CONFIG = { whatsapp: '' };

const products = [
  {cat:'regalos', name:'Carta romántica con QR', badge:'MÁS EMOTIVO', price:15, icon:'♥', art:'love', description:'Una carta que cobra vida con dedicatoria, recuerdos y una sorpresa final.', details:'Muestra interactiva disponible. El diseño final se personaliza según el paquete elegido.', demo:'demos/carta-romantica.html', service:'Regalo digital con QR'},
  {cat:'regalos', name:'Regalo de cumpleaños', badge:'PARA SORPRENDER', price:20, icon:'✳', art:'birthday', description:'Una felicitación animada con fotos, mensajes y un toque único.', details:'Podemos adaptar textos, imágenes y estilo visual según lo acordado.', service:'Regalo digital con QR'},
  {cat:'eventos', name:'Invitación digital', badge:'MOMENTOS ESPECIALES', price:35, icon:'✉', art:'invitation', description:'Invitaciones para bodas, cumpleaños y eventos, diseñadas para compartir.', details:'Incluye el diseño acordado; mapas, confirmaciones y funcionalidades avanzadas se cotizan aparte.', demo:'demos/invitacion.html', service:'Invitación digital'},
  {cat:'web', name:'Página web profesional', badge:'PARA TU NEGOCIO', price:180, icon:'⌘', art:'website', description:'Una presencia digital moderna, adaptable y orientada a tus clientes.', details:'Landing page inicial. Dominio, integraciones especiales y mantenimiento son opcionales.', service:'Página web para negocio'},
  {cat:'web', name:'Menú digital con QR', badge:'RESTAURANTES', price:50, icon:'▦', art:'menu', description:'Muestra categorías, productos y precios desde cualquier celular.', details:'La cantidad de productos y la frecuencia de actualizaciones dependen del plan.', service:'Menú o tarjeta con QR'},
  {cat:'web', name:'Tarjeta digital QR', badge:'PRESENTACIÓN', price:20, icon:'◈', art:'business', description:'Tu contacto, enlaces y redes profesionales en un solo lugar.', details:'Enlace digital con QR. La impresión física no está incluida.', service:'Menú o tarjeta con QR'},
  {cat:'web', name:'Tienda online o catálogo', badge:'CRECE EN INTERNET', price:300, icon:'▤', art:'store', description:'Presenta y organiza tus productos con una experiencia comercial a medida.', details:'Precio referencial para un catálogo básico. Carrito, pagos, inventario y envíos se cotizan según necesidades.', service:'Tienda online o catálogo'},
  {cat:'diseno', name:'Identidad y piezas digitales', badge:'DISEÑO CREATIVO', price:40, icon:'✦', art:'design', description:'Piezas visuales para redes, anuncios y marcas que quieren destacar.', details:'Precio de referencia para un paquete inicial; el alcance se define antes de contratar.', service:'Diseño digital'}
];

const grid = document.getElementById('productGrid');
let selectedFilter='todos';
function renderProducts(filter='todos'){
  selectedFilter=filter;
  const filtered=products.map((p,index)=>({...p,index})).filter(p=>filter==='todos'||p.cat===filter);
  grid.innerHTML = filtered.map(p => `
    <article class="catalog-card">
      <div class="catalog-art art-${p.art}"><div class="art-orbit" aria-hidden="true"></div><div class="art-device" aria-hidden="true"><span>${p.icon}</span><small>${p.badge}</small></div><div class="art-badge">✦ Mundo Digital</div></div>
      <div class="catalog-body"><span class="catalog-tag">${p.badge}</span><h3>${p.name}</h3><p>${p.description}</p><div class="catalog-bottom"><div class="catalog-price"><small>Desde</small><strong>$${p.price}</strong></div><button class="catalog-preview" type="button" data-product="${p.index}" aria-label="Ver detalles de ${p.name}">Ver detalles ↗</button></div></div>
    </article>`).join('');
}
function applyFilter(filter){
  document.querySelectorAll('.filter-button').forEach(btn=>{const active=btn.dataset.filter===filter;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});
  renderProducts(filter);
}
renderProducts();
document.querySelectorAll('.filter-button').forEach(btn=>btn.addEventListener('click',()=>applyFilter(btn.dataset.filter)));
document.querySelectorAll('[data-goto-filter]').forEach(link=>link.addEventListener('click',()=>applyFilter(link.dataset.gotoFilter)));

function setRequestedService(p){
  document.getElementById('serviceSelect').value=p.service;
  document.getElementById('projectMessage').value=`Me interesa: ${p.name}. Me gustaría conocer las opciones de personalización y el precio final.`;
}
const productDialog=document.getElementById('productDialog');
const dialogContent=document.getElementById('dialogContent');
let dialogButton;
grid.addEventListener('click',event=>{
  const btn=event.target.closest('[data-product]');if(!btn)return;
  const p=products[Number(btn.dataset.product)];dialogButton=btn;
  dialogContent.replaceChildren();
  const top=document.createElement('div');top.className='dialog-display';
  const big=document.createElement('span');big.textContent=p.icon;top.append(big);
  const badge=document.createElement('p');badge.className='section-kicker';badge.textContent=p.badge;
  const heading=document.createElement('h2');heading.id='dialogTitle';heading.textContent=p.name;
  const description=document.createElement('p');description.textContent=p.details;
  const bottom=document.createElement('div');bottom.className='dialog-actions';
  const price=document.createElement('strong');price.textContent=`Desde $${p.price}`;bottom.append(price);
  if(p.demo){const demo=document.createElement('a');demo.className='btn btn-outline';demo.href=p.demo;demo.textContent='Probar demo ↗';bottom.append(demo);}
  const request=document.createElement('a');request.className='btn btn-primary';request.href='#contacto';request.textContent='Quiero cotizar ↗';request.addEventListener('click',()=>{setRequestedService(p);productDialog.close();});bottom.append(request);
  dialogContent.append(top,badge,heading,description,bottom);
  productDialog.showModal();
});
document.getElementById('dialogClose').addEventListener('click',()=>productDialog.close());
productDialog.addEventListener('click',e=>{if(e.target===productDialog)productDialog.close()});
productDialog.addEventListener('close',()=>dialogButton?.focus());
const qrDialog=document.getElementById('qrDialog');
document.getElementById('qrButton').addEventListener('click',()=>qrDialog.showModal());
document.getElementById('qrClose').addEventListener('click',()=>qrDialog.close());
qrDialog.addEventListener('click',e=>{if(e.target===qrDialog)qrDialog.close()});

const navButton=document.getElementById('menuButton');const navItems=document.getElementById('navItems');
function closeMenu(){navButton.setAttribute('aria-expanded','false');navButton.setAttribute('aria-label','Abrir menú');navItems.classList.remove('open');}
navButton.addEventListener('click',()=>{const open=navItems.classList.toggle('open');navButton.setAttribute('aria-expanded',String(open));navButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});
navItems.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit',event=>{
  event.preventDefault();
  const name=document.getElementById('clientName').value.trim();
  const service=document.getElementById('serviceSelect').value;
  const idea=document.getElementById('projectMessage').value.trim();
  if(!name||!service||!idea)return;
  const text=`¡Hola, Mundo Digital! 🌐\nMi nombre es: ${name}\nMe interesa: ${service}\nMi idea: ${idea}\n¿Podrían enviarme una cotización?`;
  document.getElementById('preparedMessage').value=text;
  const result=document.getElementById('contactResult');result.hidden=false;
  const whatsApp=document.getElementById('whatsAppLink');
  if(/^\d{10,15}$/.test(CONFIG.whatsapp)){
    whatsApp.href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
    whatsApp.hidden=false;
    document.getElementById('contactSetupNote').textContent='Puedes enviar tu mensaje por WhatsApp o copiarlo para enviarlo por TikTok.';
  }else{
    whatsApp.hidden=true;
    document.getElementById('contactSetupNote').textContent='Copia el texto y envíanoslo por DM en TikTok. Aún no hay WhatsApp comercial configurado.';
  }
  result.scrollIntoView({behavior:'smooth',block:'nearest'});
});
document.getElementById('copyMessage').addEventListener('click',async function(){
  const val=document.getElementById('preparedMessage').value;
  try{await navigator.clipboard.writeText(val);this.textContent='✓ ¡Copiado!';}
  catch{const field=document.getElementById('preparedMessage');field.focus();field.select();this.textContent='Texto seleccionado: copia ahora';}
});
