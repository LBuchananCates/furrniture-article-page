const shareButton = document.getElementById("share-button");
const shareOptionsDialog = document.getElementById("share-options");
shareButton.addEventListener("click", function () {
  if (shareOptionsDialog.open) {
    shareOptionsDialog.close();
    shareButton.classList.toggle("active");
  } else {
    shareOptionsDialog.show();
    shareButton.classList.toggle("active");
  }
});
