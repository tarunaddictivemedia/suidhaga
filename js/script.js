
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



// Wait for 3 seconds, then fade out the preloader
setTimeout(function () {
  $(".preloader").fadeOut(500, function () {
    $(this).remove(); // Optionally remove the preloader from the DOM after fading out
  });
}, 1000); // 3000ms = 3 seconds




gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".suidhagaddjourney p span", 
    {
        opacity: 0.4, 
        y: 20 
    }, 
    {
        opacity: 1, 
        y: 0, 
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".suidhagaddjourney",
            start: "top 80%",  // Adjust as necessary
            end: "bottom 20%",
            scrub: 1
        }
    }
);



// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

// Select the parent section and all countbox elements
const section = document.querySelector(".countersection"); // Assuming ".countersection" is the parent section containing countboxes

if (section) {
  const countboxes = section.querySelectorAll(".countbox"); // Select all countbox elements inside the section

  // Create a ScrollTrigger for the entire section
  ScrollTrigger.create({
    trigger: section, // Trigger animation when this section comes into view
    start: "top 80%", // Start animation when the top of the section enters 80% of the viewport
    onEnter: () => {
      // Loop through each countbox and animate
      countboxes.forEach((countbox, i) => {
        const delay = i * 0.3; // Add a delay for staggered animations
        const timeline = gsap.timeline();

        // Animate the count element
        timeline.fromTo(
          countbox.querySelector(".count"), // Target the count element
          { y: 50, opacity: 0 }, // Start position and opacity
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: delay } // End position and opacity
        );

        // Animate the h6 element
        timeline.fromTo(
          countbox.querySelector("h6"), // Target the h6 element
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.3" // Overlap timing for smoother transitions
        );

        // Animate the paragraph element
        timeline.fromTo(
          countbox.querySelector("p"), // Target the paragraph element
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.3"
        );
      });
    },
  });
}



$(".mommentscapturedslider").slick({
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: 0,
  initialSlide: 3,
  variableWidth: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});


// Register ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger);

