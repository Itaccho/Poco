
    let i = 0;
    function answers2() {
        if (f2.q1.value == "にひゃく") {
            f2.q1.value = "せいかい！";
            i++;
        } else {
            f2.q1.value = "ふせいかい！";
        }

        if (f2.q2.value == "さんびゃくごじゅうなな") {
            f2.q2.value = "せいかい！";
            i++;
        } else {
            f2.q2.value = "ふせいかい！";
        }

        if (f2.q3.value == "よんひゃくきゅうじゅう") {
            f2.q3.value = "せいかい！";
            i++;
        } else {
            f2.q3.value = "ふせいかい！";
        }

        if (f2.q4.value == "ろっぴゃくはちじゅうに") {
            f2.q4.value = "せいかい！";
            i++;
        } else {
            f2.q4.value = "ふせいかい！";
        }

        if (f2.q5.value == "せんひゃくじゅういち") {
            f2.q5.value = "せいかい！";
            i++;
        } else {
            f2.q5.value = "ふせいかい！";
        }

        if (f2.q6.value == "さんぜんよんひゃくごじゅうろく") {
            f2.q6.value = "せいかい！";
            i++;
        } else {
            f2.q6.value = "ふせいかい！";
        }

        if (f2.q7.value == "はっせんじゅうよん") {
            f2.q7.value = "せいかい！";
            i++;
        } else {
            f2.q7.value = "ふせいかい！";
        }

        if (f2.q8.value == "いちがつじゅうよっか") {
            f2.q8.value = "せいかい！";
            i++;
        } else {
            f2.q8.value = "ふせいかい！";
        }

        if (f2.q9.value == "くがつついたち") {
            f2.q9.value = "せいかい！";
            i++;
        } else {
            f2.q9.value = "ふせいかい！";
        }

        if (f2.q10.value == "しちがつはつか") {
            f2.q10.value = "せいかい！";
            i++;
        } else {
            f2.q10.value = "ふせいかい！";
        }
    }
    document.getElementById('seeAnswers2').onclick = function() {
        const result = document.getElementById('result');
        answers2();
        if (i > 8) {
            document.getElementById('nexttest').style.display = 'block';
            result.innerHTML = i;
        } else {
            document.getElementById('stophere').style.display = 'block';
            result.innerHTML = i;
        }
    }
