const shareButton = document.getElementById("share-button");
const shareOptionsDialog = document.getElementById("share-options");
shareButton.addEventListener("click", function () {
  if (shareOptionsDialog.open) {
    shareOptionsDialog.close();
  } else {
    shareOptionsDialog.show();
  }
});
