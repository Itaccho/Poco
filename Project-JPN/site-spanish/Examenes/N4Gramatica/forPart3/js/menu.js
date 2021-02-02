const menuBtn = document.getElementById('menuBtn');
menuBtn.onclick = function() {

    if (menuBtn.innerHTML == 'menu') {
        menuBtn.innerHTML = 'x';
        document.getElementById('topMenuContainer').style.display = 'block';
        document.getElementById('opa').style.opacity = '0.1';
    } else {
        menuBtn.innerHTML = 'menu';
        document.getElementById('topMenuContainer').style.display = 'none';
        document.getElementById('opa').style.opacity = '1.0';
    }
}