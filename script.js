document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  console.log("Sending data to Firebase:", { name, email, message });

  // Save to Firebase
  firebase.database().ref('contacts').push({
    name: name,
    email: email,
    message: message
  }).then(() => {
    console.log("Data successfully written!");
    document.getElementById('successMessage').innerText = 'Thank you! We’ll get in touch shortly.';
    document.getElementById('contactForm').reset();
  }).catch((error) => {
    console.error("Firebase error:", error);
    alert("There was a problem sending your message. Please try again.");
  });
});
