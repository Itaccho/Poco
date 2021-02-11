const b = document.getElementById('plusB');
b.onclick = function() {
    const small = document.getElementById('smallLists');
    const opa = document.getElementById('opa');

    if (b.innerHTML == 'top menu') {
        b.innerHTML = 'close menu';
        small.style.display = 'block';
        opa.style.opacity = '0.1';
    } else {
        b.innerHTML = 'top menu';
        small.style.display = 'none';
        opa.style.opacity = '1.0';
    }
}