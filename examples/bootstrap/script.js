// document.getElementById("header").load("header.html");
// document.getElementById("footer").load("footer.html");

fetch('header.html')
  .then(response => response.text())
  .then(text => document.getElementById("header").innerHTML += text)

  fetch('footer.html')
  .then(response => response.text())
  .then(text => document.getElementById("footer").innerHTML += text)