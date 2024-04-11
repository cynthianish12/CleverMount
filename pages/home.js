document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000 // Change slide every 3 seconds
    });
});