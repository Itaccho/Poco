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
    var opa = document.getElementById('opa');

    result.style.display = 'block';
    pointCounter();

    if (count > 7) {
        approved.style.display = 'block';
        opa.style.display = 'none';
        countedPoints.innerHTML = count;
    } else {
        failed.style.display = 'block';
        countedPoints.innerHTML = count;
    }
}