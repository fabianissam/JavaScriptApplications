function toggleEmail() {
  var x = document.querySelector("#subscribe");
  var y = document.getElementById("emailpara");
  if (x.checked) {
    y.style.display = "inline";
  } else {
    y.style.display = "none";
  }
}

document.getElementById("subscribe").onclick = toggleEmail;

// window.alert("Yep, my function is being called");
