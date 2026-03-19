function setThemePreference() {
    /* This function holds the light/dark theme of the website based on the current hour [Eastern Daylight Time Zone]. */
    var d = new Date();
    var currentHour = d.getHours();  
    let theIcon = document.getElementById('toggle-icon');
  
    if(currentHour >= 19 || currentHour <= 6) {
        theIcon.classList.remove('fa-sun');
        theIcon.classList.add('fa-moon');
        document.body.setAttribute("data-theme", "dark_theme");
    }else {
        theIcon.classList.remove('fa-moon');
        theIcon.classList.add('fa-sun');
        document.body.setAttribute("data-theme", "light_theme");
    }
}

function buttonThemePreference() {
    let theIcon = document.getElementById('toggle-icon');
    if(theIcon.classList.contains('fa-sun')) {
        theIcon.classList.remove('fa-sun');
        theIcon.classList.add('fa-moon');
        document.body.setAttribute("data-theme", "dark_theme");
    }
    else {
        theIcon.classList.remove('fa-moon');
        theIcon.classList.add('fa-sun');
        document.body.setAttribute("data-theme", "light_theme");
    }
}

window.onload = setThemePreference;