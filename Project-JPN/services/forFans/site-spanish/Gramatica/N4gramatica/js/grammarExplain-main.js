
// grammarExplain
const gec = document.getElementById('gec');
const grammarExplain = document.getElementById('grammarExplain');
gec.onclick = function() {

    if (gec.innerHTML == '＋ 文法の要素') {
        gec.innerHTML = 'とじる';
        grammarExplain.style.display = 'block';
    } else {
        gec.innerHTML = '＋ 文法の要素';
        grammarExplain.style.display = 'none';
    }
}