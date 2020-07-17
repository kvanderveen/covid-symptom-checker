symptomsYesOrNo = `
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

majorSymptoms = `
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

minorSymptoms = `
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

noSymptomsHTML = `
    In the absence of symptoms or symptoms suggestive of covid-19, testing is 
    not currently recommended.  If you believe you have come in close contact
    with someone with a COVID-19 infection, then you should 
    <a href="https://covid19.colorado.gov/how-to-quarantine" target="_blank">
    quarantine</a> for 14 days from the last date of contact with that 
    individual.
`;

symptomsHTML = `
    Based upon your reported symptoms, testing is recommended.  Testing is 
    currenty being performed at these 
    <a href="https://search.211colorado.org/search?terms=COVID-19%20Testing&page=1&location=Colorado&service_area=colorado" target="_blank">
    sites</a>.
`