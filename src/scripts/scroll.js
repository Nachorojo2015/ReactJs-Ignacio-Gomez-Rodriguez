window.addEventListener('scroll',()=>{
    let header = document.querySelector('header')
    header.classList.toggle('abajo', window.scrollY>300)
})