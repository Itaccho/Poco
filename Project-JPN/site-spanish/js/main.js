const menuBtn = document.getElementById('menuBtn');

menuBtn.onclick = function() {
    const menuLists = document.getElementById('menuLists');
    const opa = document.getElementById('opacity');

    if (menuBtn.innerHTML == '+ menu') {
        menuBtn.innerHTML = '- close';
        menuLists.style.display = 'block';
        opa.style.opacity = '0.1';
    } else {
        menuBtn.innerHTML = '+ menu';
        menuLists.style.display = 'none';
        opa.style.opacity = '1.0';
    }
}