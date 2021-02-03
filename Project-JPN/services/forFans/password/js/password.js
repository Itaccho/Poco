'use strict'; {
    document.getElementById('submit').onclick = function() {
        const pass = document.form1.pass;
        const cont = document.getElementById('cont');
        

        if (pass.value == 'nextdoor' ||
            pass.value == 'e8rA1nf4' ||
            pass.value == '9o42Kf3' ||
            pass.value == 'Sho926' ||
            pass.value == '999999') {
            document.getElementById('afterCorrect').style.display = 'block';
            document.getElementById('expl').style.display = 'none';
            cont.style.display = 'none';
            alert('パスワード入力ありがとうございます。下のページをクリックしてください。');
        } else {
            cont.innerHTML = 'パスワードが違います';
            cont.style.backgroundColor = 'red';
        }
    }
}

// if (formPass.pass.value == 'a') {
    //     document.getElementById('password').style.display = 'none';
    //     document.getElementById('expl').style.display = 'none';
    //     document.getElementById('afterCorrect').style.display = 'block';
    // }
