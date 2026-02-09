document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const section = document.querySelector(this.hash);
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your Message has been sent.");
  form.reset();
});