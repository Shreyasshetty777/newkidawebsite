var main = document.querySelector('.main');
var nav = document.querySelector('.nav');

window.onscroll = function () {

    if (window.pageYOffset > (main.offsetHeight - nav.offsetHeight)) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    } else {
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');

    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 100) {
        document.getElementById("logo").style.width = "150px";
        document.getElementById("logo").style.marginTop = "80px";
        document.getElementById("logo").style.position = "fixed";
        document.getElementById("logo1").style.width = "150px";
        document.getElementById("logo1").style.marginTop = "80px";
        document.getElementById("logo1").style.position = "fixed";
        document.getElementById("logo").style.opacity = "50%";
        document.getElementById("logo1").style.transitionDelay ="0.5s"


    } else {
        document.getElementById("logo").style.width = "30%";
        document.getElementById("logo").style.margin = "0 auto";
        document.getElementById("logo").style.marginTop = "150px"
        document.getElementById("logo").style.position = "relative";
        document.getElementById("logo1").style.marginTop = "1200px"
        document.getElementById("logo").style.opacity = "100%";
        document.getElementById("logo1").style.transitionDelay = "0s";

    }
      

}