/*SMOOTH NAVBAR*/

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(8,17,31,.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    } else {
        navbar.style.background = "rgba(8,17,31,.75)";
        navbar.style.boxShadow = "none";
    }
});


/*ACTIVE LINK*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/*SCROLL REVEAL*/

ScrollReveal({
    distance: "80px",
    duration: 1800,
    delay: 150,
    reset: false
});

ScrollReveal().reveal(".hero-left", {
    origin: "left"
});

ScrollReveal().reveal(".hero-right", {
    origin: "right"
});

ScrollReveal().reveal(".about-box", {
    origin: "bottom"
});

ScrollReveal().reveal(".skill", {
    interval: 120
});

ScrollReveal().reveal(".project-card", {
    interval: 150
});
ScrollReveal().reveal(".contact-box", {
    origin: "bottom"
});


/*IMAGE FLOAT*/

const image = document.querySelector(".hero-right img");
image.addEventListener("mousemove", () => {
    image.style.transform = "scale(1.05) rotate(2deg)";
});

image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1) rotate(0deg)";
});


/*PROJECT CARD EFFECT*/

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px) scale(1)";
    });
});

/*BUTTON RIPPLE*/

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-4px)";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0px)";
    });
});


/*LOADER*/

window.onload = () => {
    document.body.style.opacity = "1";
};