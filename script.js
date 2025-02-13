// Image gallery previous & next buttons
var images = ["2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg"];
var currentImageIndex = 0;

var propertyImage = document.getElementById("propertyImage");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
  propertyImage.src = images[currentImageIndex];
});

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
  propertyImage.src = images[currentImageIndex];
});


//clicking in the gallery opens the image in a modal
var galleryImages = document.querySelectorAll(".gallery img");
var modal = document.getElementById("modal");
var modalImage = document.getElementById("modalImage");
var modalClose = document.getElementById("modalClose");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = img.src;
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});


// Apartment details
var apartmentDetails = {
  name: "Luxury Duplex for sale in London, United Kingdom",
  location: "in London, United Kingdom",
  price: "$ 18,348,300",
  description: "Lying on the seventh and eighth floors, the apartment is flooded with natural light and soaring nine-and-a-half-foot ceilings. The expansive open-plan living area, with solid wood floors, flows effortlessly onto two private terraces—one west-facing and the other north-facing—through large French doors, which frame breathtaking views. The bespoke kitchen by Arclinea B&B Italia is fitted with Wolf and Sub-Zero appliances, including an induction hob, downdraft extractor, and integrated fridge-freezer, as well as a Miele dishwasher. Quartzite worktops and splashbacks enhance the minimalist design. The principal bedroom lies on this level and has a living area, a vast walk-in wardrobe and a beautiful ensuite bathroom. Upstairs, are two generously sized double bedrooms bathed in natural light and have built-in storage. The three marble bathrooms feature a neutral palette. A study area tucked beneath the stairs provides a quiet workspace."
};


// Save button 
var saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
  var propertyDetails = {
    title: "Luxury Duplex for sale in London",
    price: "$18,348,300",
    location: "London, United Kingdom",
  };
  localStorage.setItem("savedProperty", JSON.stringify(propertyDetails));
  alert("Apartment saved successfully!");
});


// Share button 
document.getElementById("shareBtn").addEventListener("click", () => {
  var shareData = {
    title: apartmentDetails.name,
    text: `Check out this apartment: ${apartmentDetails.name} in ${apartmentDetails.location}. Price: ${apartmentDetails.price}`,
    url: location.href, // The current page URL
  };

  // Use the Web Share API (modern browsers)
  if (navigator.share) {
    navigator.share(shareData)
      .then(() => console.log("Apartment shared successfully!"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
    // Fallback for older browsers
    alert("Your browser does not support the Share API.");
    navigator.clipboard.writeText(shareData.url).then(() => {
      alert("Link copied to clipboard!");
    });
  }
});


//default email client
var emailButton = document.getElementById("emailButton");

emailButton.addEventListener("click", () => {
  var recipient = "example@example.com";
  var subject = encodeURIComponent("Inquiry about Luxury Apartment");
  var body = encodeURIComponent(
    "Hello,\n\nI am interested in the Luxury Duplex apartment. Please provide me with more information.\n\nThank you!"
  );
  location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});


// open WhatsApp
var whatsappButton = document.getElementById("whatsappButton");

whatsappButton.addEventListener("click", () => {
  var phoneNumber = "1234567890";
  var message = encodeURIComponent(
    "Hello, I am interested in the Luxury Duplex apartment. Can you provide me with more details?"
  );

  open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
});


//Review Functionality
var reviewsContainer = document.getElementById("reviews");
var reviewInput = document.getElementById("reviewInput");
var addReviewButton = document.getElementById("addReview");

addReviewButton.addEventListener("click", () => {
  var reviewText = reviewInput.value.trim();

  if (reviewText === "") {
    alert("Please write a review before submitting!");
    return;
  }

  // Create a new review element
  var reviewElement = document.createElement("div");
  reviewElement.className = "review";
  reviewElement.textContent = reviewText;

  // Append to the reviews container
  reviewsContainer.appendChild(reviewElement);

  // Clear the input field
  reviewInput.value = "";
});


//validate the contact form
var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }
  document.getElementById("formResponse").innerText =
    "Thank you for your message!";
  contactForm.reset();
});










































