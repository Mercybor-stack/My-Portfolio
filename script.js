// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const messageElement = document.getElementById("formMessage");

  messageElement.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
  messageElement.style.color = "pink";

  this.reset();
});
