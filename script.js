// Forde Digital Website

console.log("Forde Digital loaded");


// Smooth scrolling
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});