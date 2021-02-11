const openA = document.getElementById('open');

openA.onclick() = function() {
    const menuBox = document.getElementById('menuInlineBox');
    if (openA.style.innerHTML == 'open') {
        openA.innerHTML = 'close';
        menuBox.style.display = 'block';
    } else {
        openA.innerHTML = 'open';
        menuBox.style.display = 'close';
    }
}