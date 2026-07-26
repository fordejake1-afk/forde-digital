// Forde Digital Website

console.log("Forde Digital loaded");


// Smooth scrolling

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});




// Scroll reveal animation

const cards = document.querySelectorAll(".card");
const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });


});



cards.forEach(card => {

    observer.observe(card);

});


sections.forEach(section => {

    observer.observe(section);

});