const currentlyHavingSymptoms = `
    Are you <span class="font-weight-bold font-italic">currently</span> having symptoms?
`;

const questionPreviousPositiveTest = `
    Have you previously tested positive for COVID-19?
`;

const questionWhenWasPositiveTest = `
    Was your positive test more than 2 months ago?
`;

const questionWithCurrentSymptoms = `
    Check any below that describe the current symptoms you are having.
`;

const questionWithOutCurrentSymptoms = `
    Check any of the following symptoms you have had since February 1, 2020.
`;

const questionRecentSymptoms = `
    Did your symptoms resolve 14 or more days ago?
`;


const yesOrNo = `
    <form class="yes-or-no">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="question" id="question-1-yes" value="yes" checked>
            <label class="form-check-label" for="question-1-yes">
                Yes
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="question" id="question-1-no" value="no">
            <label class="form-check-label" for="question-1-no">
                No
            </label>
        </div>
        <button class="btn btn-primary btn-lg my-3" type="submit">Submit</button>
    </form>    
`;

const majorSymptoms = `
    <form class="major-symptoms">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="fever" id="fever">
            <label class="form-check-label" for="fever">
                fever over 100&deg;F or chills
            </label>
        </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="cough" id="cough">
            <label class="form-check-label" for="cough">
                cough
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="sob" id="sob">
            <label class="form-check-label" for="sob">
                shortness of breath or difficulty breathing
            </label>
        </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="smell" id="smell">
            <label class="form-check-label" for="smell">
                new loss of taste or smell
            </label>
        </div> 
        </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="none" id="none">
            <label class="form-check-label" for="none">
                none of the above
            </label>
        </div> 
        <button class="question-1 btn btn-primary btn-lg my-3" type="submit">Submit</button>
    </form>       
`;

const minorSymptoms = `
    <form class="minor-symptoms">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="fatigue" id="fatigue">
            <label class="form-check-label" for="fatigue">
                severe fatigue
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="aches" id="aches">
            <label class="form-check-label" for="aches">
                muscle or body aches
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="headache" id="headache">
            <label class="form-check-label" for="headache">
                headache
            </label>
        </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="sore-throat" id="sore-throat">
            <label class="form-check-label" for="sore-throat">
                sore throat
            </label>
        </div> 
        </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="congestion" id="congestion">
            <label class="form-check-label" for="congestion">
                nasal congestion or a runny nose
            </label>
        </div> 
        </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="vomiting" id="vomiting">
            <label class="form-check-label" for="vomiting">
                vomiting or diarrhea
            </label>
        </div>
        </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="none" id="none">
            <label class="form-check-label" for="none">
                none of the above
            </label>
        </div>
        <button class="question-1 btn btn-primary btn-lg my-3" type="submit">Submit</button> 
    </form>      
`;

const noTestingHTML = `
    In the absence of symptoms suggestive of covid-19 or a previous positive 
    <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html" target="_blank">
    viral</a>  
    COVID-19 test, no testing is currently recommended.  If you believe you 
    have come in close contact with someone with a COVID-19 infection, then 
    you should 
    <a href="https://covid19.colorado.gov/how-to-quarantine" target="_blank">
    quarantine</a> for 14 days from the last date of contact with that 
    individual.
`;

const viralTestingHTML = `
    Based upon your reported symptoms, 
    <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html" target="_blank">
    viral</a> testing is recommended.  Testing is 
    currently being performed at these 
    <a href="https://search.211colorado.org/search?terms=COVID-19%20Testing&page=1&location=Colorado&service_area=colorado" target="_blank">
    sites</a>.
`;

const antibodyTestingHTML = `
    Based upon your history,
    <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/serology-overview.html" target="_blank">
    antibody</a> testing may be considered. The presence of antibodies 
    suggests one had a past infection with the virus that causes COVID-19. 
    However, whether an antibody test is positive or negative, you should
    still take preventative measures to protect yourself and others.  It is 
    not currently known if people who recover from COVID-19 can get infected
    again.
`;

const futureAntibodyTestingHTML1 = `
    Based upon your history,
    <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/serology-overview.html" target="_blank">
    antibody</a> testing may be considered 
    <span class="font-weight-bold font-italic"> no sooner than 2 months from 
    the date of your positive COVID-19 viral test</span>. The presence of 
    antibodies suggests one had a past infection with the virus that causes 
    COVID-19. However, whether an antibody test is positive or negative, 
    you should still take preventative measures to protect yourself and 
    others.  It is not currently known if people who recover from 
    COVID-19 can get infected again.
`;

const futureAntibodyTestingHTML2 = `
    Based upon your history,
    <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/serology-overview.html" target="_blank">
    antibody</a> testing may be considered 
    <span class="font-weight-bold font-italic"> no sooner than 14 days from 
    the resolution of your symptoms</span>. The presence of 
    antibodies suggests one had a past infection with the virus that causes 
    COVID-19. However, whether an antibody test is positive or negative, 
    you should still take preventative measures to protect yourself and 
    others.  It is not currently known if people who recover from 
    COVID-19 can get infected again.
`;

const linkToDataHTML = `
    <p class="my-4">
        If you'd like to see hospitalization data in Colorado, click the 
        button below.
    </p>
    <a href="data.html" class="btn btn-primary btn-lg" role="button">Colorado Data</a>
`;