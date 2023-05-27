// função rolagem menu fixo com background
window.addEventListener("scroll", function(){

    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

// função Mostrar/ocultar senha
let passShow = document.getElementById('senha')
let iconShow = document.getElementById('iconEye')

iconShow.addEventListener('click', () => {

    
  if(passShow.type === "password"){
    passShow.type = "text";
    iconShow.classList.replace("bi-eye", "bi-eye-slash")
  }
  else{
    passShow.type = "password";
    iconShow.classList.replace("bi-eye-slash", "bi-eye")
}
})

