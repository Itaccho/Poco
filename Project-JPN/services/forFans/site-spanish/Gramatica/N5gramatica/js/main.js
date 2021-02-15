const menuBtn = document.getElementById('menuBtn');
let menuLists = document.getElementById('menuLists');
let opa = document.getElementById('opacity');
const xBtn = document.getElementById('xBtn');

menuBtn.onclick = function() {
    if (menuBtn.innerHTML == '+ menu') {
        menuLists.style.display = 'block';
        menuBtn.style.display = 'none';
        opa.style.opacity = '0.1';
    }
}

xBtn.onclick = function() {
    if (xBtn.style.display = 'inline') {
        menuLists.style.display = 'none';
        menuBtn.style.display = 'inline-block';
        opa.style.opacity = '1.0';
    }
}

// capitulo3
const VCbtn = document.getElementById('VCbtn');
VCbtn.onclick = function() {
    const VCbtnid = document.getElementById('VCbtnid');
    if (VCbtnid.style.display == 'none') {
        VCbtnid.style.display = 'block';
    } else {
        VCbtnid.style.display = 'none';
    }
}