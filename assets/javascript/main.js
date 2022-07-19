document.addEventListener("DOMContentLoaded", () => {
  //wait for content to load on page

  // hide navbar while scrolling down
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  };

  // adds night mode feature
  const checkbox = document.getElementById("checkbox");

  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("night");
    let socials = document.getElementsByClassName("social");
    for (let i = 0; i < socials.length; i++) {
      let el = socials[i];
      el.classList.toggle("night");
    }
  });

  // adds formatted json object into terminal
  let educationObj = {
    "CUNY Macaulay Honors": {
      major: "Chemistry Honors",
      graduation: "May 2021",
    },
    "App Academy": {
      certificate: "Full-Stack Software Engineer",
      graduation: "July 2022",
    },
  };
  let educationel = document.getElementById("educationel");
  educationel.insertAdjacentHTML(
    "afterbegin",
    JSON.stringify(educationObj, null, 4)
  );

  // adds autofocus on terminal input field including links to it
  const focusInput = () => {
    let el = document.getElementById("terminal-input");
    setTimeout(() => el.focus({ preventScroll: true }), 0);
  };
  focusInput();

  let aboutLink = document.getElementById("nav-about");
  aboutLink.addEventListener("click", focusInput);

  let aboutarrow = document.getElementById("angle-down-about");
  aboutarrow.addEventListener("click", focusInput);

  // handle revealing items on scroll
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 5;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  reveal();
});
