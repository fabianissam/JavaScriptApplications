function toggleEmail() {
  var x = document.querySelector("#subscribe");
  if (x.checked) {
    document.getElementById("emailpara").style.display = "inline";
  }
}

document.getElementById("subscribe").onclick = toggleEmail;

// window.alert("Yep, my function is being called");
