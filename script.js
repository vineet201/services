// scripts for footer form

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form");
  
//     form.addEventListener("submit", function (event) {
//       // Check if all fields are filled
//       const name = document.getElementById("name").value;
//       const email = document.getElementById("email").value;
//       const phone = document.getElementById("phone").value;
//       const country = document.getElementById("countries").value;
//       const message = document.getElementById("message").value;
  
//       if (!name || !email || !phone || !country || !message) {
//         // Prevent form submission if any field is empty
//         event.preventDefault();
  
//         // Optionally, you can display an error message or highlight the empty fields
//         alert("Please fill in all fields");
//       }
//     });
//   });
  




// function validateForm() {
//     var name = document.getElementById('name').value;
//     var phone = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;

//     // Simple validation, you can enhance this based on your requirements
//     if (name === '' || phone === '' || email === '' || message === '') {
//         alert('Please fill out all fields');
//         return false;
//     }

//     submitForm();
//     return false; // Prevent the form from submitting normally
// }

function submitForm() {
    // Get form data
    var formData = $("#contactForm").serialize();

    // AJAX request to submit form data to PHP
    $.ajax({
        type: "POST",
        url: "submit_form.php",
        data: formData,
        success: function (response) {
            openThankYouMessage(); // Open the thank you message
            setTimeout(function () {
                closeThankYouMessage(); // Close the thank you message after 3 seconds
            }, 3000);
        }
    });

    return false; // Prevent the default form submission
}


function openThankYouMessage() {
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';
}

function closeThankYouMessage() {
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'none';
}

// Close the thank you message when the OK button is clicked
document.getElementById('okButton').addEventListener('click', function () {
    closeThankYouMessage();
});
