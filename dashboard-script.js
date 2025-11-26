// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobileMenu")

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
})

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll(".mobile-link")
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Logout button functionality
const logoutBtn = document.querySelector(".logout-btn")
logoutBtn.addEventListener("click", () => {
  alert("You have been logged out!")
  window.location.href = "index.html"
})

// Gallery item click handler
const galleryItems = document.querySelectorAll(".gallery-item")
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    alert("Opening artwork details...")
  })
})

// Messages button functionality
const messagesBtn = document.querySelector(".profile-actions .btn:first-child")
messagesBtn.addEventListener("click", () => {
  alert("Opening messages...")
})

// Settings button functionality
const settingsBtn = document.querySelector(".profile-actions .btn:last-child")
settingsBtn.addEventListener("click", () => {
  alert("Opening settings...")
})
