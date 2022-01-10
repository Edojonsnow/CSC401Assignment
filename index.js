

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.fromTo(".hello2", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 1  },"-=1");
tl.fromTo("#Skills", { opacity: 0 }, { opacity: 1, duration: 2  },"-=1");
