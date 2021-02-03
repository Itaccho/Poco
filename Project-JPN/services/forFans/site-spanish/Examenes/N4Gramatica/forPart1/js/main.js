'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

// quizset content 　インデックス番号[0]番目が正解の選択肢
  const quizSet = shuffle([
    // {q: ' ・・・ ',  c:['', '', '', '']},
    {q: ' ¿Cuál palabra se ponería en la cuarta palabra?・・・ このアニメははじめて（　  ）します。',  c:['　見た', '　見ます', '　が', '　ひさしぶりに', '　感じが']},
    {q: '¿Cuál palabra se ponería en la tercera palabra?・・・ （　  ）？  ',  c:['　べんきょうしたい', '　なぜ', '　日本語', '　を', '　ですか']},
    {q: '¿Cuál palabra se ponería en la tercera palabra?・・・ 昨日は（　  ）。',  c:['　あらうことを', '　忙しかった', '　から、', '　忘れた', '　おさらを']},
    {q: '¿Cuál palabra se ponería en la tercera palabra?・・・ 先週（　  ）。',  c:['　ショッピングに', '　よかった', '　行きました', '　ので', '　てんきが']},
    {q: '¿Cuál palabra se ponería en la tercera palabra?・・・ （　  ）。',  c:['　', '　', '　', '　', '　']},

    {q: ' ¿Cuál palabra se ponería en la tercera palabra?・・・ 　  （）？',  c:['　おすすめは', '　スカートを', '　買いたい', '　のですが', '　ありますか']},
    {q: '¿Cuál palabra se ponería en la tercera palabra?・・・ （　  ）。',  c:['　寝て', '　しまいました。', '　ねむすぎて', '　私は', '　昨日']},
    {q: '¿Cuál palabra se ponería en la tercera palabra?・・・ （　  ）。',  c:['　しか', '　私が', '　信じることができる', '　いません', '　あなたしか']},
    {q: '¿Cuál palabra se ponería en la tercera palabra?・・・ （　  ）。',  c:['　中に', '　いれたままだ', '　自転車の', '　カギは', '　カバンの']},
    {q: '¿Cuál palabra se ponería en la tercera palabra?・・・ （　  ）。',  c:['　つづけるのは', '　大変です', '　ずっと', '　2時間', '　話し']},

    {q: '右の言葉（ことば）の意味（いみ）は ・・・ 「友だちの間ではやっているもの」',  c:['la cosa que está de moda entre mis amigos', 'la cosa de moda entre los amigos', 'las cosas que están famosas entre mis amigos', 'las cosas que están buenas para mis amigos']},
    {q: '右の言葉（ことば）の意味（いみ）は ・・・ 「姿勢が悪くならないようにイスの高さをあわせてください。」',  c:['Ajusta la altura de la silla para que no te pongas de la postura mala, por favor.', 'Nos quedamos en las sillas para que la postura no esté mal.', 'Cambia la altura de la silla para sentarte bien.', 'Ajusta la silla para que no te sientas mal.']},
    {q: '右の言葉（ことば）の意味（いみ）は  ・・・ 「私は最近ジムに行くようになった。」',  c:['Empecé a ir al gimnacio estos días.', 'Recientemente voy al gimnacio.', 'He cambiado el lugar del gimnacio', 'Últimamente empecé a venir al gimnacio.']},
    {q: ' 右の言葉（ことば）の意味（いみ）は ・・・ Enséñame como se toca la guitarra, por favor.',  c:['ギターのひきかたを教えてください。', 'ギターのひくかたを教えてください。', 'ギターをひくことを教えてください。', 'ギターをひくほうを教えてください。']},
    {q: '右の言葉（ことば）の意味（いみ）は  ・・・ Incluso si no vas al banco o ATM, si vas a un kombini puedes sacar dinero.',  c:['銀行とかATMとかに行かなくても、コンビニに行けばお金をおろすことができるよ。', '銀行とATMとかに行かなくても、コンビニへ行けばお金をもらうことができるよ', '銀行とかATMとかに行かなくても、コンビニへ行くならお金をおろすができるよ', '銀行とかATMに行かなくても、コンビニに行けばお金をおろすできるよ']},
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

    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }
  function setQuiz() {
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }
   
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click', () => {
      checkAnswer(li);
    });
    choices.appendChild(li);
  });

   if (currentNum === quizSet.length - 1) {
     btn.textContent = 'Show Score';
   }
  }
  
  setQuiz();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');
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

