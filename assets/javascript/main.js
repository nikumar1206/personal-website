document.addEventListener("DOMContentLoaded", () => {
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

  let inputfield = document.getElementById("terminal-input");
  inputfield.focus({ preventScroll: true });

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
  const focusInput = () => {
    let el = document.getElementById("terminal-input");
    setTimeout(() => el.focus({ preventScroll: true }), 0);
  };

  let aboutLink = document.getElementById("nav-about");
  aboutLink.addEventListener("click", focusInput);

  let aboutarrow = document.getElementById("angle-down-about");
  aboutarrow.addEventListener("click", focusInput);
});
