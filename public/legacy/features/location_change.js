var isClicked = false;
function changeText() {
    /* This function holds the location setting, switch location between current and home locations. */
    var btn = document.getElementById('loc');
    if(!isClicked){
        btn.textContent = 'Shanghai, CN'; 
        isClicked = true;
    }
    else {
        btn.textContent = 'Ann Arbor, US';
        isClicked = false;
    }
};