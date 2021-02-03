'use strict';

{
    //取得した要素ひとつひとつに対して、イベントを設定
    const menuItems = document.querySelectorAll('.menu li a');
    const contents = document.querySelectorAll('.content');

    menuItems.forEach(clickedItem => {
       　　　　　　　　　　　　　 //clickイベントを設定
        clickedItem.addEventListener('click', e => {
            //リンク先にページ繊維するというa要素の既定の動作をキャンセル
            e.preventDefault();

            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            clickedItem.classList.add('active');

            //すべてのcontentsからmenu内容が外れている状態になる
            contents.forEach(content => {
                content.classList.remove('active');
            });
            //
            document.getElementById(clickedItem.dataset.id).classList.add('active');
        });
    });
}