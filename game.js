const question = document.querySelector('#question');
const answers = document.querySelector('#answers');

function play(name) {
    const frame = story[name];
    question.textContent = frame.q;
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild);
    }
    for (const answer in frame.a) {
        const answerElem = document.createElement('div');
        answerElem.textContent = answer;
        answerElem.addEventListener('click', () => {
            play(frame.a[answer]);
        });
        answers.appendChild(answerElem);
    }
}

play('start');
