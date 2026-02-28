document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------------------------------------------------
  // Mobile Menu Toggle
  // ----------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuIcon = mobileMenuBtn.querySelector("i");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenuIcon.classList.remove("fa-times");
      mobileMenuIcon.classList.add("fa-bars");
    } else {
      mobileMenuIcon.classList.remove("fa-bars");
      mobileMenuIcon.classList.add("fa-times");
    }
  });

  // Close mobile menu when a link is clicked
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenuIcon.classList.remove("fa-times");
      mobileMenuIcon.classList.add("fa-bars");
    });
  });

  // ----------------------------------------------------------------------
  // Sticky Navbar shadow on scroll
  // ----------------------------------------------------------------------
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("shadow-md");
      navbar.classList.replace("bg-white/90", "bg-white");
      navbar.classList.add("py-[-2px]");
    } else {
      navbar.classList.remove("shadow-md");
      navbar.classList.replace("bg-white", "bg-white/90");
    }
  });

  // ----------------------------------------------------------------------
  // Typing Effect Logic
  // ----------------------------------------------------------------------
  const typingTextElement = document.getElementById("typing-text");
  const skills = [
    "AWS & Google Cloud",
    "Terraform & Kubernetes",
    "Python & Automation",
    "CI/CD Pipelines",
    "Reliability & Security",
  ];
  let skillIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;
  let erasingDelay = 40;
  let newTextDelay = 2000;

  // Add caretaker class for CSS blinking cursor
  typingTextElement.classList.add("typing-caret");

  function type() {
    if (!typingTextElement) return;

    const currentSkill = skills[skillIndex];

    if (isDeleting) {
      typingTextElement.textContent = currentSkill.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = erasingDelay;
    } else {
      typingTextElement.textContent = currentSkill.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 100; // Normal typing speed
    }

    if (!isDeleting && charIndex === currentSkill.length) {
      // Finished typing the current word
      isDeleting = true;
      typingDelay = newTextDelay; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
      // Finished erasing
      isDeleting = false;
      skillIndex++;
      if (skillIndex >= skills.length) {
        skillIndex = 0; // Loop back to start
      }
      typingDelay = 500; // Pause before typing next word
    }

    setTimeout(type, typingDelay);
  }

  // Start typing effect after initial delay
  setTimeout(type, 1000);
});
