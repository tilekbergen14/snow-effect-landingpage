const hamburger = document.querySelector(".hamburger")
const linksBox = document.querySelector("ul")
const links = document.querySelectorAll("li")
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("toggle")
    linksBox.classList.toggle("show-nav");
    links.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ""
        }
        else{
            link.style.animation = "navAni " + (index / 7 + 2) + "s";
        }
    })
})

//snow
function snow(){
    const body = document.querySelector("body")
    let i = 0;
    while(i < 300){
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        const size = (Math.random() * 10)
        const img = document.createElement("img")
        img.src = "snow.svg"
        img.style.top = y + "px";
        img.style.left = x + "px"
        img.style.height = size + "px"
        img.style.width = size + "px"
        img.style.animationDuration = size + 5 + "s"
        body.appendChild(img)
        ++i;
        console.log(img.height)
    }
}
snow()