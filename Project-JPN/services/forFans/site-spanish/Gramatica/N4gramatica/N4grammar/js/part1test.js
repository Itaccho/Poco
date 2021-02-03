let count = 0;

function answers() {
    if (f1.q1.value == 'verbo') {
        count++;
    } else {
        f1.q1.value = 'incorrecto'
    }

    if (f1.q2.value == 'sustantivo') {
        count++;
    } else {
        f1.q2.value = 'incorrecto'
    }

    if (f1.q3.value == 'adjetivo') {
        count++;
    } else {
        f1.q3.value = 'incorrecto'
    }

    if (f1.q4.value == 'partícula') {
        count++;
    } else {
        f1.q4.value = 'incorrecto'
    }

    if (f1.q5.value == 'pasado') {
        count++;
    } else {
        f1.q5.value = 'incorrecto'
    }
}

document.getElementById('seeAnswer1').onclick = function() {
    answers();
    const points = document.getElementById('points');
    if (count >= 0) {
        points.innerHTML = count;
    }
}