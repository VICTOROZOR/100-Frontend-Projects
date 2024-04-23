const itemHeaders = document.querySelectorAll(".accordion-item-header");

itemHeaders.forEach((accordion) => {
  accordion.addEventListener("click", collapseAccordions);
  function collapseAccordions() {
    const activeAccordion = document.querySelector(".active");
  }
});
