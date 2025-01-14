
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".contentpara p span", 
    {
        opacity: 0.4, 
        y: 20 
    }, 
    {
        opacity: 1, 
        y: 0, 
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".contentpara",
            start: "top 80%",  // Adjust as necessary
            end: "bottom 20%",
            scrub: 1
        }
    }
);

$(document).ready(function() {
    var videos = $('.handcraftedwithloveslider .video');

    // On mouseenter, play the hovered video and pause others
    videos.on('mouseenter', function() {
        // Pause all videos first
        videos.each(function() {
            this.pause();
        });
        // Play the hovered video
        $(this)[0].play();
    });

    // On mouseleave, pause the hovered video
    videos.on('mouseleave', function() {
        $(this)[0].pause();
    });
});

$('.foundermessageslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});
$('.bannerslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true, // Enable fade effect
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay interval to 2 seconds (2000 ms)
    speed: 1000, // Fade transition speed (in ms)
    easing: 'ease', // Easing function for the fade transition
});

$(document).ready(function() {
    // Show the navbar on clicking the humburgur
    $('.humburgur').on('click', function() {
        $('.navbar-col').fadeIn(); // Show the navbar with a fade effect
    });

    // Hide the navbar on clicking the close button
    $('.close').on('click', function() {
        $('.navbar-col').fadeOut(); // Hide the navbar with a fade effect
    });
});





