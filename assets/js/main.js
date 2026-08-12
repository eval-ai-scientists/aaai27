/* Evaluating AI Scientists @ AAAI-27 — site behaviour. No dependencies. */
(function () {
  "use strict";

  /* Mobile navigation toggle */
  var toggler = document.querySelector(".navbar-toggler");
  var collapse = document.querySelector(".navbar-collapse");

  if (toggler && collapse) {
    toggler.addEventListener("click", function () {
      var open = collapse.classList.toggle("is-open");
      toggler.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.addEventListener("click", function (event) {
      if (!collapse.classList.contains("is-open")) return;
      if (collapse.contains(event.target) || toggler.contains(event.target)) return;
      collapse.classList.remove("is-open");
      toggler.setAttribute("aria-expanded", "false");
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 991) {
        collapse.classList.remove("is-open");
        toggler.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Shadow under the header once the page scrolls */
  var header = document.querySelector(".header-nav");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Reveal elements as they enter the viewport */
  var revealables = document.querySelectorAll("[data-reveal]");
  if (revealables.length) {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      revealables.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var delay = parseInt(entry.target.getAttribute("data-reveal-delay") || "0", 10);
          setTimeout(function () {
            entry.target.classList.add("is-visible");
          }, delay);
          observer.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -60px 0px", threshold: 0.05 });

      revealables.forEach(function (el) { observer.observe(el); });
    }
  }
})();
