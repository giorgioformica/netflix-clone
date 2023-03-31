window.onload= (event)=>{
    const sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.transitionDelay = 0.5 *  i;   
    }
sections.forEach(section => section.style.opacity = 1)
}
function callSearchBox()  {
    document.querySelector('.searchBar').id = 'searchNow'
}
function closeSearchBox() {
    document.querySelector('.searchBar').removeAttribute('id') 
}