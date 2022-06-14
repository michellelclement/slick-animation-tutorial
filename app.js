const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%", //Starts animating at the start of the page.
    end: "50%", // Ends half way through the page scroll
    markers: true,
    scrub: true // Fades out nav
  }
});

tlIntro.fromTo("nav", { opacity: 1 }, { opacity: 0 }); //Fades out nav on scroll
