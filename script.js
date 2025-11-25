// Dropdown functionality
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.closest(".dropdown-menu")) {
      e.stopPropagation()
    }
  })
})

// Carousel functionality
let currentSlideIndex = 0

function currentSlide(n) {
  showSlide((currentSlideIndex = n))
}

function showSlide(n) {
  const slides = document.querySelectorAll(".carousel-item")
  const indicators = document.querySelectorAll(".indicator")

  if (n >= slides.length) {
    currentSlideIndex = 0
  }
  if (n < 0) {
    currentSlideIndex = slides.length - 1
  }

  slides.forEach((slide) => slide.classList.remove("active"))
  indicators.forEach((indicator) => indicator.classList.remove("active"))

  slides[currentSlideIndex].classList.add("active")
  indicators[currentSlideIndex].classList.add("active")
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
  currentSlide(++currentSlideIndex)
}, 5000)
