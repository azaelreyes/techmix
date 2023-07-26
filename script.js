function copyURLToClipboard() {
    const urlToCopy = "https://azaelreyes.github.io/techmix/";

    // Replace this with the actual URL you want to copy
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.setAttribute("value", urlToCopy);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Show the custom alert to notify the user
    const customAlertOverlay = document.getElementById("customAlertOverlay");
    customAlertOverlay.style.display = "flex";

    // Hide the custom alert after 2 seconds (optional)
    setTimeout(function () {
        customAlertOverlay.style.display = "none";
    }, 1000);
}