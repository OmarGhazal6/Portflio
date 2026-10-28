const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
const placeholders = ["YOUR_EMAIL@example.com", "https://github.com/YOUR_USERNAME", "https://www.linkedin.com/in/YOUR_USERNAME/"];
const warning = document.getElementById("placeholderWarning");
const currentLinks = [document.getElementById("emailLink").getAttribute("href"), document.getElementById("githubLink").getAttribute("href"), document.getElementById("linkedinLink").getAttribute("href")];
if (!placeholders.some((p) => currentLinks.some((link) => link.includes(p)))) warning.hidden = true;
