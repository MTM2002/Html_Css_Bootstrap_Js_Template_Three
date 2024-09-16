let activeLinks = document.querySelectorAll(".nav-item a")
activeLinks.forEach(link => {
    link.addEventListener("click", e => {
        activeLinks.forEach(link => {
            link.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})
window.onload = function () {
    document.querySelector(".navbar-brand").style.left = 0;
    document.querySelector(".landing-content h1").style.left = 0;
    document.querySelector(".navbar-nav").style.right = 0;
    document.querySelector(".landing-content h2").style.right = 0;
    document.querySelector(".navbar-toggler").style.right = 0;
    document.querySelector(".landing .landing-content a").style.bottom = `-50px`
}
window.onscroll = function () {
    let aboutSection = document.querySelector(".about-us");
    let servicesSection = document.querySelector(".services");
    if (scrollY > aboutSection.offsetTop - 200) {
        activeLinks.forEach(link => {
            link.classList.remove("active");
        });
        document.querySelector(".about-section").classList.add("active");
        document.querySelector(".about-us .icon-parent").style.left = 0;
        document.querySelector(".about-us .content").style.right = 0;
        document.querySelector("[href='#about']").classList.add("active");
    } else {
        document.querySelector(".home-section").classList.add("active");
        document.querySelector(".about-section").classList.remove("active");
        document.querySelector(".about-us .icon-parent").style.left = `-200%`;
        document.querySelector(".about-us .content").style.right = `-200%`;
        document.querySelector("[href='#home']").classList.add("active");
    }
    if (scrollY > servicesSection.offsetTop - 200) {
        activeLinks.forEach(link => {
            link.classList.remove("active");
        });
        document.querySelector(".services-section").classList.add("active");
        document.querySelector("[href='#services']").classList.add("active");
        document.querySelector(".services > h2").style.top = `80px`
        document.querySelector(".services .first").style.left = 0;
        document.querySelector(".services .two").style.left = 0;
        document.querySelector(".services .three").style.right = 0;
        document.querySelector(".services .four").style.right = 0;
    } else {
        document.querySelector(".about-section").classList.add("active");
        document.querySelector(".services-section").classList.remove("active");
        document.querySelector("[href='#about']").classList.add("active");
        document.querySelector(".services > h2").style.top = `-100%`
        document.querySelector(".services .first").style.left = `-300%`;
        document.querySelector(".services .two").style.left = `-200%`;
        document.querySelector(".services .three").style.right = `-300%`;
        document.querySelector(".services .four").style.right = `-200%`;
    }
    let teamSection = document.querySelector(".our-team")
    if (scrollY > teamSection.offsetTop - 200) {
        document.querySelector(".our-team .icon-parent").style.right = 0;
        document.querySelector(".team-text").style.left = 0;
    } else {
        document.querySelector(".our-team .icon-parent").style.right = `-200%`;
        document.querySelector(".team-text").style.left = `-200%`;
    }
    let footerSection = document.querySelector(".footer")
    if (scrollY > footerSection.offsetTop - 500) {
        document.querySelector(".left-foot-one").style.left = 0;
        document.querySelector(".left-foot-two").style.left = 0;
        document.querySelector(".foot-one").style.left = 0;
        document.querySelector(".right-foot-one").style.right = 0;
        document.querySelector(".right-foot-two").style.right = 0;
        document.querySelector(".foot-three").style.right = 0;
    } else {
        document.querySelector(".left-foot-one").style.left = `-300%`;
        document.querySelector(".left-foot-two").style.left = `-200%`;
        document.querySelector(".foot-one").style.left = `-200%`;
        document.querySelector(".right-foot-one").style.right = `-200%`;
        document.querySelector(".foot-three").style.right = `-200%`;
        document.querySelector(".right-foot-two").style.right = `-300%`;
    }
}
