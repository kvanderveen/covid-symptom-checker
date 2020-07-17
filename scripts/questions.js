questionOneHTML = `
    <div class="form-check">
        <input class="form-check-input" type="radio" name="question1" id="question-1-yes" value="yes" checked>
        <label class="form-check-label" for="question-1-yes">
            Yes
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="question1" id="question-1-no" value="no">
        <label class="form-check-label" for="question-1-no">
            No
        </label>
    </div>
    <button class="question-1 btn btn-primary btn-lg my-3" type="submit">Submit</button>
`;

questionTwoHTML = `
    <div class="form-check">
        <input class="form-check-input question2" type="checkbox" value="fever" id="fever">
        <label class="form-check-label" for="fever">
            fever over 100&deg;F or chills
        </label>
    </div>
        <div class="form-check">
        <input class="form-check-input question2" type="checkbox" value="cough" id="cough">
        <label class="form-check-label" for="cough">
            cough
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input question2" type="checkbox" value="sob" id="sob">
        <label class="form-check-label" for="sob">
            shortness of breath or difficulty breathing
        </label>
    </div>
        <div class="form-check">
        <input class="form-check-input question2" type="checkbox" value="smell" id="smell">
        <label class="form-check-label" for="smell">
            new loss of taste or smell
        </label>
    </div> 
    </div>
        <div class="form-check">
        <input class="form-check-input question2" type="checkbox" value="none" id="none">
        <label class="form-check-label" for="none">
            none of the above
        </label>
    </div> 
    <button class="question-1 btn btn-primary btn-lg my-3" type="submit">Submit</button>   
`;

questionThreeHTML = `
    <div class="form-check">
        <input class="form-check-input question3" type="checkbox" value="fatigue" id="fatigue">
        <label class="form-check-label" for="fatigue">
            severe fatigue
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input question3" type="checkbox" value="aches" id="aches">
        <label class="form-check-label" for="aches">
            muscle or body aches
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input question3" type="checkbox" value="headache" id="headache">
        <label class="form-check-label" for="headache">
            headache
        </label>
    </div>
        <div class="form-check">
        <input class="form-check-input question3" type="checkbox" value="sore-throat" id="sore-throat">
        <label class="form-check-label" for="sore-throat">
            sore throat
        </label>
    </div> 
    </div>
        <div class="form-check">
        <input class="form-check-input question2" type="checkbox" value="congestion" id="congestion">
        <label class="form-check-label" for="congestion">
            nasal congestion or a runny nose
        </label>
    </div> 
    </div>
        <div class="form-check">
        <input class="form-check-input question2" type="checkbox" value="vomiting" id="vomiting">
        <label class="form-check-label" for="vomiting">
            vomiting or diarrhea
        </label>
    </div>
    </div>
        <div class="form-check">
        <input class="form-check-input question2" type="checkbox" value="none" id="none">
        <label class="form-check-label" for="none">
            none of the above
        </label>
    </div>
    <button class="question-1 btn btn-primary btn-lg my-3" type="submit">Submit</button>   
`;

noSymptomsHTML = `
    In the absence of symptoms, testing is not currently recommended.  If you believe you have
    come in close contact with someone with a COVID-19 infection, then you should 
    <a href="https://covid19.colorado.gov/how-to-quarantine" target="_blank">quarantine</a> 
    for 14 days from the last date of contact with that individual.
`