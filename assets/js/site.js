const button=document.querySelector('.menu-toggle');
const menu=document.querySelector('#primary-navigation');
if(button&&menu){
 const closeMenu=()=>{menu.classList.remove('open');button.setAttribute('aria-expanded','false');button.textContent='Menu ☰';};
 button.addEventListener('click',()=>{const open=menu.classList.toggle('open');button.setAttribute('aria-expanded',String(open));button.textContent=open?'Close ✕':'Menu ☰';});
 menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();menu.querySelectorAll('details[open]').forEach(d=>d.open=false);}});
 document.addEventListener('click',e=>{menu.querySelectorAll('details[open]').forEach(d=>{if(!d.contains(e.target))d.open=false;});});
}
