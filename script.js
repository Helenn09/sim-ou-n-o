document.getElementById("yes").addEventListener("click", function() {
  document.getElementById("answer").style.display = "block";
  document.getElementById("question").style.display = "none";
});

document.getElementById("no").addEventListener("click", function() {
  document.getElementById("answer").style.display = "none";
  document.getElementById("question").style.display = "none";
  alert("Tudo bem! :)");
});
