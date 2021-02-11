
    let i = 0;
    function answers2() {
        if (f2.q1.value == "をしに" || f2.q1.value == "へ") {
            f2.q1.value = "せいかい！";
            i++;
        } else {
            f2.q1.value = "ふせいかい！";
        }

        if (f2.q2.value == "も") {
            f2.q2.value = "せいかい！";
            i++;
        } else {
            f2.q2.value = "ふせいかい！";
        }

        if (f2.q3.value == "聞くことが" || f2.q3.value == "きくことが") {
            f2.q3.value = "せいかい！";
            i++;
        } else {
            f2.q3.value = "ふせいかい！";
        }

        if (f2.q4.value == "いきませんか" || f2.q4.value == "行きませんか") {
            f2.q4.value = "せいかい！";
            i++;
        } else {
            f2.q4.value = "ふせいかい！";
        }

        if (f2.q5.value == "は高い") {
            f2.q5.value = "せいかい！";
            i++;
        } else {
            f2.q5.value = "ふせいかい！";
        }

        if (f2.q6.value == "寒くない" || f2.q6.value == "さむくない") {
            f2.q6.value = "せいかい！";
            i++;
        } else {
            f2.q6.value = "ふせいかい！";
        }

        if (f2.q7.value == "を飲みません" || f2.q7.value == "を飲まない") {
            f2.q7.value = "せいかい！";
            i++;
        } else {
            f2.q7.value = "ふせいかい！";
        }

        if (f2.q8.value == "も") {
            f2.q8.value = "せいかい！";
            i++;
        } else {
            f2.q8.value = "ふせいかい！";
        }

        if (f2.q9.value == "まじめな" || f2.q9.value == "真面目な") {
            f2.q9.value = "せいかい！";
            i++;
        } else {
            f2.q9.value = "ふせいかい！";
        }

        if (f2.q10.value == "だ") {
            f2.q10.value = "せいかい！";
            i++;
        } else {
            f2.q10.value = "ふせいかい！";
        }

        if (f2.q11.value == "いかが") {
            f2.q11.value = "せいかい！";
            i++;
        } else {
            f2.q11.value = "ふせいかい！";
        }

        if (f2.q12.value == "ドラマを") {
            f2.q12.value = "せいかい！";
            i++;
        } else {
            f2.q12.value = "ふせいかい！";
        }

        if (f2.q13.value == "まで遠い" ||
        f2.q13.value == "まで遠いです") {
            f2.q13.value = "せいかい！";
            i++;
        } else {
            f2.q13.value = "ふせいかい！";
        }

        if (f2.q14.value == "知りません" || f2.q14.value == "知らない") {
            f2.q14.value = "せいかい！";
            i++;
        } else {
            f2.q14.value = "ふせいかい！";
        }

        if (f2.q15.value == "下にいる" || f2.q15.value == "下にいます") {
            f2.q15.value = "せいかい！";
            i++;
        } else {
            f2.q15.value = "ふせいかい！";
        }
    }
    document.getElementById('seeAnswers2').onclick = function() {
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
