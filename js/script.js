
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

document.querySelectorAll(".handcraft_header_title").forEach((title) => {
    gsap.fromTo(
      title.querySelector(".line"),
      { y: "100%" }, // Start position
      {
        y: "0%", // End position
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%", // Trigger when the h2 is 80% into view
          end: "bottom 20%", // End when the h2 is 20% out of view
          toggleActions: "play none none reset", // Replay animation on enter
        },
      }
    );
});


// GSAP Animation with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".handcraft_header_description").forEach((description) => {
  const spans = description.querySelectorAll("span"); // Select all spans inside the description

  spans.forEach((span, index) => {
    gsap.fromTo(
      span,
      { y: "100%" }, // Start position
      {
        y: "0%", // End position
        duration: 2 + index * 0.5, // Staggered duration based on index
        ease: "power3.out",
        scrollTrigger: {
          trigger: description,
          start: "top 80%", // Trigger when the element is 80% into view
          end: "bottom 20%", // End when the element is 20% out of view
          toggleActions: "restart none none none", // Replay animation on enter
        },
      }
    );
  });
});


// GSAP Animation with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".contentwrap").forEach((description) => {
  const spanss = description.querySelectorAll(".testimonaltext"); // Select all spans inside the description

  spanss.forEach((span, index) => {
    gsap.fromTo(
      span,
      { y: "100%" }, // Start position
      {
        y: "0%", // End position
        duration: 2 + index * 0.5, // Staggered duration based on index
        ease: "power3.out",
        scrollTrigger: {
          trigger: description,
          start: "top 80%", // Trigger when the element is 80% into view
          end: "bottom 20%", // End when the element is 20% out of view
          toggleActions: "restart none none none", // Replay animation on enter
        },
      }
    );
  });
});


document.querySelectorAll(".contentwrap").forEach((title) => {
    gsap.fromTo(
      title.querySelector("h6"),
      { y: "100%" }, // Start position
      {
        y: "0%", // End position
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%", // Trigger when the h2 is 80% into view
          end: "bottom 20%", // End when the h2 is 20% out of view
          toggleActions: "restart none none none", // Replay animation on enter
        },
      }
    );
});

// GSAP Animation for Wrapper Content
gsap.registerPlugin(ScrollTrigger);

const wrapperContent = document.querySelector(".wrappercontent");

// Create a timeline for sequential animations
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: wrapperContent, // Start animation when .wrappercontent comes into view
    start: "top 80%", // Trigger at 80% of the viewport
    end: "bottom 20%", // End when it leaves 20% of the viewport
    toggleActions: "restart none none none", // Replay animation on re-enter
  },
});

// Add animations for each child element
tl.fromTo(
  wrapperContent.querySelector("h6"),
  { y: 50, opacity: 0 }, // Start position and opacity
  { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" } // End position and opacity
)
  .fromTo(
    wrapperContent.querySelector("h2"),
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
    "-=0.5" // Overlap timing for smoother transitions
  )
  .fromTo(
    wrapperContent.querySelector("p"),
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
    "-=0.5"
  )
  .fromTo(
    wrapperContent.querySelector(".btndesign"),
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
    "-=0.8"
  )
  .fromTo(
    wrapperContent.querySelector(".button"),
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
    "-=0.6"
  );


// GSAP Animation for Contact Footer
gsap.registerPlugin(ScrollTrigger);

const contactFooter = document.querySelector(".contactfooter");

// Create a GSAP timeline for sequential animations
const tll = gsap.timeline({
  scrollTrigger: {
    trigger: contactFooter, // Start animation when .contactfooter comes into view
    start: "top 80%", // Trigger at 80% of the viewport
    end: "bottom 20%", // End when it leaves 20% of the viewport
    toggleActions: "restart none none none", // Replay animation on re-enter
  },
});

// Animate each paragraph and the signature image
tll.fromTo(
  contactFooter.querySelectorAll("p"),
  { opacity: 0, y: 20 }, // Start position and opacity
  { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", stagger: 0.3 } // Animate sequentially with stagger
)
.fromTo(
contactFooter.querySelector(".sign img"),
{ opacity: 0, scale: 0.8, y: 20 }, // Start with scaling down and below position
{ opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.7)" } // Animate with a bounce effect
);


// GSAP Animation for Copyrights Section
gsap.registerPlugin(ScrollTrigger);

const copyrights = document.querySelector(".copyrights");

// Create a GSAP timeline for sequential animations
const cpr = gsap.timeline({
  scrollTrigger: {
    trigger: copyrights, // Start animation when .copyrights comes into view
    start: "top 90%", // Trigger when near the bottom of the viewport
    end: "bottom 20%", // End when near the top
    toggleActions: "restart none none none", // Replay animation on re-enter
  },
});

// Animate the left content
cpr.fromTo(
  copyrights.querySelector(".row"),
  { opacity: 0, y: 50 }, // Start below with opacity 0
  { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // Animate into place
);


$(document).ready(function () {
    // Wait for 3 seconds, then fade out the preloader
    setTimeout(function () {
      $(".preloader").fadeOut(500, function () {
        $(this).remove(); // Optionally remove the preloader from the DOM after fading out
      });
    }, 1000); // 3000ms = 3 seconds
});
  
  


