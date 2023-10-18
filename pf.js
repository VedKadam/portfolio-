

// JavaScript to handle smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  
    // Toggle navigation menu on mobile
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const nav = document.querySelector(".navbar");
  
    menuIcon.addEventListener("click", () => {
      nav.classList.add("active");
    });
  
    closeIcon.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

// Animation for ABOUT section
// Add this JavaScript to your pf.js file or within a <script> tag in your HTML

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle the scroll animation
function handleScrollAnimation() {
  const aboutContent = document.querySelector('.about-content');
  if (isElementInViewport(aboutContent)) {
      aboutContent.style.opacity = 1;
      aboutContent.style.transform = 'translateY(0)';
      AOS.refresh(); // Refresh AOS to trigger the animation
      window.removeEventListener('scroll', handleScrollAnimation);
  }
}

// Add an event listener to trigger the animation when the user scrolls
window.addEventListener('scroll', handleScrollAnimation);

// Add this JavaScript to your pf.js file
/*AOS.init({
  duration: 2000,
  once: true, // Allow the animation to play multiple times
});
*/


// animation for website
// Function to check if the skills section is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add or remove the animation class
function toggleAnimation() {
  const skillsSection = document.querySelector("#skills");
  const skillIcons = document.querySelectorAll("#skills .skill-icon");

  if (isElementInViewport(skillsSection)) {
      skillsSection.classList.add("animate");
      skillIcons.forEach(icon => {
          icon.style.transform = "scale(1)";
      });
  } else {
      skillsSection.classList.remove("animate");
      skillIcons.forEach(icon => {
          icon.style.transform = "scale(0)";
      });
  }
}

// Add event listener for scroll
window.addEventListener("scroll", toggleAnimation);

// Initial check in case the skills section is already in view on page load
toggleAnimation();

/*=========================================Skills Animation Ends Here========================================================*/

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function toggleHomeAnimation() {
  const homeSection = document.querySelector("#home");
  const contentElement = document.querySelector("#home .content");

  if (isElementInViewport(homeSection)) {
      contentElement.classList.add("animate");
  } else {
      contentElement.classList.remove("animate");
  }
}

window.addEventListener("scroll", toggleHomeAnimation);

// Initial check for the home section when the page loads
toggleHomeAnimation();


