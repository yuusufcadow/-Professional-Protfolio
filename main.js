/*----NAVBAR------*/
let menuIcon = decument.querySelector("#menu-icon")
let navbar = decument.querySelectorAll('.navbar')

menuIcon.addEventListener('click',  () =>{
    menuIcon.classList.toggle("ri-close-large-line")
    navbar.classList.toggle('Active')
})


//Active link
let sections = decodeURIComponent.querySelectorAll("section")
let navlinks = decument.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            navlinks.forEach(link =>{
                link.classList.remove('Active');
                decument.querySelector('header nav a[href*=' + id + ']').classList.add("Active")
            })
        }
    })
    //sticky navbar
    let header = decument.querySelector('header')
    header.classList.toggle('sticky', window.screenY > 100)
}
//remove toggle icon and navbar when click navbar link(scroll)
menuIcon.classList.toggle("ri-close-large-line")
navbar.classList.toggle('Active')
/*----SHOW SCROLL UP------*/
const scrollUp =() =>{
    const scrollUp = document.getElementById("scroll-up")

    this.scrollY >= 350 ?  scrollUp. classList.add("show-scroll")  :scrollUp. classList.remove("show-scroll")
}
window.addEventListener('scroll', scrollUp)
/*----ANIMATION------*/
const sr = scrollReveal({
    reset:true,
    distance:"80px",
    duration:2000,
    delay:200,
})

sr.reveal(".home-content, .heading", {origin: 'top'});
sr.reveal(".home-img, .heading", {origin: 'right'});
/*----TYPED JS------*/
const typedhome =new Typed(".multiple-text",{
    strings:['Fronted devoloper','Multimedia','Editer','قارء'],
    Typespeed:100,
    backspeed:100,
    backDelay:1000,
    loop:true
})