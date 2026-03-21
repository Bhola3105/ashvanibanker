
/* TESTIMONIAL SLIDER */

let testimonials = document.querySelectorAll(".testimonial");

let index = 0;

function showTestimonials(){

for(let i = 0; i < testimonials.length; i++){
testimonials[i].classList.remove("active");
}

testimonials[index].classList.add("active");

index++;

if(index >= testimonials.length){
index = 0;
}

}

/* Change testimonial every 3 seconds */

setInterval(showTestimonials,3000);

/* Run first testimonial */

showTestimonials();

