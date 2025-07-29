// Reveal cards and animate lists on scroll
document.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.classList.add("visible");
            card.querySelectorAll("li").forEach((li, i) => {
                setTimeout(() => li.classList.add("visible"), i * 200);
            });
        }
    });
});
