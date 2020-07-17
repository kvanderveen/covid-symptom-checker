const start = document.querySelector('.start');
const question = document.querySelector('.question');
const symptoms1 = document.querySelector('.symptoms-1');
const symptoms2 = document.querySelector('.symptoms-2');
const symptoms3 = document.querySelector('.symptoms-3');
const testing = document.querySelector('.testing');
const noSymptoms = document.querySelector('.no-symptoms');


// start questions with symptom question
start.addEventListener('click', () => {
    start.remove();
    question.textContent = 'Are you currently having symptoms?';
    symptoms1.innerHTML = questionOneHTML;
    question2();
});

// proceed to question 2
const question2 = () => {
    symptoms1.addEventListener('submit', e => {
        e.preventDefault();
        const answer1 = symptoms1.question1.value;
        if (answer1 === 'yes') {
            symptoms1.remove();
            question.textContent = 'Please include the symptoms you are experiencing.';
            symptoms2.innerHTML = questionTwoHTML;
            question3();
        } else {
            question.remove();
            symptoms1.remove();
            noSymptoms.innerHTML = noSymptomsHTML;
        }
    })
};

// proceed to question 3
const question3 = () => {
    symptoms2.addEventListener('submit', e => {
        e.preventDefault();
        const answers = symptoms2.querySelectorAll('.question2');
        answers.forEach(answer => {
            if (answer.checked & answer.value !== 'none') {
                question.remove();
                symptoms2.remove();
                testingRecommended();
                return false;
            }
        })
        symptoms2.remove();
        question.textContent = 'Please check any of the following symptoms you are experiencing.';
        symptoms3.innerHTML = questionThreeHTML;
        question4();
    })
}

// proceed to question 4
const question4 = () => {
    symptoms3.addEventListener('submit', e => {
        e.preventDefault();
        const answers = symptoms3.querySelectorAll('.question3');
        let total = 0;
        answers.forEach(answer => {
            if (answer.checked && answer.value !== 'none') { total++ }
        });
        console.log(total);
    })
}

// testing recommended
const testingRecommended = () => {
    testing.innerHTML = 'testing is recommended!'
}