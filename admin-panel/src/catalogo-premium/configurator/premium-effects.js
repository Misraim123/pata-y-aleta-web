window.addEventListener("DOMContentLoaded",()=>{

const hero=document.getElementById("heroImage");

if(!hero)return;

const original=hero.src;

hero.classList.add("show");

document.querySelectorAll(".premium-item").forEach(item=>{

item.addEventListener("mouseenter",()=>{

const img=item.dataset.image;

if(!img)return;

hero.classList.remove("show");

hero.classList.add("loading");

setTimeout(()=>{

hero.src=img;

},250);

});

});

hero.onload=()=>{

hero.classList.remove("loading");

hero.classList.add("show");

};

});