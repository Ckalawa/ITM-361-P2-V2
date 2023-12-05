document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const sections = document.querySelectorAll("section[id^='a']");
  
    function showSection(index) {
      sections.forEach((section, i) => {
        section.style.transform = `translateX(-${index * 100}%)`;
      });
    }
  
    function nextSection() {
      currentIndex = (currentIndex + 1) % sections.length;
      showSection(currentIndex);
    }
  
    function prevSection() {
      currentIndex = (currentIndex - 1 + sections.length) % sections.length;
      showSection(currentIndex);
    }
  
    // Attach event listeners to navigation buttons
    const nextBtn = document.querySelector(".swiper-button-next");
    const prevBtn = document.querySelector(".swiper-button-prev");
  
    nextBtn.addEventListener("click", nextSection);
    prevBtn.addEventListener("click", prevSection);
  });
  
  