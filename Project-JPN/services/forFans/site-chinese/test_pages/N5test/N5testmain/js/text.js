'use strict';

{
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

    const menuB = document.getElementById('menuB');
    menuB.onclick = function() {
        let headerTab = document.getElementById('headerTab');
        let opa = document.getElementById('opacity');

        if (menuB.innerHTML == 'menu') {
             menuB.innerHTML = 'close the menu';
             headerTab.style.display = 'block';
             opa.style.visibility = 'hidden';
        } else {
             menuB.innerHTML = 'menu';
             headerTab.style.display = 'none';
             opa.style.visibility = 'visible';
        }
    }
    
}