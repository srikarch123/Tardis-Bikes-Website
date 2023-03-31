let rating = 0;
function rate(num) {
  rating = num;
  for (let i = 1; i <= 5; i++) {
    const star = document.querySelector(`.stars .star:nth-child(${i})`);
    if (i <= num) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  }
}
function submitFeedback() {
  const message = document.getElementById("message").value;
  const wordCount = message.trim().split(/\s+/).length;
  alert(`Your message has ${wordCount} words and your rating is ${rating} stars.`);
}
