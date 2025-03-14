const roles = ["Web Developer", "Frontend Engineer","Full-Stack Developer"];
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
