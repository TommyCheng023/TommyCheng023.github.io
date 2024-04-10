/**
 * This JavaScript file is designed totally by Xinyang Cheng during the secret update and is built ONLY for the 404 page.
 */

function alwaysNight() {
    document.body.setAttribute("data-theme", "dark_theme");
}

function showAlert() {
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
    addElement.style.display = 'block';
    addElement.classList.add('fade-in');
}

function sendBack() {
    const alertMsg2 = document.getElementById('reload-for-second');
    const alertMsg3 = document.getElementById('reload-for-third');
    const hidedButton = document.getElementById('theButton2');
    alertMsg2.style.display = 'block';

    setTimeout(() => {
        alertMsg2.style.display = 'none';
        hidedButton.style.display = 'none';
        alertMsg3.style.display = 'block';
        var link = document.createElement('a');
        link.href = 'https://xinyang-cheng.com/';
        link.innerText = '<RETURN>';
        var container = document.getElementById('reload-for-third');
        container.appendChild(link);
        alert('✅ Reload succeeded! \n Click the `RETURN` to leave this page.');
    }, 2000);
}

window.onload = alwaysNight;