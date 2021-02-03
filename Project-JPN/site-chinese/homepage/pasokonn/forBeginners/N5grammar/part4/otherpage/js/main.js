const sh = document.getElementById('showExamples');
sh.onclick = function() {
    let s = document.getElementById('showExamples');
    let hideExp = document.getElementById('hideEx');
    let misEx = document.getElementById('misEx');

    if (s.innerHTML == '+') {
        s.innerHTML = '-';
        hideExp.style.display = 'block';
        misEx.style.display = 'block';
    } else {
        s.innerHTML = '+';
        hideExp.style.display = 'none';
        misEx.style.display = 'none';
    }
}