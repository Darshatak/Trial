document.addEventListener("DOMContentLoaded", function () {
  // Log clicks on product cards
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      console.log("Product clicked:", this.querySelector("h3").textContent);
    });
  });

  // Log form submissions
  const contactForm = document.querySelector("#contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted");
    // Add form submission logic here
  });
});
