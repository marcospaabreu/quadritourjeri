const tours = [
 {title:'Tatajuba',region:'Lado Oeste',filter:'oeste',image:'restauradas/tatajuba.png',short:'Dunas e lagoas para deixar a rotina bem longe.',description:'Descubra Tatajuba em um passeio pelo Lado Oeste. Converse com a equipe para conhecer as paradas, os veículos disponíveis e montar o seu dia.'},
 {title:'Lagoas Azul e Paraíso',region:'Lado Leste',filter:'leste',image:'lagoaazul1.jpg',short:'Uma pausa entre águas claras e dias de sol.',description:'Conheça as Lagoas Azul e Paraíso em um roteiro pelo Lado Leste. Consulte as paradas, eventuais taxas de acesso e os horários com a equipe.'},
 {title:'Barrinha',region:'Extremo Leste',filter:'leste',image:'barrinha.jpg',short:'Novos horizontes pelo Extremo Leste de Jeri.',description:'Explore o Extremo Leste no passeio para Barrinha. A equipe ajuda você a confirmar o trajeto e escolher a melhor opção para a sua viagem.'},
 {title:'Lagoas e Barrinha',region:'Lado Leste',filter:'leste',image:'lagoaazul2.jpg',short:'Azul, Paraíso e Barrinha em um mesmo roteiro.',description:'Uma opção que reúne Lagoa Azul, Lagoa do Paraíso e Barrinha. Fale com a equipe para saber mais sobre o percurso e as condições do passeio.'},
 {title:'Mangue Seco',region:'Lado Oeste',filter:'oeste',image:'mangueseco.jpg',short:'Um encontro com outros cenários do litoral.',description:'Conheça Mangue Seco no Lado Oeste de Jericoacoara. Consulte a equipe sobre o roteiro, as paradas e as opções disponíveis.'},
 {title:'Passeio de buggy',region:'Mais aventuras',filter:'aventura',image:'buggy.jpg',short:'Areia, horizonte e vontade de ir mais longe.',description:'Conheça Jeri em um passeio de buggy. Combine com a equipe a região que deseja visitar e confirme capacidade, horários e valores.'},
 {title:'Ilha do Amor',region:'Mais aventuras',filter:'aventura',image:'ilhadoamor.jpg',short:'Um destino a mais para a sua coleção de memórias.',description:'Inclua a Ilha do Amor na sua viagem. Fale com a QuadriTour Jeri para consultar o trajeto, horários e disponibilidade.'},
 {title:'Passeio de 1 hora',region:'Mais aventuras',filter:'aventura',image:'passeio1hora.jpg',short:'Uma dose de aventura para encaixar no seu dia.',description:'Uma opção de passeio de uma hora para quem quer incluir uma experiência no dia. Confirme o veículo, percurso e condições com a equipe.'},
 {title:'Passeio de UTV',region:'Mais aventuras',filter:'aventura',image:'utv2.jpg',short:'Seu próximo caminho a bordo de um UTV.',description:'Consulte as opções de passeio de UTV em Jericoacoara. A equipe informa os percursos disponíveis, capacidade e condições para a data desejada.'},
 {title:'Litoral Oeste',region:'Lado Oeste',filter:'oeste',image:'restauradas/passeiojeri.png',short:'A paisagem muda. A vontade de explorar, não.',description:'Explore o Litoral Oeste de Jeri. Entre em contato para saber os pontos visitados e combinar a opção de passeio para você.'},
 {title:'Passeio de jardineira',region:'Mais aventuras',filter:'aventura',image:'jardineira.jpg',short:'Descobertas que ficam melhores em companhia.',description:'Consulte os passeios de jardineira e descubra as opções de trajetos, horários e disponibilidade com a equipe.'},
 {title:'Fortaleza → Jeri via praia',region:'Transfer',filter:'transfer',image:'hilux1.jpg',short:'A viagem já começa fazendo parte da história.',description:'Transfer entre Fortaleza e Jericoacoara via praia. Consulte disponibilidade, duração, pontos de embarque e condições do trajeto.'},
 {title:'Transfer 4x4 via asfalto',region:'Transfer',filter:'transfer',image:'restauradas/hilux2.png',short:'Fortaleza e Jericoacoara. Ida e volta combinadas.',description:'Transfer 4x4 entre Fortaleza e Jericoacoara via asfalto, com opção de ida e volta. Combine datas, pontos de saída e valores com a equipe.'}
];
const grid=document.querySelector('#tour-grid'),more=document.querySelector('#show-more');
let activeFilter='todos',expanded=false;
const whatsapp=(message)=>'https://wa.me/5588997520086?text='+encodeURIComponent(message);
function renderTours(){
 const filtered=tours.filter(t=>activeFilter==='todos'||t.filter===activeFilter);
 const visible=activeFilter==='todos'&&!expanded?filtered.slice(0,6):filtered;
 grid.innerHTML=visible.map(t=>`<article class="tour-card"><button class="tour-image" data-tour="${tours.indexOf(t)}" aria-label="Ver detalhes: ${t.title}"><img src="assets/${t.image}" alt="${t.title}, passeio da QuadriTour Jeri" loading="lazy"><span class="tour-tag">${t.region}</span></button><div class="tour-caption"><h3>${t.title}</h3><p>${t.short}</p><button class="tour-link" data-tour="${tours.indexOf(t)}">Conhecer o passeio</button></div></article>`).join('');
 more.hidden=activeFilter!=='todos';more.setAttribute('aria-expanded',String(expanded));more.innerHTML=expanded?'Mostrar menos <span aria-hidden="true">−</span>':'Ver todos os passeios <span aria-hidden="true">+</span>';
 document.querySelector('#tour-count').textContent=`${visible.length} de ${filtered.length} passeios exibidos.`;
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 activeFilter=button.dataset.filter;expanded=false;
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderTours();
}));
more.addEventListener('click',()=>{expanded=!expanded;renderTours();if(!expanded) document.querySelector('#passeios').scrollIntoView({behavior:'instant'});});
renderTours();
const menu=document.querySelector('.menu-toggle'),navigation=document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navigation.classList.contains('open')){closeMenu();menu.focus();}});
const tourDialog=document.querySelector('#tour-dialog');
function openDialog(dialog){dialog.showModal();document.body.classList.add('modal-open');}
grid.addEventListener('click',event=>{
 const button=event.target.closest('[data-tour]');if(!button)return;const tour=tours[Number(button.dataset.tour)];
 document.querySelector('#detail-image').src='assets/'+tour.image;document.querySelector('#detail-image').alt=tour.title;
 document.querySelector('#detail-region').textContent=tour.region;document.querySelector('#detail-title').textContent=tour.title;
 document.querySelector('#detail-description').textContent=tour.description;
 document.querySelector('#detail-whatsapp').href=whatsapp(`Olá, QuadriTour Jeri! Quero saber mais sobre ${tour.title}. Podem me informar valores e disponibilidade?`);openDialog(tourDialog);
});
const photoDialog=document.querySelector('#photo-dialog');
document.querySelectorAll('.memory').forEach(button=>button.addEventListener('click',()=>{photoDialog.querySelector('img').src=button.dataset.image;photoDialog.querySelector('img').alt=button.querySelector('img').alt;photoDialog.querySelector('p').textContent=button.querySelector('span').textContent;openDialog(photoDialog);}));
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));});
const select=document.querySelector('#tour');tours.forEach(t=>select.add(new Option(t.title,t.title)));
const now=new Date();document.querySelector('#year').textContent=now.getFullYear();
document.querySelector('#date').min=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
document.querySelector('#booking-form').addEventListener('submit',event=>{
 event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;
 const name=form.elements.name.value.trim();if(!name){form.elements.name.setCustomValidity('Informe seu nome.');form.elements.name.reportValidity();return;}
 const date=form.elements.date.value;const formatted=date?date.split('-').reverse().join('/'):'Ainda não defini a data';
 const message=`Olá, QuadriTour Jeri! Meu nome é ${name}.\nQuero planejar um passeio!\nRoteiro: ${form.elements.tour.value}\nData: ${formatted}\nPessoas: ${form.elements.people.value}\nPodem me informar valores e disponibilidade?`;
 window.open(whatsapp(message),'_blank','noopener,noreferrer');
});
document.querySelector('#name').addEventListener('input',event=>event.target.setCustomValidity(''));

