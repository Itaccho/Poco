function click1() {
    const pass = document.form1.pass;
        // password
    if (pass.value == 'nextdoor' || pass.value == 'n') {
        afterCorrect.style.display = 'block';
        document.getElementById('passForm').style.display = 'none';         
    } else {
        alert('The wrong password');
    }   
}

function answer1() {
    if (f.q1.value == "3") {
        f.q1.value = "正解！";
    } else {
        f.q1.value = "ざんねん！　正解は3つです";
    }
}

document.getElementById('gec').onclick = function() {
    const gec = document.getElementById('gec');
    const gre = document.getElementById('grammarExplain');
    if (gec.innerHTML == '+') {
        gre.style.display = 'block';
        gec.innerHTML = 'close';  
    } else {
        gre.style.display = 'none';
        gec.innerHTML = '+';
    }
}