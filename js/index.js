window.addEventListener("scroll", function() {
    if (window.scrollY != 0) {
        document.querySelector(".to-top").classList.remove("hide");
        document.querySelector(".to-top").style.cssText = "animation: fadein 0.45s linear;";
    } else {
        document.querySelector(".to-top").style.cssText = "animation: fadeout 0.45s linear;";
        this.setTimeout(function() {
            document.querySelector(".to-top").classList.add("hide");
        }, 450);
    }
});
function tt () {
    window.scrollTo({
        top:0 ,
        behavior: "smooth"
    })
}
function open_nav() {
    document.querySelector(".side").classList.toggle("hig")
    document.querySelector(".bur1").classList.toggle("bur1r")
    document.querySelector(".bur2").classList.toggle("bur2r")
    document.querySelector(".bur3").classList.toggle("bur3r")
}
document.getElementById("yt-h").addEventListener("hover", function(){
    document.getElementById("yt-h").scr="../imgs/youtube - Copy.png"
})
document.getElementById("tw-h").addEventListener("hover", function(){
    document.getElementById("tw-h").scr="../imgs/twitter - Copy.png"
})