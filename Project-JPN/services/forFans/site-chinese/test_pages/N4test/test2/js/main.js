let count = 0; //正解数

function pointCounter() {

    for (var i = 0; i < document.f1.trueAns.length; i++) {
        if (document.f1.trueAns[i].checked) {
            count++;
        }
    }
}

let seeAnswer = document.getElementById('seeAnswer');
seeAnswer.onclick = function() {
    seeAnswer.style.display = 'none';
    var result = document.getElementById('result');
    var countedPoints = document.getElementById('countedPoints');
    var approved = document.getElementById('approved');
    var failed = document.getElementById('failed');
    var testWrapper = document.getElementById('testWrapper');

    result.style.display = 'block';
    pointCounter();

    if (count >= 14) {
        approved.style.display = 'block';
        testWrapper.style.display = 'none';
        countedPoints.innerHTML = count;
    } else {
        failed.style.display = 'block';
        countedPoints.innerHTML = count;
    }
}