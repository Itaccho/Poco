'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

// quizset content 　インデックス番号[0]番目が正解の選択肢
  const quizSet = shuffle([
    {q: '¿Cuál es ese hiragana? ・・・ あ', 
     c:['a', 'o', 'me', 'no']},
     {q: '¿Cuál es ese hiragana? ・・・ も', 
     c:['mo', 'to', 'shi', 'ni']},
     {q: '¿Cuál es ese hiragana? ・・・ ほ', 
     c:['ho', 'po', 'sa', 'na', 'ha']},
     {q: '¿Cuál es ese hiragana? ・・・ が', 
     c:['ga', 'ka', 'na', 'sa', 'ra']},
     {q: '¿Cuál es ese hiragana? ・・・ ぬ', 
     c:['nu', 'bu', 'ru', 'su', 'hu']},
     {q: '¿Cuál es ese hiragana? ・・・ し', 
     c:['shi', 'sho', 'shu', 'ji', 'jo']},
     {q: '¿Cuál es ese hiragana? ・・・ ぴ', 
     c:['pi', 'bi', 'ha', 'fa', 'ke']},
     {q: '¿Cuál es ese hiragana? ・・・ きゅ', 
     c:['kyu', 'kyuu', 'kyou', 'kya', 'kyo']},
     {q: '¿Cuál es ese hiragana? ・・・ な', 
     c:['na', 'no', 'ni', 'nu', 'ne']},
     {q: '¿Cuál es ese hiragana? ・・・ ゆ', 
     c:['yu', 'ya', 'a', 'o', 'nn']},
     {q: '¿Cuál es ese hiragana? ・・・ しょ', 
     c:['sho', 'shu', 'shou', 'shuu', 'sha']},
     {q: '¿Cuál es ese hiragana? ・・・ て', 
     c:['te', 'de', 'ya', 'e', 'i']},
     {q: '¿Cuál es ese hiragana? ・・・ こ', 
     c:['ko', 'ka', 'ra', 'ri', 'ni']},
     {q: '¿Cuál es ese hiragana? ・・・ る', 
     c:['ru', 'ra', 'ro', 'sa', 'nu']},
     {q: '¿Cómo se escribe eso en hiragana? ・・・ bi', 
     c:['び', 'ぴ', 'ひ', 'み', 'り']},
     {q: '¿Cómo se escribe eso en hiragana? ・・・ kyuu', 
     c:['きゅう', 'きゅ', 'きゃう', 'きゃ', 'きょ']},
     {q: '¿Cómo se escribe eso en hiragana? ・・・ ao', 
     c:['あお', 'あい', 'あえ', 'あを', 'あう']},
     {q: '¿Cómo se escribe eso en hiragana? ・・・ shi', 
     c:['し', 'す', 'さ', 'しょ', 'しゅ']},
     {q: '¿Cómo se escribe eso en hiragana? ・・・ minnna', 
     c:['みんな', 'にんな', 'きんな', 'みんあ', 'にんあ']},
     {q: '¿Cómo se escribe eso en hiragana? ・・・ kippu', 
     c:['きっぷ', 'きぷ', 'ぎっぷ', 'ぎふ', 'きっふ']},
     {q: '¿Cómo se escribe eso en hiragana? ・・・ nihonngo', 
     c:['にほんご', 'にはんこ', 'こほんご', 'ごぽんご', 'にほんこ']},
     {q: '¿Cuál katakana sería esto? ・・・ ダ', 
     c:['da', 'ta', 'cha', 'me', 'he']},
     {q: '¿Cuál katakana sería esto? ・・・ ウ', 
     c:['u', 'hu', 'wa', 'ra', 'ta']},
     {q: '¿Cuál katakana sería esto? ・・・ ホ', 
     c:['ho', 'wa', 'shi', 'po', 'o']},
     {q: '¿Cuál katakana sería esto? ・・・ ニ', 
     c:['ni', 'i', 'so', 'e', 'hu']},
     {q: '¿Cuál katakana sería esto? ・・・ ジョ', 
     c:['jo', 'syo', 'ju', 'ja', 'shu']},
     {q: '¿Cuál katakana sería esto? ・・・ ヌ', 
     c:['nu', 'so', 'ke', 'ta', 'bo']},
     {q: '¿Cuál katakana sería esto? ・・・ ソ', 
     c:['so', 'nn', 'te', 'to', 'tsu']},
     {q: '¿Cuál katakana sería esto? ・・・ ト', 
     c:['to', 'i', 'me', 'ka', 'ya']},
     {q: '¿Cuál katakana sería esto? ・・・ メ', 
     c:['me', 'so', 'nn', 'nu', 'ra']},
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

