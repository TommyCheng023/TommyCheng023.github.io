function setThemePreference() {
    /* This function holds the light/dark theme of the website based on the current hour [Eastern Daylight Time Zone]. */
    var d = new Date();
    var currentHour = d.getHours();  
  
    if(currentHour >= 19 || currentHour <= 6) {
        document.body.setAttribute("data-theme", "dark_theme") 
    }else {
        document.body.setAttribute("data-theme", "light_theme") 
    }
}

window.onload = setThemePreference;