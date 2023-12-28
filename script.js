alert("helloworld")
let hamburger = document.querySelector('.hamburger')
let nav = document.querySelector('.navlinks')
let navlinks = document.querySelectorAll('.navlinks li')
let links = document.querySelectorAll('.navlinks li a')


let navbar = document.querySelector('.navbar')
let home = document.getElementById('home')
let about = document.getElementById("about")
let skill = document.getElementById("skills")
let project = document.getElementById("projects")
let contact = document.getElementById("contact")
let form = document.getElementById('myform')

let logo = document.querySelector(".logo h1")

let h_h1 = document.querySelectorAll('.heading1 h1')
let h_p = document.querySelector('.heading2 p')
let icons = document.querySelectorAll(".icons i")

let a_h3 = document.querySelector(".aboutInfo h3")
let a_p = document.querySelector(".aboutInfo p")

let skill_h2 = document.querySelector(".subheading h2")
let skill_p = document.querySelector(".subheading p")

let skills = document.querySelectorAll(".skillset")

let pro_p = document.querySelector(".pro_title p")

let title_h3 = document.querySelectorAll(".title h3")

let code_li = document.querySelectorAll('.links i')

let contact_title = document.querySelector(".reach p")

let contact_info_p = document.querySelectorAll(".contact1 p")
let contact_info_h2 = document.querySelectorAll(".contact1 h2")

let form_input = document.querySelectorAll(".input")

let stacks = document.querySelectorAll(".stackTitle p")

let titleContainer = document.querySelectorAll(".titleContainer h1")
let bars = document.querySelectorAll('.bar')

let toggle = document.querySelector(".toggleLight")


toggle.addEventListener("click", changeColor)

function changeColor(){

    // Navbar

    toggle.classList.toggle("toggle-bg")

    navbar.classList.toggle("nav-toggle")

    nav.classList.toggle("navbar-toggle")
    
    links.forEach(link => {
        link.classList.toggle('navlinks-toggle')
    })

    
    // Home section

    home.classList.toggle("navbar-toggle")
   
    h_h1.forEach(h1 => {
        h1.classList.toggle('navlinks-toggle')
    })
    h_p.classList.toggle('navlinks-toggle')

    icons.forEach(icon => {
        icon.classList.toggle('navlinks-toggle')
    })

    // About section

    about.classList.toggle("navbar-toggle")

    titleContainer.forEach(title => {
        title.classList.toggle('titleColor')
    })

    bars.forEach(bar => {
        bar.classList.toggle('titleb')
    })

    a_h3.classList.toggle('navlinks-toggle')
    a_p.classList.toggle('navlinks-toggle')

    skill.classList.toggle("navbar-toggle")

    skill_h2.classList.toggle('navlinks-toggle')
    skill_p.classList.toggle('navlinks-toggle')

    project.classList.toggle("navbar-toggle")

    pro_p.classList.toggle('navlinks-toggle')

    title_h3.forEach(t_h3 =>{
        t_h3.classList.toggle('navlinks-toggle')
    })

    code_li.forEach(c_li =>{
        c_li.classList.toggle('navlinks-toggle')
    })

    contact.classList.toggle("navbar-toggle")

    contact_title.classList.toggle('navlinks-toggle')

    contact_info_p.forEach(c_info_p =>{
        c_info_p.classList.toggle('navlinks-toggle')
    })

    contact_info_h2.forEach(c_info_h2 =>{
        c_info_h2.classList.toggle('navlinks-toggle')
    })

    form_input.forEach(f_input => {
        f_input.classList.toggle("navlinks-toggle")
    })

    skills.forEach(skill => {
        skill.classList.toggle("myskillset")
    })

    stacks.forEach(stack => {
        stack.classList.toggle("navlinks-toggle")
    })

    logo.classList.toggle("logo-light")



}






hamburger.addEventListener("click", displayNavbar)
function displayNavbar(){
    nav.classList.toggle('navbar-active')

    navlinks.forEach((link, index)=>{

        if(link.style.animation){
            link.style.animation = ""
        }

        else{
            link.style.animation = `navlinkfade 0.5s ease forwards ${index/7 + 0.2}s`
        }

        
    })

}

console.log(navlinks)


links.forEach(link => {
    link.addEventListener('click', levelup)
})

function levelup(e){
  
    for(let i = 0; i < links.length; i++){
        links[i].style.textDecoration = 'none'
    }
    e.target.style.textDecoration = "underline"
    e.target.style.textDecorationThickness = "2.5px";

    if(e.target.innerText=='About'){
        about.style.paddingTop = "80px"
    }

    else if(e.target.innerText=='Skills'){
        skill.style.paddingTop = '80px'
    }

    
    else if(e.target.innerText=='Projects'){
        project.style.paddingTop = '80px'
    }

    
    else if(e.target.innerText=='Contact'){
        contact.style.paddingTop = '80px'
    }
    
    hamburger.click()
}

form.addEventListener('submit', submitMsg)

function submitMsg(e){
    e.preventDefault()
    swal("Awesome!", "Message sent successfully!", "success");
}
