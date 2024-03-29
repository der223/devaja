// Initialize EmailJS with your user ID
emailjs.init("hWea0aHzLzC5z2-98");

document.getElementById("checkDosen").addEventListener("change", function () {
  if (this.checked) {
    showPopupForm();
  }
});

function showPopupForm() {
  // Show the modal using Bootstrap's modal method
  const popupModal = new bootstrap.Modal(document.getElementById("popupModal"));
  popupModal.show();
}

function submitForm() {
  // Get form data
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if the password is correct
  if (password !== "sudah_dicek_dosen") {
    alert("Password incorrect. Email not sent.");
    return;
  }

  // Your EmailJS template ID
  const templateId = "template_05jhkhd";

  // Send email using EmailJS
  emailjs
    .send("default_service", templateId, {
      to_email: email,
      to_password: password,
    })
    .then(
      function (response) {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
        // You can add additional logic or actions here
      },
      function (error) {
        console.error("Email failed to send:", error);
        alert("Email failed to send. Please try again.");
        // You can add additional error handling or actions here
      }
    );

  // Hide the modal using Bootstrap's modal method
  const popupModal = new bootstrap.Modal(document.getElementById("popupModal"));
  popupModal.hide();
}
