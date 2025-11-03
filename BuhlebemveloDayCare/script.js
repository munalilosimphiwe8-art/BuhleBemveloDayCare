const buttons = document.querySelectorAll('.accordion-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
// LIGHTBOX GALLERY
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let type = document.getElementById("messageType").value;
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || type === "" || message.length < 10) {
    document.getElementById("response").innerText = "Please fill all fields correctly.";
    document.getElementById("response").style.color = "red";
  } else {
    document.getElementById("response").innerText = "Message sent successfully. We will respond soon.";
    document.getElementById("response").style.color = "green";

    contactForm.reset();
  }
});
// ENQUIRY FORM VALIDATION + RESPONSE
const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("enqName").value.trim();
  let email = document.getElementById("enqEmail").value.trim();
  let type = document.getElementById("enqType").value;
  let message = document.getElementById("enqMessage").value.trim();

  if (name === "" || email === "" || type === "" || message.length < 5) {
    document.getElementById("enquiryResponse").innerText = "Please complete all fields correctly.";
    document.getElementById("enquiryResponse").style.color = "red";
  } else {

    let feedbackText = "";

    if(type === "fees"){
      feedbackText = "Thank you! Our admin will email you a fee structure for the age group you are asking about.";
    }
    if(type === "availability"){
      feedbackText = "Thank you! We will confirm which classes still have space and reply to your email soon.";
    }
    if(type === "volunteer"){
      feedbackText = "Thank you! Our management team will review your request and contact you regarding volunteering/sponsorship opportunities.";
    }

    document.getElementById("enquiryResponse").innerText = feedbackText;
    document.getElementById("enquiryResponse").style.color = "green";

    enquiryForm.reset();
  }
});
