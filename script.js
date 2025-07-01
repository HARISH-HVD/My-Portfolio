const roles = ["Web Developer","CyberSecurity","Frontend Engineer","Full-Stack Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; 
const delayBetweenRoles = 1500; 

function typeEffect() {
    const roleElement = document.getElementById("role");
    const currentRole = roles[index];

    if (!isDeleting) {
        roleElement.textContent = currentRole.slice(0, charIndex++);
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenRoles); 
            return;
        }
    } else {
        roleElement.textContent = currentRole.slice(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length; 
        }
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});

// document.addEventListener("DOMContentLoaded", function () {
//     const navbar = document.querySelector(".navbar");
//     const menuToggle = document.createElement("div");

//     menuToggle.innerHTML = "&#9776;"; 
//     menuToggle.style.cssText = "font-size: 30px; cursor: pointer; color: white; display: none;";
//     document.querySelector(".header").appendChild(menuToggle);

//     menuToggle.addEventListener("click", function () {
//         navbar.classList.toggle("active");
//     });

//     function updateMenu() {
//         if (window.innerWidth <= 768) {
//             menuToggle.style.display = "block";
//         } else {
//             menuToggle.style.display = "none";
//             navbar.classList.remove("active");
//         }
//     }

//     updateMenu();
//     window.addEventListener("resize", updateMenu);
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.createElement("div");
//     menuToggle.className = "menu-toggle";
//     menuToggle.innerHTML = "&#9776;"; 
//     document.querySelector(".header").appendChild(menuToggle);
    
//     const navbar = document.querySelector(".navbar");

//     menuToggle.addEventListener("click", () => {
//         navbar.classList.toggle("show-menu");
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("show-menu");
    });
});

