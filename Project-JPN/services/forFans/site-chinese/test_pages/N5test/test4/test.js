function answer() {
    var answer = 0;
    var trueAnswer = new Array(3, 5, 7, 12, 13, 17, 20, 24);

    for (i = 0; i < 8; i++) {
        if (document.f1.elements[trueAnswer[i].checked]) {
            answer++;
        }
    }
}

document.getElementById('seeAnswers2').onclick = function() {
    const result = document.getElementById('result');
    document.getElementById('seeResult').style.display = 'block';
    answer();
    if (i = 8) {
        document.getElementById('allCorrect').innerHTML = '満点です！'
        document.getElementById('nexttest').style.display = 'block';
        result.innerHTML = i;
    } else if (i > 6) {
        document.getElementById('nexttest').style.display = 'block';
        result.innerHTML = i;
    } else {
        document.getElementById('stophere').style.display = 'block';
        result.innerHTML = i;
    }
}