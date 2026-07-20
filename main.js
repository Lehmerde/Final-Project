document.addEventListener("DOMContentLoaded", () => {
    
    const currentOpenedFile = window.location.pathname.split("/").pop();
    const allHeaderLinks = document.querySelectorAll(".navbar-nav .nav-link");

    allHeaderLinks.forEach(individualLink => {
    
        individualLink.classList.remove("active", "brand-orange-text");
        
        if (individualLink.getAttribute("href") === currentOpenedFile || (currentOpenedFile === "" && individualLink.getAttribute("href") === "index.html")) {
            individualLink.classList.add("active", "brand-orange-text");
        }
    });


    const allAnimatedCards = document.querySelectorAll(".promo-card-container");
    
    allAnimatedCards.forEach(singleCard => {
        singleCard.style.opacity = "0";
        singleCard.style.transform = "translateY(25px)";
        singleCard.style.transition = "all 0.5s ease-out";
    });

    const checkScrollPositionAndAnimate = () => {
        const viewportTriggerLine = window.innerHeight * 0.85;
        
        allAnimatedCards.forEach(singleCard => {
            const cardTopPosition = singleCard.getBoundingClientRect().top;
            
            if (cardTopPosition < viewportTriggerLine) {
                singleCard.style.opacity = "1";
                singleCard.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", checkScrollPositionAndAnimate);
    checkScrollPositionAndAnimate(); 
});