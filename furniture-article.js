function showShareOptions() {
  var x = document.getElementById("share-options");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

document.addEventListener("click", function clickOutside(event) {
  let shareButton = document.getElementById("share-button");
  const socialMediaOptions = document.getElementById("share-options");
  if (!shareButton.contains(event.target)) {
    socialMediaOptions.style.display = "none";
  }
});
