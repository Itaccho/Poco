let count = 0;

function seeAnswer() {
    if (form1.q1.value == '盗まれてしまった' || form1.q1.value == '盗まれてしまいました') {
        count++;
    } else {
        form1.q1.value = 'ふせいかい';
    }
    if (form1.q2.value == '東京から大阪まで新幹線で3時間かかる' || form1.q2.value == '東京から大阪まで新幹線で3時間かかります') {
        count++;
    } else {
        form1.q2.value = 'ふせいかい';
    }
    if (form1.q3.value == 'いまにもカーくんが寝そうだ' ||
    form1.q3.value == 'カーくんがいまにも寝そうだ') {
        count++;
    } else {
        form1.q3.value = 'ふせいかい';
    }
    if (form1.q4.value == '娘を学校に行かせた' || form1.q4.value == '娘を学校に行かせました') {
        count++;
    } else {
        form1.q4.value = 'ふせいかい';
    }
    if (form1.q5.value == '歩くのに10分もかかりません' ||
    form1.q5.value == '歩くのに10分もかからない') {
        count++;
    } else {
        form1.q5.value = 'ふせいかい';
    }
    if (form1.q6.value == '一度も日本へ行ったことがない' ||
    form1.q6.value == '一度も日本へ行ったことがありません') {
        count++;
    } else {
        form1.q6.value = 'ふせいかい';
    }
    if (form1.q7.value == '家を出ていったらしい') {
        count++;
    } else {
        form1.q7.value = 'ふせいかい';
    }
    if (form1.q8.value == '聞こえるように大きな声で') {
        count++;
    } else {
        form1.q8.value = 'ふせいかい';
    }
    if (form1.q9.value == '彼に言わなければよかった') {
        count++;
    } else {
        form1.q9.value = 'ふせいかい';
    }
    if (form1.q10.value == '人がたくさんいる' || form1.q10.value == '人がたくさんいます') {
        count++;
    } else {
        form1.q10.value = 'ふせいかい';
    }
    if (form1.q11.value == '仲間を手伝ってあげたら') {
        count++;
    } else {
        form1.q11.value = 'ふせいかい';
    }
    if (form1.q12.value == '弾き方を教えて') {
        count++;
    } else {
        form1.q12.value = 'ふせいかい';
    }
}

const seeResult = document.getElementById('seeResult');
seeResult.onclick = function() {
    const result = document.getElementById('result');
    const points = document.getElementById('points');
    const appr = document.getElementById('approved');
    const fail = document.getElementById('failed');

    result.style.display = 'block';
    if (count > 5) {
        points.innerHTML = count;
        appr.style.display = 'block';
    } else {
        points.innerHTML = count;
        fail.style.display = 'block';
    }
}