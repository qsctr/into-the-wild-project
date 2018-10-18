const question = document.querySelector('#question');
const choices = document.querySelector('#choices');

function play(name) {
    const frame = story[name];
    question.textContent = frame.q;
    while (choices.firstChild) {
        choices.removeChild(choices.firstChild);
    }
    if (frame.a) {
        for (const choice in frame.a) {
            const answerElem = document.createElement('div');
            answerElem.textContent = choice;
            answerElem.addEventListener('click', () => {
                play(frame.a[choice]);
            });
            choices.appendChild(answerElem);
        }
    } else {
        const ending = document.createElement('div');
        ending.textContent = 'The end. Thanks for playing.';
        choices.appendChild(ending);
        const restart = document.createElement('div');
        restart.textContent = 'Restart';
        restart.addEventListener('click', () => {
            play('start');
        });
        choices.appendChild(restart);
    }
}

play('start');
