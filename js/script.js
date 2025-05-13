// Initialize Typed.js
window.onload = function() {
  var options = {
    strings: ["Smart Debt Recovery", "Customer Support", "Email Chat Support", "AI-powered Communication", "Next-Gen BPO Solutions"],
    typeSpeed: 60,   // Speed of typing
    backSpeed: 40,   // Speed of backspacing
    backDelay: 1000, // Delay before starting to delete
    startDelay: 500, // Delay before starting to type
    loop: true       // Loop indefinitely
  };

  var typed = new Typed("#typed-text", options);
};

// Store last scroll position
let lastScrollTop = 0;

// Function to check if an element is in view
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events and add the in-view or out-of-view classes
function handleScroll() {
  const boxes = document.querySelectorAll('.box');
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  boxes.forEach((box) => {
    if (isInViewport(box)) {
      box.classList.add('in-view');
      box.classList.remove('out-of-view');
    } else {
      box.classList.add('out-of-view');
      box.classList.remove('in-view');
    }
  });

  // Scroll direction detection: Scroll Down or Scroll Up
  if (currentScroll > lastScrollTop) {
    // Scrolling Down
    console.log("Scrolling down");
  } else {
    // Scrolling Up
    console.log("Scrolling up");
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}

// Event listener to trigger on load and scroll
window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function handleScrollGboxes() {
  const gboxes = document.querySelectorAll('.gbox');
  gboxes.forEach(box => {
    if (isInViewport(box)) {
      box.classList.add('in-view');
      box.classList.remove('out-of-view');
    } else {
      box.classList.remove('in-view');
      box.classList.add('out-of-view');
    }
  });
}

window.addEventListener('scroll', handleScrollGboxes);
window.addEventListener('load', handleScrollGboxes);

document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");
  const circle = document.querySelector(".progress-ring circle");

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / height;
    const offset = circumference * (1 - progress);
    circle.style.strokeDashoffset = offset;

    backToTop.style.display = scrollTop > 100 ? "flex" : "none";
  }

  window.addEventListener("scroll", updateProgress);

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
