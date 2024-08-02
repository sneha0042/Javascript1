//document.getElementById
let txt = document.getElementById("ptxt")
txt.style.fontSize = "60px"

document.getElementById("myBtn").style.backgroundColor = "Radam"

//document.getElementByClassName
let domtxt = document.getElementsByClassName("htxt")
domtxt[0].style.color="Blue"


// getElementsByTagName
let brd = document.getElementsByTagName("h3")
brd[0].style.border = "2px solid green"

//querySelector
document.querySelector("h4").style.fontStyle = "italic"

// querySelectorAll
function changeMargin(item){
    document.querySelectorAll('.item').forEach(el => {
        el.style.margin = "50px 100px"
    })
}
changeMargin()

// Change Styles of Unique Element About Me
let aboutMeElement = document.getElementById('aboutMe');
aboutMeElement.style.backgroundColor = 'Skyblue';
aboutMeElement.style.padding = '20px';
aboutMeElement.style.borderRadius = '10px';
aboutMeElement.style.fontWeight = 'bold';