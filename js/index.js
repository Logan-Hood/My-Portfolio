document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});























document.addEventListener("DOMContentLoaded", function() {
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
    mainBtn.addEventListener("mouseover", function() {
        duplicate1.style.display = "block";
        duplicate2.style.display = "block";
        duplicate3.style.display = "block";


    });

    // Hide duplicates when mouse leaves
    btnContainer.addEventListener("mouseleave", function() {
        duplicate1.style.display = "none";
        duplicate2.style.display = "none";
        duplicate3.style.display = "none";

    });
});





















// Function to adjust animation based on screen width
function adjustAnimation() {
    let movementRange = window.innerWidth <= 768 ? 250 : 500; // Reduce range on tablets

    gsap.killTweensOf(".skill-img"); // Clear existing animations to prevent conflicts

    gsap.set(".skill-img", { x: -movementRange }); // Start images at negative movement range

    gsap.to(".skill-img", {
        x: movementRange,  
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 1.5
    });
}

// Run on page load and resize
adjustAnimation();
window.addEventListener("resize", adjustAnimation);
