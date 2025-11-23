/*  video slider  */

var slideIndex = 1;
showSlides(slideIndex);

// Add the timer for the automatic slideshow
var timer = setInterval(function () {
  plusSlides(1);
}, 9000); // The interval in milliseconds, in this case 3 seconds

function plusSlides(n) {
  clearInterval(timer); // Clear the timer
  timer = setInterval(function () {
    plusSlides(1);
  }, 9000); // Reset the timer
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  clearInterval(timer); // Clear the timer
  timer = setInterval(function () {
    plusSlides(1);
  }, 9000); // Reset the timer
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // a11y: update aria-selected for dots
  for (i = 0; i < dots.length; i++) {
    dots[i].setAttribute(
      "aria-selected",
      i === slideIndex - 1 ? "true" : "false"
    );
  }
}

let videos = document.getElementsByClassName("myVideo");
let buttons = document.getElementsByClassName("playPauseButton");

for (let i = 0; i < videos.length; i++) {
  const video = videos[i];
  const button = buttons[i];
  if (!video || !button) continue;

  const setPaused = () => {
    button.innerHTML =
      '<img src="./images/icons8-play-24.png" alt="play" style="height: 37px; border: none; outline: none; background: none" >';
    button.setAttribute("aria-label", "Play background video");
  };
  const setPlaying = () => {
    button.innerHTML =
      '<img src="./images/icons8-pause-24.png" alt="pause" style="height: 37px; border: none; outline: none; background: none" >';
    button.setAttribute("aria-label", "Pause background video");
  };

  button.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      setPlaying();
    } else {
      video.pause();
      setPaused();
    }
  });

  video.addEventListener("loadedmetadata", function () {
    // reflect autoplay state in control
    setPlaying();
  });
}

function hideshow() {
  var dropdown = document.getElementById("hands");

  if (dropdown.style.display == "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

window.onload = function () {
  setInterval(hideshow, 1500);
};

/* card slider */

//trip-ideas card-slider

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".wrapper .a-arrow");
  const wrapper = document.querySelector(".wrapper");

  const firstCard = carousel.querySelector(".card");
  const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;

    // Calculate the new scroll position
    const newScrollLeft = startScrollLeft - (e.pageX - startX);

    // Check if the new scroll position exceeds
    // the carousel boundaries
    if (
      newScrollLeft <= 0 ||
      newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
    ) {
      // If so, prevent further dragging
      isDragging = false;
      return;
    }

    // Otherwise, update the scroll position of the carousel
    carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  const autoPlay = () => {
    // Return if window is smaller than 800
    if (window.innerWidth < 800) return;

    // Calculate the total width of all cards
    const totalCardWidth = carousel.scrollWidth;

    // Calculate the maximum scroll position
    const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

    // If the carousel is at the end, stop autoplay
    if (carousel.scrollLeft >= maxScrollLeft) return;

    // Autoplay the carousel after every 2500ms
    // timeoutId = setTimeout(() =>
    // 	carousel.scrollLeft += firstCardWidth, 2500);
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to
  // scroll the carousel left and right
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });
});

//road-trips card-slider

document.addEventListener("DOMContentLoaded", function () {
  const carousel1 = document.querySelector(".carousel-1");
  const arrowBtns1 = document.querySelectorAll(".wrapper-1 .a-arrow-1");
  const wrapper1 = document.querySelector(".wrapper-1");

  const firstCard1 = carousel1.querySelector(".card-1");
  const firstCardWidth1 = firstCard1.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  const dragStart = (e) => {
    isDragging = true;
    carousel1.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel1.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;

    // Calculate the new scroll position
    const newScrollLeft = startScrollLeft - (e.pageX - startX);

    // Check if the new scroll position exceeds
    // the carousel boundaries
    if (
      newScrollLeft <= 0 ||
      newScrollLeft >= carousel1.scrollWidth - carousel1.offsetWidth
    ) {
      // If so, prevent further dragging
      isDragging = false;
      return;
    }

    // Otherwise, update the scroll position of the carousel
    carousel1.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    carousel1.classList.remove("dragging");
  };

  const autoPlay = () => {
    // Return if window is smaller than 800
    if (window.innerWidth < 800) return;

    // Calculate the total width of all cards
    const totalCardWidth = carousel1.scrollWidth;

    // Calculate the maximum scroll position
    const maxScrollLeft = totalCardWidth - carousel1.offsetWidth;

    // If the carousel is at the end, stop autoplay
    if (carousel1.scrollLeft >= maxScrollLeft) return;

    // Autoplay the carousel after every 2500ms
    // timeoutId = setTimeout(() =>
    // 	carousel.scrollLeft += firstCardWidth, 2500);
  };

  carousel1.addEventListener("mousedown", dragStart);
  carousel1.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper1.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper1.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to
  // scroll the carousel left and right
  arrowBtns1.forEach((btn1) => {
    btn1.addEventListener("click", () => {
      carousel1.scrollLeft +=
        btn1.id === "left-1" ? -firstCardWidth1 : firstCardWidth1;

      const prevBtn = document.getElementById("left-1");
      const nextBtn = document.getElementById("right-1");
      const carousel = document.getElementById("cour");

      // Scroll amount (adjust as needed)
      const scrollAmount = 100;

      // Event listener for the next button (scroll right)
      nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });

      // Event listener for the previous button (scroll left)
      prevBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    });
  });
});