// Animation for Wrapper Content in the ".traditionelegance" section
const sectionlegance = document.querySelector(".traditionelegance");
if (sectionlegance) {
  const countboxeslegance = sectionlegance.querySelectorAll(".traditioncontent");

  ScrollTrigger.create({
    trigger: sectionlegance, // Correct trigger reference
    start: "top 80%", // Start animation when the section enters 80% of the viewport
    onEnter: () => {
      countboxeslegance.forEach((countboxlegance, i) => {
        const delay = i * 0.3; // Stagger animations
        gsap.timeline()
          .fromTo(
            countboxlegance.querySelector("h6"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: delay }
          )
          .fromTo(
            countboxlegance.querySelector("h2"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
            "-=0.3" // Overlap timing for smooth transitions
          )
          .fromTo(
            countboxlegance.querySelector(".button"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
            "-=0.3"
          );
      });
    },
  });
}

// Animation for Wrapper Content in the ".imageboxes" section
const sectioncollege = document.querySelector(".imageboxes");
if (sectioncollege) {
  const imageanimated = sectioncollege.querySelectorAll(".imagefirstcollege");

  ScrollTrigger.create({
    trigger: sectioncollege, // Correct trigger reference
    start: "top 80%", // Start animation when the section enters 80% of the viewport
    onEnter: () => {
      imageanimated.forEach((imageanimate, i) => {
        const delay = i * 0.3; // Stagger animations
        gsap.timeline()
          .fromTo(
            imageanimate.querySelector(".imageleft"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: delay }
          )
          .fromTo(
            imageanimate.querySelector(".imagecenter"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
            "-=0.3" // Overlap timing for smooth transitions
          )
          .fromTo(
            imageanimate.querySelector(".imageright"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
            "-=0.3"
          );
      });
    },
  });
}



// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

// Select the parent section and all heading box elements
const collegeboxes = document.querySelector(".imageboxes"); // Assuming ".imageboxes" is the container
if (collegeboxes) {
  const boxhead = collegeboxes.querySelectorAll(".headingboximg"); // All headingboximg elements

  // Check if the elements are selected correctly
  console.log(collegeboxes, boxhead);

  // Create a ScrollTrigger instance
  ScrollTrigger.create({
    trigger: collegeboxes, // Trigger animation when this section comes into view
    start: "top 80%", // Start animation when the section enters 80% of the viewport
    onEnter: () => {
      // Loop through each heading box and animate
      boxhead.forEach((headbox, k) => {
        const delay = k * 0.3; // Add a delay for staggered animations

        // Use gsap.fromTo directly
        const h3Element = headbox.querySelector("h3");
        if (h3Element) {
          gsap.fromTo(
            h3Element, // Target the h3 inside each headingbox
            { y: 50, opacity: 0 }, // Start position and opacity
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: delay } // End position and opacity
          );
        }
      });
    },
  });
} 


// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

// Animation for Wrapper Content in the ".imageboxes" section
const Imagesblocks = document.querySelector(".imageboxes");
if (Imagesblocks) {
  const blockanimate = Imagesblocks.querySelectorAll(".Imagesblocks");

  ScrollTrigger.create({
    trigger: Imagesblocks, // Correct trigger reference
    start: "top 80%", // Start animation when the section enters 80% of the viewport
    onEnter: () => {
      blockanimate.forEach((blockanima, m) => {
        const delay = m * 0.3; // Stagger animations
        gsap.timeline()
          .fromTo(
            blockanima.querySelector(".imageleft"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: delay }
          )
          .fromTo(
            blockanima.querySelector(".imagecenter"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.3" // Overlap timing for smooth transitions
          )
          .fromTo(
            blockanima.querySelector(".imageright"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.3"
          );
      });
    },
  });
}


// GSAP Animation for Wrapper Content
gsap.registerPlugin(ScrollTrigger);

// Select the parent section and all countbox elements
const craftmandrivenluxury = document.querySelector(".craftmandrivenluxury"); // Assuming ".row" is the craftmandrivenluxury containing the countboxes
const craftmandrivenheading = craftmandrivenluxury.querySelectorAll(".headingbox");

// Create a ScrollTrigger for the entire craftmandrivenluxury
ScrollTrigger.create({
  trigger: craftmandrivenluxury, // Trigger animation when this section comes into view
  start: "top 80%", // Start animation when the section enters 80% of the viewport
  onEnter: () => {
    // Loop through each countbox and animate
    craftmandrivenheading.forEach((head, j) => {
      const delay = j * 0.3; // Add a delay for staggered animations
      gsap.timeline()
        .fromTo(
          head.querySelector("h2"),
          { y: 50, opacity: 0 }, // Start position and opacity
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: delay } // End position and opacity
        )
        .fromTo(
          head.querySelector("p"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.3" // Overlap timing for smoother transitions
        );
    });
  },
});

// GSAP Animation for Wrapper Content
gsap.registerPlugin(ScrollTrigger);

// Select the parent section and all countbox elements
const mommentscaptured = document.querySelector(".mommentscaptured"); // Assuming ".row" is the mommentscaptured containing the countboxes
const heading = mommentscaptured.querySelectorAll(".headingbox");

// Create a ScrollTrigger for the entire mommentscaptured
ScrollTrigger.create({
  trigger: mommentscaptured, // Trigger animation when this section comes into view
  start: "top 80%", // Start animation when the section enters 80% of the viewport
  onEnter: () => {
    // Loop through each countbox and animate
    heading.forEach((head, j) => {
      const delay = j * 0.3; // Add a delay for staggered animations
      gsap.timeline()
        .fromTo(
          head.querySelector("h2"),
          { y: 50, opacity: 0 }, // Start position and opacity
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: delay } // End position and opacity
        )
        .fromTo(
          head.querySelector("p"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.3" // Overlap timing for smoother transitions
        );
    });
  },
});


// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

// Select the section and its elements
const traditionSection = document.querySelector(".traditionelegance");

if (traditionSection) {
  const traditionContent = traditionSection.querySelector(".traditioncontent");
  const traditionHeading = traditionContent.querySelector("h6");
  const traditionSubheading = traditionContent.querySelector("h2");
  const blockBtns = traditionSection.querySelectorAll(".blockbtn li");
  const traditionParagraph = traditionSection.querySelector(".col-2 p");

  ScrollTrigger.create({
    trigger: traditionSection, // Trigger animation when this section comes into view
    start: "top 80%", // Start when the top of the section enters 80% of the viewport
    onEnter: () => {
      // Animate heading and subheading
      gsap.timeline()
        .fromTo(
          traditionHeading,
          { y: 50, opacity: 0 }, // Start position and opacity
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" } // End position and opacity
        )
        .fromTo(
          traditionSubheading,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.3" // Overlap timing for smooth transitions
        );

      // Animate buttons with staggered effect
      gsap.fromTo(
        blockBtns,
        { y: 50, opacity: 0 }, // Start position and opacity
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.2 }, // Staggered animation
        "-=0.3"
      );

      // Animate the paragraph
      gsap.fromTo(
        traditionParagraph,
        { y: 50, opacity: 0 }, // Start position and opacity
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.2 } // End position and opacity
      );
    },
  });
}




