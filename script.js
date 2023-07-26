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

    // Hide the custom alert after 2 seconds
    setTimeout(function () {
        customAlertOverlay.style.display = "none";
    }, 1000);
}


// This is for the countdown portion
const getCountdownParagraph = document.getElementById("countdownOutput");

window.addEventListener("load", countdown);

function countdown() {
    const eventDate = new Date('July 28, 2023 18:00:00');
    const today = new Date();

    const timeLeft = eventDate.getTime() - today.getTime();

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft <= 0) {
        document.getElementById("countdownTitle").innerText = "Registration has closed";
        getCountdownParagraph.innerText = "0d 0h 0m 0s";
        document.getElementById("regBtnDiv").style.display = "none";
        return;
    }
    let str = daysLeft + "d " + hoursLeft + "h "
        + minutesLeft + "m " + secondsLeft + "s ";
    getCountdownParagraph.innerText = str;

    setTimeout(countdown, 1000);
}