// Delegate touch feedback so filtered tour cards behave like the other photos.
const photoMotionSelector = '.postcard,.tiny-postcard,.about-main,.about-small,.memory,.tour-image';
const photoTouchPointers = new Map();
const photoTouchTimers = new WeakMap();
document.addEventListener('pointerdown', event => {
  if (event.pointerType === 'mouse') return;
  const photo = event.target.closest(photoMotionSelector);
  if (!photo) return;
  clearTimeout(photoTouchTimers.get(photo));
  photo.classList.add('photo-touch');
  photoTouchPointers.set(event.pointerId, photo);
}, { passive: true });
function releasePhotoTouch(event) {
  const photo = photoTouchPointers.get(event.pointerId);
  if (!photo) return;
  photoTouchPointers.delete(event.pointerId);
  if ([...photoTouchPointers.values()].includes(photo)) return;
  clearTimeout(photoTouchTimers.get(photo));
  if (event.type === 'pointercancel') photo.classList.remove('photo-touch');
  else photoTouchTimers.set(photo, setTimeout(() => photo.classList.remove('photo-touch'), 220));
}
document.addEventListener('pointerup', releasePhotoTouch, { passive: true });
document.addEventListener('pointercancel', releasePhotoTouch, { passive: true });
window.addEventListener('blur', () => {
  document.querySelectorAll('.photo-touch').forEach(photo => {
    clearTimeout(photoTouchTimers.get(photo));
    photo.classList.remove('photo-touch');
  });
  photoTouchPointers.clear();
});
