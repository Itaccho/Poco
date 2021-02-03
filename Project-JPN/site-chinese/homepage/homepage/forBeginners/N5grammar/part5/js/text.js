const openB = document.getElementById('open');
openB.onclick = function() {
    const lists = document.getElementById('headerTabOpen');
    const con = document.getElementById('con');

    if (openB.innerHTML == '＋') {
        openB.innerHTML = '閉じる';
      
        lists.style.display = 'block';
        con.style.opacity = '0.1';
    } else {
        openB.innerHTML = '＋';
        
        lists.style.display = 'none';
        con.style.opacity = '1.0';
    }
}