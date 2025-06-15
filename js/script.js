// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Typed text
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    new Typed('#typed-text', {
      strings: [
        "Smart Debt Recover",
        "Customer Support",
        "E-Mail Chat Support",
        "AI-powered Communication",
        "Next-Gen BPO Solutions",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true
    });
  }

  // Back to Top Button
  const backToTop = document.getElementById("backToTop");
  const circle = backToTop?.querySelector("circle");

  const updateScrollProgress = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollY / docHeight;
    const circumference = 2 * Math.PI * 22;
    const strokeOffset = circumference * (1 - scrollPercent);

    if (scrollY > 100 && backToTop) {
      backToTop.style.display = "block";
    } else if (backToTop) {
      backToTop.style.display = "none";
    }

    if (circle) {
      circle.style.strokeDashoffset = strokeOffset;
    }
  };

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Run on load
  }

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  let counterStarted = false;

  const runCounters = () => {
    if (!counterStarted) {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = Math.ceil(target / 100);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
      counterStarted = true;
    }
  };

  // Run counters on scroll
  window.addEventListener("scroll", () => {
    const section = document.querySelector(".recovery-counter-section");
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight * 0.9) {
        runCounters();
      }
    }

    // Reveal boxes
    const boxes = document.querySelectorAll(".reveal-box");
    boxes.forEach((box) => {
      const rect = box.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        box.classList.add("active");
      } else {
        box.classList.remove("active");
      }
    });
  });

  // Contact Popup
  const openBtn = document.getElementById("openContact");
  const closeBtn = document.getElementById("closePopup");
  const popup = document.getElementById("contactPopup");

  if (openBtn && popup) {
    openBtn.addEventListener("click", function () {
      popup.style.display = "block";
    });
  }

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  }

  // Blog post animation
  const blogCards = document.querySelectorAll('.blog-card');
  const blogObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        blogObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  blogCards.forEach(card => {
    blogObserver.observe(card);
  });

  // Article animation
  const article = document.querySelector(".featured-article");
  if (article) {
    const articleObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          articleObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    articleObserver.observe(article);
  }
});
