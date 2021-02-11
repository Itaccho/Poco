'use strict';

{
    let i = 0;
    function answers3() {
        if (f3.q21.value == "知りたい") {
            f3.q21.value = "せいかい！";
            i++;
        } else {
            f3.q21.value = "ふせいかい！";
        }

        if (f3.q22.value == "食べたい") {
            f3.q22.value = "せいかい！";
            i++;
        } else {
            f3.q22.value = "ふせいかい！";
        }

        if (f3.q23.value == "旅行したい") {
            f3.q23.value = "せいかい！";
            i++;
        } else {
            f3.q23.value = "ふせいかい！";
        }

        if (f3.q24.value == "見たい") {
            f3.q24.value = "せいかい！";
            i++;
        } else {
            f3.q24.value = "ふせいかい！";
        }

        if (f3.q25.value == "聞きたい") {
            f3.q25.value = "せいかい！";
            i++;
        } else {
            f3.q25.value = "ふせいかい！";
        }

        if (f3.q26.value = '話したい') {
            f3.q26.value = 'せいかい！';
        } else {
            f3.q26.value = 'ふせいかい！'
        }
        
    }
    document.getElementById('seeAnswers3').onclick = function() {
        answers3();
        if (i > 3) {
            document.getElementById('nexttest').style.display = 'block';
            document.getElementById('resultN').innerHTML = 'よくできました。';
        } else {
            document.getElementById('stophere').style.display = 'block';
            document.getElementById('resultNu').innerHTML = '勉強がひつようです。';
        }
    }
}