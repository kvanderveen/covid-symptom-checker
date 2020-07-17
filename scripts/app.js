const question = document.querySelector('.question');
const form = document.querySelector('.form');
const recommendation = document.querySelector('.recommendation');


function funcYesOrNo() {
    question.textContent = 'Are you having any symptoms?';
    form.innerHTML = symptomsYesOrNo;
    const formYesOrNo = document.querySelector('.yes-or-no');
    formYesOrNo.addEventListener('submit', e => {
        e.preventDefault();
        if (formYesOrNo.question.value === 'no') {
            question.remove();
            form.remove();
            recommendation.innerHTML = noSymptomsHTML;
        } else {
            question.textContent = 'Check any of the following symptoms you are having.';
            form.innerHTML = majorSymptoms;
            funcMajorSymptoms();
        }
    });
}

function funcMajorSymptoms() {
    const formMajorSymptoms = document.querySelector('.major-symptoms');
    formMajorSymptoms.addEventListener('submit', e => {
        e.preventDefault();
        const answers = formMajorSymptoms.querySelectorAll('input');
        let total = 0;
        answers.forEach(answer => {
            if (answer.checked & answer.value !== 'none') {
                total++;
            }
        });
        if (total > 0){
            question.remove();
            form.remove();
            recommendation.innerHTML = symptomsHTML;
        } else {
            form.innerHTML = minorSymptoms;
            funcMinorSymptoms();
        }
    })
}

function funcMinorSymptoms() {
    const formMinorSymptoms = document.querySelector('.minor-symptoms');
    formMinorSymptoms.addEventListener('submit', e => {
        e.preventDefault();
        const answers = formMinorSymptoms.querySelectorAll('input');
        let total = 0;
        answers.forEach(answer => {
            if (answer.checked & answer.value !== 'none') {
                total++;
            }
        });
        question.remove();
        form.remove();
        if (total > 1){
            recommendation.innerHTML = symptomsHTML;
        } else {
            form.innerHTML = minorSymptoms;
            recommendation.innerHTML = noSymptomsHTML;
        }
    })
}

funcYesOrNo();
