// função rolagem menu fixo com background
window.addEventListener("scroll", function(){

    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

//função menu lateral

let menuItem = document.querySelectorAll('.item-menu')

function selectMenu() {
    menuItem.forEach((item) =>
    item.classList.remove('ativo')

    )
    this.classList.add('ativo')
}
// evento de click da função acima
menuItem.forEach((item)=>
    item.addEventListener('click', selectMenu)
)

//evento open/close menu lateral

let btnExpMenu = document.querySelector('#btn-menu');
let menuSide = document.querySelector('.nav-cont');

btnExpMenu.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

//função préLoandig HomePage
function loading(){
    document.getElementsByClassName("preloand")[0].style.display = "none";
    document.getElementsByClassName('bodyContent')[0].style.display = "block";
}


function setupCarousel(wrapper) {
  const controls = wrapper.querySelectorAll(".control, .contole, .control-1, .controle-001");
  let currentItem = 0;
  const items = wrapper.querySelectorAll(".itemImg, .itemImg1, .itemImg2, .itemImg3");
  const maxItems = items.length;

  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      isLeft = e.target.classList.contains("arrow-left");

      if (isLeft) {
        currentItem = (currentItem - 1 + maxItems) % maxItems;
      } else {
        currentItem = (currentItem + 1) % maxItems;
      }

      items.forEach((item) => item.classList.remove("currentItem"));

      items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });

      items[currentItem].classList.add("currentItem");
    });
  });
}

// Aplicar a função de configuração para cada carrossel
const carousels = document.querySelectorAll(".slideCarrossel");
carousels.forEach((carousel) => {
  setupCarousel(carousel);
});






/*função carrousel 
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".itemImg");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
        currentItem = 0;
      }
  
      if (currentItem < 0) {
        currentItem = maxItems -1;
      }

    items.forEach((item) => item.classList.remove("currentItem"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    items[currentItem].classList.add("currentItem");
  });
});*/



