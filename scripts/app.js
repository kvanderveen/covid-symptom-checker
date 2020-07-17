const question = document.querySelector('.question');
const form = document.querySelector('.form');
const recommendation = document.querySelector('.recommendation');
const coloradoData = document.querySelector('.colorado-data');


function start() {
    question.innerHTML = currentlyHavingSymptoms;
    form.innerHTML = yesOrNo;
    const formYesOrNo = document.querySelector('.yes-or-no');
    formYesOrNo.addEventListener('submit', e => {
        e.preventDefault();
        if (formYesOrNo.question.value === 'no') {
            question.classList.add('no-current-symptoms');
            funcTestedPositiveBefore()
        } else {
            funcMajorSymptoms();
        };
    });
}

function funcTestedPositiveBefore() {
    question.innerHTML = questionPreviousPositiveTest;
    form.innerHTML = yesOrNo;
    const formYesOrNo = document.querySelector('.yes-or-no');
    formYesOrNo.addEventListener('submit', e => {
        e.preventDefault();
        if (formYesOrNo.question.value === 'no') {
            funcMajorSymptoms();
        } else {
            funcWhenWasPositiveTest();
        };
    });
}

function funcWhenWasPositiveTest() {
    question.innerHTML = questionWhenWasPositiveTest;
    form.innerHTML = yesOrNo;
    const formYesOrNo = document.querySelector('.yes-or-no');
    formYesOrNo.addEventListener('submit', e => {
        e.preventDefault();
        if (formYesOrNo.question.value === 'no') {
            question.classList.add('recent-positive-test');
        };
        testingRecommended();
    });
}

function funcMajorSymptoms() {
    if (question.classList.contains('no-current-symptoms')) {
        question.innerHTML = questionWithOutCurrentSymptoms;
    } else {
        question.innerHTML = questionWithCurrentSymptoms;
    }
    form.innerHTML = majorSymptoms;
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
        if (total > 0) {
            if (question.classList.contains('no-current-symptoms')) {
                funcRecentSymptoms();
            } else {
                testingRecommended();
            }
        } else {
            funcMinorSymptoms();
        }
    })
}

function funcMinorSymptoms() {
    form.innerHTML = minorSymptoms;
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
        if (total > 1) {
            if (question.classList.contains('no-current-symptoms')) {
                funcRecentSymptoms();
            } else {
                testingRecommended();
            }
        } else {
            noTestingRecommended();
        }
    })
}

function funcRecentSymptoms() {
    question.innerHTML = questionRecentSymptoms;
    form.innerHTML = yesOrNo;
    const formYesOrNo = document.querySelector('.yes-or-no');
    formYesOrNo.addEventListener('submit', e => {
        e.preventDefault();
        if (formYesOrNo.question.value === 'no') {
            question.classList.add('recent-symptoms');
        };
        testingRecommended();
    });
}

function testingRecommended() {
    if (question.classList.contains('recent-symptoms')) {
        recommendation.innerHTML = futureAntibodyTestingHTML2;
    } else if (question.classList.contains('recent-positive-test')) {
        recommendation.innerHTML = futureAntibodyTestingHTML1;
    } else if (question.classList.contains('no-current-symptoms')) {
        recommendation.innerHTML = antibodyTestingHTML;
    } else {
        recommendation.innerHTML = viralTestingHTML;
    }
    question.remove();
    form.remove();
    coloradoData.innerHTML = linkToDataHTML;
};

function noTestingRecommended() {
    question.remove();
    form.remove();
    recommendation.innerHTML = noTestingHTML;
    coloradoData.innerHTML = linkToDataHTML;
}

start();
