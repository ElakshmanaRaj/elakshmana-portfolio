
let sections = document.querySelectorAll("section");

let navlinks = document.querySelectorAll('.nav-link')
window.onscroll = () =>{
    sections.forEach((sec)=>{
        if (
            sec.id === "home" ||
            sec.id === "about" ||
            sec.id === "skills" ||
            sec.id === "projects" ||
            sec.id === "contact"
          ) {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        let sectionId = sec.getAttribute('id') 
        if (top >= offset && top < offset + height){
            navlinks.forEach((links)=>{
                links.classList.remove("active");
                document
                .querySelector(`.nav-link[href="#${sectionId}"`)
                .classList.add("active");
            });

        }
    }
    
    });
}