//two-day card-slider

document.addEventListener("DOMContentLoaded", function () {
  const carousel1 = document.querySelector(".carousel-2");
  const arrowBtns1 = document.querySelectorAll(".wrapper-2 .a-arrow-2");
  const wrapper1 = document.querySelector(".wrapper-2");

  const firstCard1 = carousel1.querySelector(".card-2");
  const firstCardWidth1 = firstCard1.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  const dragStart = (e) => {
    isDragging = true;
    carousel1.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel1.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;

    // Calculate the new scroll position
    const newScrollLeft = startScrollLeft - (e.pageX - startX);

    // Check if the new scroll position exceeds
    // the carousel boundaries
    if (
      newScrollLeft <= 0 ||
      newScrollLeft >= carousel1.scrollWidth - carousel1.offsetWidth
    ) {
      // If so, prevent further dragging
      isDragging = false;
      return;
    }

    // Otherwise, update the scroll position of the carousel
    carousel1.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    carousel1.classList.remove("dragging");
  };

  const autoPlay = () => {
    // Return if window is smaller than 800
    if (window.innerWidth < 800) return;

    // Calculate the total width of all cards
    const totalCardWidth = carousel1.scrollWidth;

    // Calculate the maximum scroll position
    const maxScrollLeft = totalCardWidth - carousel1.offsetWidth;

    // If the carousel is at the end, stop autoplay
    if (carousel1.scrollLeft >= maxScrollLeft) return;

    // Autoplay the carousel after every 2500ms
    // timeoutId = setTimeout(() =>
    // 	carousel.scrollLeft += firstCardWidth, 2500);
  };

  carousel1.addEventListener("mousedown", dragStart);
  carousel1.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper1.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper1.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to
  // scroll the carousel left and right
  arrowBtns1.forEach((btn1) => {
    btn1.addEventListener("click", () => {
      carousel1.scrollLeft +=
        btn1.id === "left-2" ? -firstCardWidth1 : firstCardWidth1;

      const prevBtn = document.getElementById("left-2");
      const nextBtn = document.getElementById("right-2");
      const carousel = document.getElementById("cour-1");

      // Scroll amount (adjust as needed)
      const scrollAmount = 100;

      // Event listener for the next button (scroll right)
      nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });

      // Event listener for the previous button (scroll left)
      prevBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    });
  });
});

//pan-india card-slider

document.addEventListener("DOMContentLoaded", function () {
  const carousel1 = document.querySelector(".carousel-3");
  const arrowBtns1 = document.querySelectorAll(".wrapper-3 .a-arrow-3");
  const wrapper1 = document.querySelector(".wrapper-3");

  const firstCard1 = carousel1.querySelector(".card-3");
  const firstCardWidth1 = firstCard1.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  const dragStart = (e) => {
    isDragging = true;
    carousel1.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel1.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;

    // Calculate the new scroll position
    const newScrollLeft = startScrollLeft - (e.pageX - startX);

    // Check if the new scroll position exceeds
    // the carousel boundaries
    if (
      newScrollLeft <= 0 ||
      newScrollLeft >= carousel1.scrollWidth - carousel1.offsetWidth
    ) {
      // If so, prevent further dragging
      isDragging = false;
      return;
    }

    // Otherwise, update the scroll position of the carousel
    carousel1.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    carousel1.classList.remove("dragging");
  };

  const autoPlay = () => {
    // Return if window is smaller than 800
    if (window.innerWidth < 800) return;

    // Calculate the total width of all cards
    const totalCardWidth = carousel1.scrollWidth;

    // Calculate the maximum scroll position
    const maxScrollLeft = totalCardWidth - carousel1.offsetWidth;

    // If the carousel is at the end, stop autoplay
    if (carousel1.scrollLeft >= maxScrollLeft) return;

    // Autoplay the carousel after every 2500ms
    // timeoutId = setTimeout(() =>
    // 	carousel.scrollLeft += firstCardWidth, 2500);
  };

  carousel1.addEventListener("mousedown", dragStart);
  carousel1.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper1.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper1.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to
  // scroll the carousel left and right
  arrowBtns1.forEach((btn1) => {
    btn1.addEventListener("click", () => {
      carousel1.scrollLeft +=
        btn1.id === "left-3" ? -firstCardWidth1 : firstCardWidth1;

      const prevBtn = document.getElementById("left-3");
      const nextBtn = document.getElementById("right-3");
      const carousel = document.getElementById("cour-2");

      // Scroll amount (adjust as needed)
      const scrollAmount = 100;

      // Event listener for the next button (scroll right)
      nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });

      // Event listener for the previous button (scroll left)
      prevBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    });
  });
});
