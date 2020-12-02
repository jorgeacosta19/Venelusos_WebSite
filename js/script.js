var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;


    if (prevScrollpos > currentScrollPos) {
        // this is scrolling up
        document.getElementById("navbar").style.top = "0";
        document.getElementById("logo-vl").style.visibility = "visible";
        document.getElementById("name-vl").style.display = "block";
        document.getElementById("navbar").style.maxHeight = "100%";
        document.getElementById("navbar").style.backgroundColor = "rgb(98, 98, 98)";

    } else {
        // this is scrolling down
        document.getElementById("navbar").style.top = "-0.4rem";
        document.getElementById("navbar").style.maxHeight = "10%";
        document.getElementById("logo-vl").style.visibility = "hidden";
        document.getElementById("name-vl").style.display = "none";
        document.getElementById("navbar").style.backgroundColor = "rgb(98, 98, 98)";

    }
    prevScrollpos = currentScrollPos;
}