window.addEventListener("load", () => {
  // Wait 3 seconds, then fade in content and remove logo
  setTimeout(() => {
    const main = document.getElementById("main-content");
    const intro = document.getElementById("intro-logo");

    main.style.opacity = "1"; // fade in content
    intro.style.display = "none"; // remove intro overlay
  }, 2100);
});

// Event listener to trigger on load and scroll
window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function handleScroll() {
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

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function handleScroll() {
  const boxes = document.querySelectorAll('.g-box');
  boxes.forEach(box => {
    if (isInViewport(box)) {
      box.classList.add('in-view');
      box.classList.remove('out-of-view');
    } else {
      box.classList.remove('in-view');
      box.classList.add('out-of-view');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");
  const circle = document.querySelector(".progress-ring circle");

 const radius = 26;
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

// JavaScript to detect when boxes come into view
document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.about-box');

  const checkBoxes = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add('in-view');
      } else {
        box.classList.remove('in-view');
      }
    });
  };

  window.addEventListener('scroll', checkBoxes);
  checkBoxes(); // Initial check in case boxes are already in view
});
