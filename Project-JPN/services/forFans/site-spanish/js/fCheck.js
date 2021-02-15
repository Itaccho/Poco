'use strict'; {
    let count = 0;
    var max = f1.chebox.length;
    document.getElementById('countPoints').onclick = function() {
        for (var i = 0; i < max; i++) {
            if (document.f1.chebox[i].checked == true) {
                count++;
            }
        }
        document.getElementById('showPoints').innerHTML = count;
    }
    document.getElementById('maxPoints').innerHTML = max;
}