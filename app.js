// Pin the first page so second scrolls over
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false
  }
});

//Highlight page 2
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    markers: { startColor: "blue", endColor: "red" },
    scrub: true, //animates whilst scrubbing
    start: "-40%",
    end: "40%"
  }
});

//Highlight out
const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    markers: { startColor: "pink", endColor: "pink" },
    scrub: true, //animates whilst scrubbing
    start: "-20%",
    end: "60%"
  }
});

tlH.fromTo(
  ".highlight",
  { color: "rgba(255,255,255, 0.4)" },
  { color: "rgba(255,255,255, 1)", stagger: 1 }
);

tlHRemove.to(".highlight", { color: "rgba(255,255,255, 0.4)", stagger: 1 });
