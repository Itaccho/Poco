'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

// quizset content 　インデックス番号[0]番目が正解の選択肢
  const quizSet = shuffle([
    {q: '¿Cuál es la opción correcta? 　・・・　Vivo en Tokio', 
     c:['とうきょうに　すんでいます。', 'とうきょうに　います。', 'とうきょうで　すんでいます。', 'とうきょうでいます。']},
     {q: '¿Cuál es la opción correcta? 　・・・　Ahora son las 9 de la noche.', 
     c:['いまよるの9時です。', 'いまあさの9時です。', 'いま午後9時半です。']},
     {q: '¿Cuál es el número correcto? 　・・・　「いくらですか？」「(せんさんびゃくよんじゅうご)えんです。」', 
     c:['1345', '1355', '2363', '1365', '345']},
     {q: '¿Cuál es la opción correcta? 　・・・　もくようび', 
     c:['jueves', 'martes', 'viernes', 'sábado', 'domingo']},
     {q: '¿Cuál es la opción correcta? 　・・・　書く（かく）　＋　「ます」', 
     c:['かきます', 'かけます', 'かかます', 'かくます']},
     {q: '¿Cuál es la opción correcta? 　・・・　開ける（あける）　＋　「ます」', 
     c:['あけます', 'あきます', 'あかます', 'あけるます']},
     {q: '¿Cuál es la palabra del cuerpo correcta? 　・・・　「あたま」', 
     c:['cabeza', 'mano', 'pelo', 'cara']},
     {q: '¿Cuál es la palabra del cuerpo correcta? 　・・・　「て」', 
     c:['mano', 'dedos', 'hombros', 'piernas']},
     {q: '¿Cuál es la palabra del cuerpo correcta? 　・・・　「ひざ」', 
     c:['rodillas', 'codos', 'pies', 'ojos']},
     　
     {q: '¿Cuál es la opción correcta? 　・・・　「する」＋「ない」', 
     c:['しない', 'するない', 'しまい', 'するありません']},
     {q: '¿Cuál es la opción correcta? 　・・・　「いく」＋「ない」', 
     c:['いかない', 'いきない', 'いけない', 'いくない']},
     {q: '¿Cuál es la opción correcta? 　・・・　「こたえる」 ＋ imperativo', 
     c:['こたえろ', 'こたえる', 'こたえている', 'こたえます']},
     {q: '¿Cuál es la opción correcta? 　・・・　「いう」 ＋ imperativo de la forma educada', 
     c:['いってください', 'いいてください', 'いきてください', 'いうてください']},
     {q: '¿Cuál oración es la tradución correcta? 　・・・　Me gusta escuchar música.', 
     c:['おんがくをきくことが好きです。', 'おんがくをうたうことが好きです。', '歌をきくことがすきです。', 'おんがくをきくことを好きです。']},
     {q: '¿Cuál oración es la tradución correcta? 　・・・　Me ducho a las 10 de la noche.', 
     c:['よるの10時にシャワーをあびます。', 'ごごの10時でシャワーをあびます。', 'よるの10時にシャワーをします。', '午後の10時でシャワーをしています。']},
     {q: '¿Cuál oración es la tradución correcta? 　・・・　Osaka es una ciudad animada.', 
     c:['おおさかはにぎやかなまちです。', 'にぎやかなまちはおおさかです。', 'おおさかのにぎやかなまち。', 'おおさかはまちですにぎやかな。']},
     {q: '¿Cuál oración es la tradución correcta? 　・・・　Hoy hace frío.', 
     c:['きょうはさむいです。', 'きょうにさむい。', 'きょうはさむいだ。']},
     {q: '¿Cuál oración es la tradución correcta? 　・・・　Voy a EEUU.', 
     c:['アメリカへ行きます。', 'アメリカに行く。', 'アメリカですむ。', 'アメリカに行っている。']},
     {q: '¿Cuál oración es la tradución correcta? 　・・・　Ella sabe tocar piano.　（tocar ＝弾く（ひく））', 
     c:['かのじょはピアノが弾ける。', 'かれはピアノが弾くことができる。', 'かれはピアノを弾きます。', 'かのじょはピアノを弾きます。']},
     {q: '¿Cuál oración es la tradución correcta? 　・・・　¿Puedes repetirlo, por favor?', 
     c:['もういちど言えますか？。', 'それを言えますか、おねがいします。', 'それを言いますか、おねがいします。', 'もういちど言うことできますか？']},
     {q: '¿Cuál oración es la tradución correcta? 　・・・　Anteayer no fui al gimnacio.', 
     c:['おとといわたしはジムに行かなかった。', 'きのうわたしはジムに行かなかった。', 'わたしはおとといヒムナシオへ行きませんでした。', 'わたしはきのうヒムナシオへ行かなかったです。']},
     {q: '¿Cuál oración es la tradución correcta? 　・・・　Estoy escribiendo esta palabra.', 
     c:['このたんごを書いています。', 'このたんごを書くています。', 'このたんごをおぼえています。', 'このたんごをべんきょうしています。']},
     {q: '¿Cuál oración es la tradución correcta? 　・・・　Estamos esperando en la salida de la estación.　　「わたしたちはえきの（　　）。」', 
     c:['でぐちでまっています', 'でぐちでまちます', 'いりぐちでまちました', 'でぐちでまってろ']},
  ]);

  let currentNum = 0;
  let isAnswered;
  let score = 0;
  

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    //#13.isAnsweredに演算子trueが代入される
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      //正解のときscoreに1を足す
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }
  function setQuiz() {
    //まだ回答していないよ
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;

    //#14.次の選択肢に移動するときに、前の問題の選択肢を消す方法
    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }
   
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
  //.forEach関数の前にあるquizSet[currentNum].cを消してshuffledChoicesに変える
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click', () => {
      checkAnswer(li);
    });
    choices.appendChild(li);
  });

   //#15.最後の問題のボタンのテキストを変更する
   if (currentNum === quizSet.length - 1) {
     btn.textContent = 'Show Score';
   }
  }
  
  setQuiz();

  btn.addEventListener('click', () => {
    //#15.選択肢をクリックしてから次の問題に進めるようにする
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    //#16.
    if (currentNum === quizSet.length - 1) {
      //console.log(`Score: ${score} / ${quizSet.length}`);
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    } else {
      currentNum++;
      setQuiz();
    }
  });
}

