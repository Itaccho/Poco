const b = document.getElementById('gec');
    b.onclick = function() {
        let gram = document.getElementById('grammarExplain');
        let barline = document.getElementById('barline');
        if (b.innerHTML == '＋ 文法の要素') {
            b.innerHTML = '-';
            gram.style.display = 'block';
            barline.style.display = 'none';
        } else {
            b.innerHTML = '＋ 文法の要素';
            gram.style.display = 'none';
            barline.style.display = 'block';
        }
    }
