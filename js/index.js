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























document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.querySelector(".welcome-screen");
    const mainContent = document.querySelector(".main-content");

    // Check if the welcome screen was already seen OR if the user clicked the logo
    if (localStorage.getItem("welcomeSeen") || sessionStorage.getItem("logoClicked")) {
        welcomeScreen.style.display = "none"; // Hide welcome screen
        mainContent.classList.remove("hidden"); // Show main content
        return; // Stop the welcome animations from running
    }

    // Run the welcome screen animation sequence only if it's the first visit
    setTimeout(() => {
        welcomeScreen.classList.add("transition");
        document.querySelector(".wheel").src = "images/wheel1.png";
        document.querySelector(".wheel").style.animationDuration = "4s";
    }, 1000);

    setTimeout(() => {
        welcomeScreen.classList.add("bg-red");
        document.querySelector(".wheel").src = "images/wheel2.png";
        document.querySelector(".pipe").src = "images/pipe2.png";
    }, 2000);

    setTimeout(() => {
        welcomeScreen.classList.add("bg-gray");
        document.querySelector(".wheel").src = "images/wheel3.png";
        document.querySelector(".pipe").src = "images/pipe3.png";
    }, 3000);

    setTimeout(() => {
        welcomeScreen.classList.add("bg-blue");
        document.querySelector(".wheel").src = "images/wheel4.png";
        document.querySelector(".pipe").src = "images/pipe4.png";
    }, 4000);

    setTimeout(() => {
        document.querySelector(".wheel").classList.add("roll-off");
    }, 5000);

    setTimeout(() => {
        welcomeScreen.classList.add("bg-black");
        document.querySelector(".pipe").classList.add("hidden");
    }, 7000);

    setTimeout(() => {
        welcomeScreen.classList.add("fade-out");
    }, 7000);

    setTimeout(() => {
        document.querySelector(".wheel").style.animation = "none";
        document.querySelector(".pipe").style.animation = "none";

        welcomeScreen.style.display = "none"; // Hide welcome screen
        mainContent.classList.remove("hidden"); // Show main content

        // Store in sessionStorage so the welcome screen never shows again
        sessionStorageStorage.setItem("welcomeSeen", "true");
    }, 8000);
});

// Function to disable the welcome screen when the logo is clicked
function disableWelcomeScreen() {
    sessionStorage.setItem("logoClicked", "true");
}






























// about.html
document.addEventListener("DOMContentLoaded", function () {
    const inspireLink = document.getElementById("inspire-link");
    const overlay = document.getElementById("inspiration-overlay");
    const closeBtn = document.querySelector(".close-btn");
    const countdownElement = document.getElementById("countdown");
    const youtubeVideo = document.getElementById("youtube-video");
    const messageElement = document.querySelector(".overlay-content p");
    let countdown;

    // Open overlay and disable scrolling
    inspireLink.addEventListener("click", function (event) {
        event.preventDefault();
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        document.body.classList.add("no-scroll"); // Disable scrolling
        startCountdown();
    });

    // Close overlay and re-enable scrolling
    function closeOverlay() {
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        document.body.classList.remove("no-scroll"); // Enable scrolling
        resetCountdown();
    }

    closeBtn.addEventListener("click", closeOverlay);
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            closeOverlay();
        }
    });

    function startCountdown() {
        let timeLeft = 5;
        countdown = setInterval(() => {
            countdownElement.textContent = timeLeft;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(countdown);
                countdownElement.classList.add("hidden");
                messageElement.classList.add("hidden");
                youtubeVideo.style.display = "block";
                youtubeVideo.src = "https://www.youtube.com/embed/7YuQJP3WMqY?autoplay=1"; // Autoplay video
            }
        }, 1000);
    }

    function resetCountdown() {
        clearInterval(countdown);
        countdownElement.textContent = "5";
        countdownElement.classList.remove("hidden");
        messageElement.classList.remove("hidden");
        youtubeVideo.style.display = "none";
        youtubeVideo.src = ""; // Stop video
    }
});

























































document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        "images/trick1.png",
        "images/trick2.png",
        "images/trick3.png",
        "images/trick4.png",
        "images/trick5.png",
        "images/trick6.png",
        "images/trick7.png",
        "images/trick8.png",
        "images/trick9.png"
    ];

    let currentIndex = 0;
    let forward = true; // Controls direction (forward/reverse)
    const heroImage = document.getElementById("hero-img");

    function changeImage() {
        heroImage.src = imagePaths[currentIndex];

        if (forward) {
            currentIndex++;
            if (currentIndex >= imagePaths.length) {
                currentIndex = imagePaths.length - 2; // Start reversing
                forward = false;
            }
        } else {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = 1; // Start moving forward again
                forward = true;
            }
        }
    }

    setInterval(changeImage, 150); // Change image every .5 seconds
});
































document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});
