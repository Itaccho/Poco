let count = 0;
function answer() {
    if (f1.q1.value ==
         'いけぶくろに行ったとき、友だちと会いました') {
             count ++;
         } else {
             f1.q1.value == '不正解';
    }
    if (f1.q2.value ==
        'わたしの日本語はまだじょうずじゃないので、先生のレッスンをうけます' ||
        f1.q2.value ==
        'わたしの日本語はまだじょうずではないので、先生のレッスンをうけます') {
            count ++;
        } else {
            f1.q2.value == '不正解';
    }

    if (f1.q3.value ==
        'きょうはねむいから、もうすこしねます' ||
        f1.q3.value ==
        'きょうはねむいので、もうすこしねます') {
            count ++;
        } else {
            f1.q3.value == '不正解';
     }

    if (f1.q4.value ==
        '来週テストがあるので、心配しています') {
            count ++;
        } else {
            f1.q4.value == '不正解';
    }

    if (f1.q5.value ==
        '家から会社まで車で30分かかります') {
            count ++;
        } else {
            f1.q5.value == '不正解';
    }

    if (f1.q6.value ==
        '知らないところに来たら、道にまよいました') {
            count ++;
        } else {
            f1.q6.value == '不正解';
    }

    if (f1.q7.value ==
        'お兄ちゃんにぼくのおもちゃをこわされました') {
            count ++;
        } else {
            f1.q7.value == '不正解';
    }

    if (f1.q8.value ==
        'わたしに　おさらを　あらわせてください' ||
        f1.q8.value ==
        'わたしにおさらをあらわせてください') {
            count ++;
        } else {
            f1.q8.value == '不正解';
    }

    if (f1.q9.value ==
        '上司を怒らさせてしまいました') {
            count ++;
        } else {
            f1.q9.value == '不正解';
    }

    if (f1.q10.value ==
        'みんなにきこえるように大きな声で話してください') {
            count ++;
        } else {
            f1.q10.value == '不正解';
    }

    if (f1.q11.value ==
        'わたしといっしょにごはんを食べに行かない') {
            count ++;
        } else {
            f1.q11.value == '不正解';
    }

    if (f1.q12.value ==
        'どうぞお召し上がりになってください' || f1.q12.value ==
        'どうぞお召し上がりください') {
            count ++;
        } else {
            f1.q12.value == '不正解';
    }

    if (f1.q13.value ==
        'なるといいですね') {
            count ++;
        } else {
            f1.q13.value == '不正解';
    }

    if (f1.q14.value ==
        '日本ではたらくなら日本語を話せることが必要です' ||
        f1.q14.value == 
        '日本ではたらくのであれば日本語を話せることが必要です') {
            count ++;
        } else {
            f1.q14.value == '不正解';
    }

    if (f1.q15.value ==
        'こどもにそうじをさせた') {
            count ++;
        } else {
            f1.q15.value == '不正解';
    }

    if (f1.q16.value ==
        '猫に黒い服を着させたら、毛がたくさんぬけてしまいました' ||
        f1.q16.value ==
        '猫に黒い服を着させたら、毛がたくさん抜けてしまいました') {
            count ++;
        } else {
            f1.q15.value == '不正解';
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
    answer();

    if (count > 11) {
        approved.style.display = 'block';
        testWrapper.style.display = 'none';
        countedPoints.innerHTML = count;
    } else {
        failed.style.display = 'block';
        countedPoints.innerHTML = count;
    }
}
