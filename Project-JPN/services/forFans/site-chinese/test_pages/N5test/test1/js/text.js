'use strict';

{
    let i = 0;
    function answers2() {
        if (f2.q11.value == "持ちます") {
            f2.q11.value = "せいかい！";
            i++;
        } else {
            f2.q11.value = "ふせいかい！";
        }

        if (f2.q12.value == "話します") {
            f2.q12.value = "せいかい！";
            i++;
        } else {
            f2.q12.value = "ふせいかい！";
        }

        if (f2.q13.value == "来ます" || f2.q13.value == "きます") {
            f2.q13.value = "せいかい！";
            i++;
        } else {
            f2.q13.value = "ふせいかい！";
        }

        if (f2.q14.value == "見ます") {
            f2.q14.value = "せいかい！";
            i++;
        } else {
            f2.q14.value = "ふせいかい！";
        }

        if (f2.q15.value == "行きます") {
            f2.q15.value = "せいかい！";
            i++;
        } else {
            f2.q15.value = "ふせいかい！";
        }

        if (f2.q16.value == "います") {
            f2.q16.value = "せいかい！";
            i++;
        } else {
            f2.q16.value = "ふせいかい！";
        }

        if (f2.q17.value == "借ります") {
            f2.q17.value = "せいかい！";
            i++;
        } else {
            f2.q17.value = "ふせいかい！";
        }

        if (f2.q18.value == "べんきょうします" || f2.q18.value == '勉強します') {
            f2.q18.value = "せいかい！";
            i++;
        } else {
            f2.q18.value = "ふせいかい！";
        }

        if (f2.q19.value == "始めます") {
            f2.q19.value = "せいかい！";
            i++;
        } else {
            f2.q19.value = "ふせいかい！";
        }

        if (f2.q20.value == "始まります") {
            f2.q20.value = "せいかい！";
            i++;
        } else {
            f2.q20.value = "ふせいかい！";
        }
    }
    document.getElementById('seeAnswers2').onclick
     = function() {
        const result = document.getElementById('result');
        const sore = document.getElementById('sore');
        answers2();
        if (i > 8) {
            document.getElementById('nexttest').style.display = 'block';
            sore.style.display = 'block';
            result.innerHTML = i;
        } else {
            document.getElementById('stophere').style.display = 'block';
            sore.style.display = 'block';
            result.innerHTML = i;
        }
    }
}