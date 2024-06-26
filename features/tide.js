/**
 * This JavaScript file is designed totally by Xinyang Cheng during the secret update and is built ONLY for the 404 page.
 */

function alwaysNight() {
    document.body.setAttribute("data-theme", "dark_theme");
}

function showAlert() {
    hideButton = document.getElementById('theButton').onclick = null; // disable the button
    alertMsg = document.getElementById('reload-for-first');
    alertMsg.style.display = 'block';
    setTimeout(() => {
        startFading();
    }, 2000);
}

function startFading() {
    processElement(0);

    setTimeout( () => {
        alert("🚨 Reload failed!")
        startAdding();
    }, 6000);
}
function processElement(index) {
    const disappearingArray = Array.from(document.getElementsByClassName('before-clicked'));
    if (index < disappearingArray.length) {
        const element = disappearingArray[index];
        element.classList.add('fade-out');
        setTimeout(() => {
            element.style.display = 'none';
            processElement(index + 1);
        }, 1500);
    }
}

function startAdding() {
    const addElement = document.getElementById('after-clicked');
    addElement.classList.add('fade-in');
    addElement.style.display = 'block';
}

function sendBack() {
    const alertMsg2 = document.getElementById('reload-for-second');
    const alertMsg3 = document.getElementById('reload-for-third');
    const hidedButton = document.getElementById('theButton2');
    hidedButton.style.display = 'none';
    alertMsg2.style.display = 'block';

    setTimeout(() => {
        alertMsg2.style.display = 'none';
        alertMsg3.style.display = 'block';
        // var link = document.createElement('a');
        // link.href = 'https://xinyang-cheng.com/';
        // link.innerText = '<RETURN>';
        // var container = document.getElementById('reload-for-third');
        // container.appendChild(link);
        location.href = 'index.html';
        alert('✅ Reload succeeded!');
    }, 5000);
}

window.onload = alwaysNight;