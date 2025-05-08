// Show current date & time in footer
function updateDateTime() {
  const now = new Date();
  const dt = document.getElementById('datetime');
  if (dt) dt.textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Confirmation popup for contact form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting us!');
      form.reset();
    });
  }
}); 