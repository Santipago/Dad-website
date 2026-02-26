let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length){
        slideIndex = 1
    }
    
    if (n < 1){
    slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
        console.log("n value:", n)
        console.log("Slide length:", slides.length)
        console.log("Current slide index:", slideIndex)
        slides[slideIndex - 1].style.display = "block";
}

//.style means you're modifying the code in css directly in js