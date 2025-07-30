
// Scroll btn 

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.querySelector(".scroll-btn");

  scrollBtn.addEventListener("click", () => {
    // Scroll 300px on mobile, full screen height on desktop
    const isMobile = window.innerWidth <= 768;
    const scrollAmount = isMobile ? 300 : window.innerHeight;

    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth"
    });
  });
});




// Sticky header
document.addEventListener("DOMContentLoaded", () => {
  const headBar = document.querySelector(".head-bar2");

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) { // threshold
      headBar.classList.remove("active"); // show menu
    } else {
      headBar.classList.add("active"); // hide menu
    }
  });
});



// About Cloud Opening animation

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".cloud-section"); // select all elements with class "cloud-section"

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-cloud"); // add class to the element that intersected
        }
      });
    },
    { threshold: 0.5 } // Adjust visibility threshold if needed
  );

  sections.forEach(section => {
    observer.observe(section); // observe each element with the class
  });
});



// Technology image animation 




// animation- circle

document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".animation-circle");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-stomp");
        observer.unobserve(entry.target); // only once
      }
    });
  }, {
    threshold: 0.5 // adjust for sensitivity
  });

  circles.forEach(circle => observer.observe(circle));
});



// News button display - scroll

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".news-card");
  const previousButton = document.querySelector(".previous");
  const nextButton = document.querySelector(".next");

  const cardWidth = 436 + 16; // card width + gap

  function updateButtonsOpacity() {
    const scrollLeft = scrollContainer.scrollLeft;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // If at very start
    if (scrollLeft <= 0) {
      previousButton.style.opacity = "0.3";
      previousButton.style.pointerEvents = "none"; // disable click
    } else {
      previousButton.style.opacity = "1";
      previousButton.style.pointerEvents = "auto";
    }

    // If at very end (or close to it)
    if (scrollLeft >= maxScrollLeft - 1) {
      nextButton.style.opacity = "0.3";
      nextButton.style.pointerEvents = "none";
    } else {
      nextButton.style.opacity = "1";
      nextButton.style.pointerEvents = "auto";
    }
  }

  previousButton.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -cardWidth,
      behavior: "smooth"
    });
  });

  nextButton.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: cardWidth,
      behavior: "smooth"
    });
  });

  // Update button opacity on scroll
  scrollContainer.addEventListener("scroll", updateButtonsOpacity);

  // Initial update
  updateButtonsOpacity();
});



// Publication card scroll


document.addEventListener("DOMContentLoaded", function () {
  const PubscrollContainer = document.querySelector(".Publication-card");
  const PubpreviousButton = document.querySelector(".pub-previous");
  const PubnextButton = document.querySelector(".pub-next");

  const PubcardWidth = 436 + 16; // card width + gap

  function updatePubButtonsOpacity() {
    const scrollLeft = PubscrollContainer.scrollLeft;
    const maxScrollLeft = PubscrollContainer.scrollWidth - PubscrollContainer.clientWidth;

    // If at very start
    if (scrollLeft <= 0) {
      PubpreviousButton.style.opacity = "0.3";
      PubpreviousButton.style.pointerEvents = "none";
    } else {
      PubpreviousButton.style.opacity = "1";
      PubpreviousButton.style.pointerEvents = "auto";
    }

    // If at very end
    if (scrollLeft >= maxScrollLeft - 1) {
      PubnextButton.style.opacity = "0.3";
      PubnextButton.style.pointerEvents = "none";
    } else {
      PubnextButton.style.opacity = "1";
      PubnextButton.style.pointerEvents = "auto";
    }
  }

  PubpreviousButton.addEventListener("click", () => {
    PubscrollContainer.scrollBy({
      left: -PubcardWidth,
      behavior: "smooth"
    });
  });

  PubnextButton.addEventListener("click", () => {
    PubscrollContainer.scrollBy({
      left: PubcardWidth,
      behavior: "smooth"
    });
  });

  PubscrollContainer.addEventListener("scroll", updatePubButtonsOpacity);

  // Initial update
  updatePubButtonsOpacity();
});


// Demo Card animation 
document.addEventListener("DOMContentLoaded", function () {
  const demoScrollContainer = document.querySelector(".demo-container");
  const demoCards = document.querySelectorAll(".demo-card");
  const demoDots = document.querySelectorAll(".dot");
  const demoPreviousButton = document.querySelector(".demo-previous");
  const demoNextButton = document.querySelector(".demo-next");

  let currentIndex = 0;

  function updateButtonOpacity() {
    const maxIndex = demoCards.length - 1;

    demoPreviousButton.style.opacity = currentIndex === 0 ? "0.3" : "1";
    demoPreviousButton.style.pointerEvents = currentIndex === 0 ? "none" : "auto";

    demoNextButton.style.opacity = currentIndex === maxIndex ? "0.3" : "1";
    demoNextButton.style.pointerEvents = currentIndex === maxIndex ? "none" : "auto";
  }

  function updateActiveCardDot(index) {
    demoCards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });
    demoDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

function scrollToCard(index) {
  const card = demoCards[index];
  const containerWidth = demoScrollContainer.clientWidth;
  const maxScrollLeft = demoScrollContainer.scrollWidth - containerWidth;

  let scrollLeft = card.offsetLeft - (containerWidth / 2) + (card.clientWidth / 2);

  // Clamp scrollLeft to valid range
  if (scrollLeft < 0) scrollLeft = 0;
  if (scrollLeft > maxScrollLeft) scrollLeft = maxScrollLeft;

  demoScrollContainer.scrollTo({
    left: scrollLeft,
    behavior: "smooth",
  });

  currentIndex = index;
  updateButtonOpacity();
  updateActiveCardDot(index);
}

  demoPreviousButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }
  });

  demoNextButton.addEventListener("click", () => {
    if (currentIndex < demoCards.length - 1) {
      scrollToCard(currentIndex + 1);
    }
  });

  demoDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      scrollToCard(index);
    });
  });

  demoScrollContainer.addEventListener("scroll", () => {
    const containerCenter = demoScrollContainer.scrollLeft + (demoScrollContainer.clientWidth / 2);
    let closestIndex = 0;
    let minDistance = Infinity;

    demoCards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== currentIndex) {
      currentIndex = closestIndex;
      updateActiveCardDot(currentIndex);
      updateButtonOpacity();
    }
  });

  scrollToCard(0); // Initialize to center the first card
});




// ham-menu / background

document.addEventListener("DOMContentLoaded", () => {
  const hamBar = document.querySelector(".ham-bar");
  const hamMenu = document.querySelector(".ham-menu");
  const headBar = document.querySelector(".head-bar");

  hamBar.addEventListener("click", () => {
    hamBar.classList.toggle("active");
    hamMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");

    // Apply blur background to head-bar when ham-bar is active
    if (hamBar.classList.contains("active")) {
      headBar.classList.add("blur-background");
    } else {
      headBar.classList.remove("blur-background");
    }
  });
});




// language switch
document.querySelectorAll('.lang-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove active class from all
    document.querySelectorAll('.lang-link').forEach(l => l.classList.remove('active'));

    // Add active to clicked
    link.classList.add('active');
  });
});



//head-bar

// Sticky header
document.addEventListener("DOMContentLoaded", () => {
 const stickyHeader = document.querySelector(".head-bar");
 const scrollThreshold = window.innerHeight * 0.1; // adjust as needed

window.addEventListener("scroll", () => {
 if (window.scrollY > scrollThreshold) {
   stickyHeader.classList.add("show-header");
  } else {
   stickyHeader.classList.remove("show-header");
   }
 });
});

