
let flag = 2;

function controller(x) {
    let slides = document.getElementsByClassName("slide");
    flag = (flag + x + slides.length) % slides.length;

    slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
    let slides = document.getElementsByClassName("slide");
    for(let y of slides){
        y.style.display = "none";
    }
    slides[num].style.display = 'block';
}

// Assuming your next button has the id 'next'
document.getElementById('next').addEventListener('click', function() {
    controller(1); // Go to the next slide
});

// Assuming your previous button has the id 'prev'
document.getElementById('prev').addEventListener('click', function() {
    controller(-1); // Go to the previous slide
});
