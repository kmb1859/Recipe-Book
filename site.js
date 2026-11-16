const search=document.querySelector("#recipe-search");
const cards=[...document.querySelectorAll(".recipe-card")];
const filters=[...document.querySelectorAll(".filter")];
let active="all";
function update(){const term=(search?.value||"").trim().toLowerCase();let shown=0;for(const card of cards){const matchesText=card.textContent.toLowerCase().includes(term);const categories=(card.dataset.category||"").split(/\s+/);const matchesCategory=active==="all"||categories.includes(active);const visible=matchesText&&matchesCategory;card.hidden=!visible;if(visible)shown++;}let empty=document.querySelector(".empty");if(!shown){if(!empty){empty=document.createElement("p");empty.className="empty";empty.textContent="No recipes found. Try another search.";document.querySelector("#recipe-list")?.after(empty);}}else if(empty)empty.remove();}
search?.addEventListener("input",update);
filters.forEach(button=>button.addEventListener("click",()=>{active=button.dataset.filter||"all";filters.forEach(item=>{const selected=item===button;item.classList.toggle("active",selected);item.setAttribute("aria-pressed",String(selected));});update();}));
filters.forEach(button=>button.setAttribute("aria-pressed",String(button.classList.contains("active"))));
