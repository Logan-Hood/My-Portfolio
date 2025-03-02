document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is loaded and ready!");

    // Check if jQuery is loaded
    if (window.jQuery) {
        console.log("jQuery is loaded successfully!");
    } else {
        console.error("jQuery failed to load!");
    }

    // Toggle navigation menu
    const navToggle = document.querySelector(".nav-toggle");
    const navClose = document.querySelector(".nav-close");
    const navMenu = document.querySelector(".nav-menu");

    function toggleNav() {
        if (navMenu) {
            navMenu.classList.toggle("open");
            document.body.classList.toggle("menu-open");
    
            const isOpen = navMenu.classList.contains("open");
            if (navToggle) {
                navToggle.setAttribute("aria-expanded", isOpen);
            }
    
            if (isOpen) {
                gsap.from(".nav-menu", { duration: 0.5, x: -100, opacity: 0 });
            }
        }
    }

    if (navToggle && navClose && navMenu) {
        navToggle.addEventListener("click", toggleNav);
        navClose.addEventListener("click", toggleNav);
    } else {
        console.error("Navigation elements not found!");
    }

    // GSAP Animation for Header
    gsap.from("h1", { duration: 1, y: -50, opacity: 0 });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});




gsap.from(".hero h1", {
    duration: 5,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});





document.addEventListener("DOMContentLoaded", function () {
    const btnContainer = document.querySelector(".btn-container");
    const mainBtn = document.querySelector(".contact-btn");

    // Create duplicate buttons
    const duplicate1 = document.createElement("button");
    duplicate1.classList.add("duplicate-btn", "one");
    duplicate1.innerText = "Contact Me";

    const duplicate2 = document.createElement("button");
    duplicate2.classList.add("duplicate-btn", "two");
    duplicate2.innerText = "Contact Me";

    const duplicate3 = document.createElement("button");
    duplicate3.classList.add("duplicate-btn", "three");
    duplicate3.innerText = "Contact Me";

    // Append duplicates to container
    btnContainer.appendChild(duplicate1);
    btnContainer.appendChild(duplicate2);
    btnContainer.appendChild(duplicate3);

    // Show duplicates on hover
    mainBtn.addEventListener("mouseover", function () {
        duplicate1.style.display = "block";
        duplicate2.style.display = "block";
        duplicate3.style.display = "block";
    });

    // Hide duplicates when mouse leaves
    btnContainer.addEventListener("mouseleave", function () {
        duplicate1.style.display = "none";
        duplicate2.style.display = "none";
        duplicate3.style.display = "none";
    });
});




















// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

function adjustAnimation() {
    let movementRange = window.innerWidth <= 768 ? 250 : 500;

    gsap.set(".skill-img", { x: -movementRange });

    gsap.to(".skill-img", {
        x: movementRange,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 1.5,
        scrollTrigger: {
            trigger: ".skills-section",
            start: "top bottom",
            end: "bottom top",
            scrub: false,
            invalidateOnRefresh: true,
        }
    });
}

adjustAnimation();
window.addEventListener("resize", adjustAnimation);

