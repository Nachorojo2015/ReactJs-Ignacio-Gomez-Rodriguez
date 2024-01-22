window.addEventListener('scroll',()=>{
    let header = document.querySelector('header')
    header.classList.toggle('scroll', window.scrollY>300)
})