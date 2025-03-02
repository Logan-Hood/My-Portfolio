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

// Function to adjust animation based on screen width
function adjustAnimation() {
    let movementRange = window.innerWidth <= 768 ? 250 : 500; // Reduce range on tablets and mobile

    // Clear existing animations to prevent conflicts
    gsap.killTweensOf(".skill-img");

    // Start images at negative movement range
    gsap.set(".skill-img", { x: -movementRange });

    // Create the animation
    gsap.to(".skill-img", {
        x: movementRange,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 1.5,
        // Prevent the animation from being affected by scroll or touch events
        scrollTrigger: {
            trigger: ".skills-section",
            start: "top bottom", // Start animation when the section enters the viewport
            end: "bottom top", // End animation when the section leaves the viewport
            scrub: false, // Disable scrubbing to prevent interference
            once: true, // Ensures ScrollTrigger initializes only once
            refreshPriority: -1, // Prevents ScrollTrigger from interfering with GSAP animations
            markers: false // Set to true for debugging
        }
    });
}

// Run on page load and resize
adjustAnimation();
window.addEventListener("resize", adjustAnimation);























setTimeout(() => {
    document.querySelector(".welcome-screen").classList.add("transition");
    document.querySelector(".wheel").src = "images/wheel1.png";
    document.querySelector(".wheel").style.animationDuration = "4s";
}, 1000);

setTimeout(() => {
    document.querySelector(".welcome-screen").classList.add("bg-red");
    document.querySelector(".wheel").src = "images/wheel2.png";
    document.querySelector(".pipe").src = "images/pipe2.png";
}, 2000);

setTimeout(() => {
    document.querySelector(".welcome-screen").classList.add("bg-gray");
    document.querySelector(".wheel").src = "images/wheel3.png";
    document.querySelector(".pipe").src = "images/pipe3.png";
}, 3000);

setTimeout(() => {
    document.querySelector(".welcome-screen").classList.add("bg-blue");
    document.querySelector(".wheel").src = "images/wheel4.png";
    document.querySelector(".pipe").src = "images/pipe4.png";
}, 4000);

setTimeout(() => {
    document.querySelector(".wheel").classList.add("roll-off");
}, 5000); // Delayed roll-off so wheel keeps spinning first

setTimeout(() => {
    document.querySelector(".welcome-screen").classList.add("bg-black");
    document.querySelector(".pipe").classList.add("hidden");
}, 7000); // Background to black, hide pipe

setTimeout(() => {
    document.querySelector(".welcome-screen").classList.add("fade-out");
}, 7000); // Start fade-out

// Instead of redirecting, hide the welcome screen and reveal main content
setTimeout(() => {
    document.querySelector(".wheel").style.animation = "none";
    document.querySelector(".pipe").style.animation = "none";
    
    document.querySelector(".welcome-screen").style.display = "none"; // Hide welcome screen
    document.querySelector(".main-content").classList.remove("hidden"); // Show main content
}, 8000);
















