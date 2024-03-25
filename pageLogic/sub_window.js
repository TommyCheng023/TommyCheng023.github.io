/* Designed for WeChat contact line, display a subwindow with WeCom QR-code while being clicked. */
document.getElementById('wecom').addEventListener('click', function() {
    var subwindow = document.getElementById('sub-window');
    subwindow.classList.toggle('show');
});