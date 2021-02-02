const menuBtn = document.getElementById('menuBtn');
menuBtn.onclick = function() {
    menuBtn.style.display = 'none';
    document.getElementById('menuContain').style.display = 'block';
}

const x = document.getElementById('x');
x.onclick = function() {
    menuBtn.style.display = 'block';
    document.getElementById('menuContain').style.display = 'none';
}

const seeHints = document.getElementById('seeHints');
seeHints.onclick = function() {
    const hintLists = document.getElementById('hintLists');
    hintLists.style.display = 'block';
}