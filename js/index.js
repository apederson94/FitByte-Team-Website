let sponsorTab = document.getElementById('sponsorTab')
let techTab = document.getElementById('techTab')
let aboutTabe = document.getElementById('infoTab')
let tabContent = document.getElementById('tabContent')

//TAB CONTENT FUNCTIONS

function sponsorTabHandler() {
    sponsorTab.classList.add('is-active')
    techTab.classList.remove('is-active')
    infoTab.classList.remove('is-active')

    tabContent.innerHTML = 
    `<div class="columns">
        <div class="column is-2">
            <img src="./imgs/not_team/winfree.png">
        </div>
        <div class="column">
            <div class="column">
                <h1 class="title is-2 underlined">Dr. Kyle Winfree</h1>
                <h1 class="subtitle is-5">
                    <b>Assistant Professor</b>
                    <br>
                    <b>Email:</b> <a href="mailto:kyle.winfree@nau.edu">kyle.winfree@nau.edu</a>
                    <br>
                    <b>Phone:</b> <a href="tel:1-928-523-7165">(928) 523-7165</a>
                    <br>
                    <b>Office:</b> 90-216
                </h1>
                <br>
                <h1 class="title is-4 underlined">About</h1>
                <h1 class="subtitle is-5">
                    Kyle Winfree’s research centers on the use of novel devices engineered for 
                    therapies and assessment. Specifically, he is interested in the design and 
                    performance of robotic interventions for therapy, remote assessment focussed 
                    outside of the lab, brain-computer interfaces, and the data analysis and algorithms 
                    associated with processing these systems.
                </h1>
                <br>
                <h1 class="title is-4 underlined">Education</h1>
                <h1 class="subtitle is-5">
                    <div class="content">
                        <ul type="1">
                            <li>
                                PhD, University of Delaware
                            </li>
                            <li>
                                MSE, University of Pennsylvania
                            </li>
                            <li>
                                BS, Northern Arizona University
                            </li>
                        </ul>
                    </div>
                </h1>
            </div>
        </div>
        <div class="column is-2">
            <img src="./imgs/not_team/dominick.jpg">
        </div>
        <div class="column">
            <div class="column">
                <h1 class="title is-2 underlined">Dr. Gregory Dominick</h1>
                <h1 class="subtitle is-5">
                    <b>Assistant Professor</b>
                    <br>
                    <b>Email:</b> <a href="mailto:gdominic@udel.edu">gdominic@udel.edu</a>
                    <br>
                    <b>Phone:</b> <a href="tel:1-302-831-3672">(302) 831-3672</a>
                    <br>
                    <b>Office:</b> 012 Carpenter Sports Bldg.
                </h1>
                <br>
                <h1 class="title is-4 underlined">About</h1>
                <h1 class="subtitle is-5">
                    Gregory Dominick's research centers of the physical health and activity.
                    Specifically, he is interested in health literacy and health promotion, 
                    physical activity in youth, psychosocial and environmental determinants of
                    physical activity, cancer screening and cancer prevention, and program evaluation.
                </h1>
                <br>
                <h1 class="title is-4 underlined">Education</h1>
                <h1 class="subtitle is-5">
                    <div class="content">
                        <ul type="1">
                            <li>
                                PhD, University of South Carolina
                            </li>
                            <li>
                                MA, East Tennessee State University
                            </li>
                            <li>
                                BS, Lander University
                            </li>
                        </ul>
                    </div>
                </h1>
            </div>
        </div>
    </div>`
}

function techTabHandler() {
    techTab.classList.add('is-active')
    sponsorTab.classList.remove('is-active')
    infoTab.classList.remove('is-active')

    tabContent.innerHTML = 
        `<div class="column is-2">
                <img src="./imgs/not_team/fell.png">
            </div>
            <div class="column">
                <div class="column">
                    <h1 class="title is-2 underlined">Dr. Michael Fell</h1>
                    <h1 class="subtitle is-5">
                        <b>Research Associate</b>
                        <br>
                        <b>Email:</b> <a href="mailto:michael.fell@nau.edu">michael.fell@nau.edu</a>
                    </h1>
                    <br>
                    <h1 class="title is-4 underlined">About</h1>
                    <h1 class="subtitle is-5">
                        Mike received his PhD in Biology in the School of Life Sciences at Arizona 
                        State University in 2017, where he focused on combining large datasets and 
                        an individual-based model of tree growth to understand how plant functional 
                        traits affect tree growth and mortality. Currently he is working as Research 
                        Associate (“computing guru”) in the Ogle Lab. As a Research Associate in the 
                        Ogle Lab, Mike is assisting with a variety of projects involving development 
                        of large databases, Bayesian statistical modeling, parallel computing, and 
                        field and lab experiments.
                    </h1>
                    <br>
                    <h1 class="title is-4 underlined">Education</h1>
                    <h1 class="subtitle is-5">
                        <div class="content">
                            <ul type="1">
                                <li>
                                    PhD, Arizona State University
                                </li>
                            </ul>
                        </div>
                    </h1>
                </div>
            </div>`
        
}

function infoTabHandler() {
    sponsorTab.classList.remove('is-active')
    techTab.classList.remove('is-active')
    infoTab.classList.add('is-active')

    tabContent.innerHTML = 
    `<div class="column is-four-fifths is-offset-1">
        <h1 class="title underlined">What is FitByte?</h1>
        <h1 class="subtitle is-4">
            FitByte is an NAU capstone project being conducted over 2018-19 school year.
            Our end goal is to produce an API which can be accessed via authenticated requests.
            This API will tie into the WearWare system that is already in place at NAU.
            This will give researchers at NAU and University of Delaware access to 
            <a href="https://www.fitbit.com/home">FitBit</a> data more freely and easily.
        </h1>
    </div>`
}

//MEMBER CONTENT FUNCTIONS

sponsorTab.addEventListener('click', sponsorTabHandler)
techTab.addEventListener('click', techTabHandler)
infoTab.addEventListener('click', infoTabHandler)