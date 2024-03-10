
// Home Type text

var typed = new Typed(".auto-type1", {
    strings: ["Israel-Gaza War"],
    typeSpeed: 160,
    backSpeed: 160,
    loop: true
});
var typed = new Typed(".auto-type2", {
    strings: ["War in Ukarain"],
    typeSpeed: 160,
    backSpeed: 160,
    loop: true
});
var typed = new Typed(".auto-type3", {
    strings: ["Pakistan Ex-PM Imran Khan"],
    typeSpeed: 160,
    backSpeed: 160,
    loop: true
});


const showPopupBtn = document.querySelector(".bell-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");

showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());



var loader = document.getElementById("loader");
window.addEventListener("load", function () {
    loader.style.display = "none"
})

 window.addEventListener("load", function(){
    setTimeout(
       function open(event){
           document.querySelector(".wpopup").style.display = "block";
        },
        2000
    )
});


 document.querySelector("#wclose").addEventListener("click", function(){
    document.querySelector(".wpopup").style.display = "none";
});











