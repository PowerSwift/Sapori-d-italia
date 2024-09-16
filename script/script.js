
document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        gsap.to(item, { duration: 0.3, scale: 1.2 });
    });
    item.addEventListener("mouseleave", () => {
        gsap.to(item, { duration: 0.3, scale: 1 });
    });
});
