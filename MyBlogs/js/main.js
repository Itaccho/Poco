'use strict';
{
    const menuBtn = document.getElementById('menuBtn');

    menuBtn.onclick = function() {
        const mls = document.getElementById('menuLists');
        if (mls.style.display == 'none') {
            mls.style.display = 'block';
        } else {
            mls.style.display = 'none';
        }
    }
}
