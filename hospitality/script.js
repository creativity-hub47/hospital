// Custom JS for Slider
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 8000 // Change image every 8 seconds
    });
});

// function redirectToBooking() {
//     window.location.href = "book.html";
// }


// == nav book btn ==
function redirectToBooking() {
    document.querySelector(".nav-button").classList.add("clicked");
    setTimeout(() => {
        window.location.href = "book.html";
    }, 300);
}

//  == register ==
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


 // ===gallery ===
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Open Lightbox on click
  galleryItems.forEach(item => {
      item.addEventListener("click", function () {
          const imgSrc = this.getAttribute("data-image");
          lightboxImg.src = imgSrc;
          lightbox.classList.add("active");
      });
  });
  // Close lightbox
  window.closeLightbox = function () {
      lightbox.classList.remove("active");
  };

  // Close lightbox when clicking outside image
  lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
          closeLightbox();
      }
  });
});

// ====contact ===

$(document).ready(function () {
  $(".successBox").hide(); // Hide success message initially

  $("form").submit(function (e) {
      e.preventDefault(); // Prevent default form submission

      let isValid = true;
      $("input, textarea").each(function () {
          if ($(this).val().trim() === "") {
              $(this).css("border", "2px solid #e74c3c"); // Highlight empty fields
              isValid = false;
          } else {
              $(this).css("border", "2px solid #ddd"); // Reset border color
          }
      });

      if (isValid) {
          $(".successBox").fadeIn().delay(3000).fadeOut(); // Show success message
          $("form")[0].reset(); // Reset form after successful submission
      }
  });

  $(".close").click(function () {
      $(".successBox").fadeOut(); // Hide success box when close button is clicked
  });
});

