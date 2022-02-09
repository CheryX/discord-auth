//runs after website is loaded
function animations() {
    document.addEventListener("scroll", scroll)
}

//navbar changing after scrolling down
function scroll (e) {
    console.log(document.scrollingElement.scrollTop)
    var scroll = document.scrollingElement.scrollTop
    if (scroll != 0) {
        document.getElementsByTagName("header")[0].classList.add("scroll")
    } else {
        document.getElementsByTagName("header")[0].classList.remove("scroll")
    }
}