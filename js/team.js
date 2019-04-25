let jake = document.getElementById('jake')
let jacob = document.getElementById('jacob')
let austin = document.getElementById('austin')
let memberContent = document.getElementById('memberContent')

function jakeHandler() {
    let jake = document.getElementById('jake')
    let jacob = document.getElementById('jacob')
    let austin = document.getElementById('austin')
    let memberContent = document.getElementById('memberContent')
    jake.classList.add('is-active')
    jacob.classList.remove('is-active')
    austin.classList.remove('is-active')

    memberContent.classList.add('box')
    memberContent.innerHTML = 
    `<div class="columns">
        <div id="teamImgContainer" class="column">
            <img src="./imgs/team/jake.jpg" class="teamImg">
        </div>
        <div id="teamMemberInfo" class="column is-9">
            <h1 class="title is-2 underlined">
                Jake Farrar
            </h1>
            <h1 class="subtitle is-5">
                Major: Computer Science
                <br>
                Hometown: Phoenix, AZ
            </h1>
            <br>
            <h1 class="title is-4 underlined">
                Education:
            </h1>
            <h1 class="subtitle is-5">
                I attend Sunnyslope High School and graduated in 2015 with a 3.7 GPA. 
                I am a Senior at NAU where I have taken classes which include Software Engineering, 
                Databases and Operating Systems.
            </h1>
            <br>
            <h1 class="title is-4 underlined">
                Work Experience:
            </h1>
            <h1 class="subtitle is-5">
                Freelance coding on a web application for a company in California. 
                I was tasked with creating a portal for users to log onto and communicate with a database. 
                I was also tasked with developing a plan for user testing of the application.
            </h1>
            <br>
            <h1 class="title is-4 underlined">
                Skills:
            </h1>
            <div class="content">
                <ul>
                    <li>
                        <a class="subtitle is-5">
                            Web App design, Summer freelance work for a startup company. This included the use of ionic, Github and Amazon Web Services
                        </a>
                    </li>
                    <li>
                        <a class="subtitle is-5">
                            Mobile App development, created a mobile app for software engineering and I am currently enrolled in Mobile Apps.
                        </a>
                    </li>
                    <li>
                        <a class="subtitle is-5">
                            Understand the theory of computation, excelled with A’s in Automata theory and Algorithms.
                        </a>
                    </li>
                    <li>
                        <a class="subtitle is-5">
                            General knowledge in some languages which include Java, SQL, Python, HTML, Javascript and C. This is from the general course work of NAU.
                        </a>
                    </li>
                </ul>
            </div>
            <br>
            <h1 class="title is-4 underlined">
                Other Interests:
            </h1>
            <h1 class="subtitle is-5">
                I enjoy playing video games on my computer. I competed in sports my entire life and currently participate in many intramural sports. 
                I have recently taken an interest in disc golf. I am currently the secretary of my fraternity, Sigma Pi.
            </h1>
        </div>
    </div>`
}

function jacobHandler() {
    let jake = document.getElementById('jake')
    let jacob = document.getElementById('jacob')
    let austin = document.getElementById('austin')
    let memberContent = document.getElementById('memberContent')
    jacob.classList.add('is-active')
    jake.classList.remove('is-active')
    austin.classList.remove('is-active')

    memberContent.classList.add('box')
    memberContent.innerHTML = 
    `<div class="columns">
        <div id="teamImgContainer" class="column">
            <img src="./imgs/team/jacob.jpg" class="teamImg">
        </div>
        <div id="teamMemberInfo" class="column is-9">
            <h1 class="title is-2 underlined">
                Jacob Lemon
            </h1>
            <h1 class="subtitle is-5">
                Major: Computer Science
                <br>
                Hometown: Gilbert, AZ
            </h1>
            <br>
            <h1 class="title is-4 underlined">
                Education:
            </h1>
            <h1 class="subtitle is-5">
                I graduated from Gilbert High School in 2014. 
                Since then, I have only been enrolled at Northern Arizona University. 
                I have taken Mobile Applications, Software Engineering, and Operating Systems at NAU.
            </h1>
            <br>
            <h1 class="title is-4 underlined">
                Work Experience:
            </h1>
            <h1 class="subtitle is-5">
                I worked at Apriva, a software company in Scottsdale, that provides secure wireless payment gateways. 
                I was tasked with automating their manual test suites on their Android and iOS app. 
                I also wrote some automated tests for one of their websites.
            </h1>
            <br>
            <h1 class="title is-4 underlined">
                Skills:
            </h1>
            <div class="content">
                <ul>
                    <li>
                        <a class="subtitle is-5">
                            Comfortable working with C/C++, C#, java, python, and XCode. I gained this experience from my classes at NAU and while writing automated tests at Apriva. 
                        </a>
                    </li>
                    <li>
                        <a class="subtitle is-5">
                            Familiar with iterative development and Agile methodologies from working on a software development team at Apriva.
                        </a>
                    </li>
                </ul>
            </div>
            <br>
            <h1 class="title is-4 underlined">
                Other Interests:
            </h1>
            <h1 class="subtitle is-5">
                I have a general interest in maintaining a healthy lifestyle. 
                I enjoy working out and outdoor activities when I have the time. 
                I am passionate about mobile development and I want to be able to write my own applications in the future.
            </h1>
        </div>
    </div>`
}

function austinHandler() {
    let jake = document.getElementById('jake')
    let jacob = document.getElementById('jacob')
    let austin = document.getElementById('austin')
    let memberContent = document.getElementById('memberContent')
    austin.classList.add('is-active')
    jacob.classList.remove('is-active')
    jake.classList.remove('is-active')

    memberContent.classList.add('box')
    memberContent.innerHTML = 
    `<div class="columns">
        <div id="teamImgContainer" class="column">
            <img src="./imgs/team/ampimg.jpg" class="teamImg">
        </div>
        <div id="teamMemberInfo" class="column is-9">
            <h1 class="title is-2 underlined">
                Austin Pederson
            </h1>
            <h1 class="subtitle is-5">
                Major: Computer Science
                <br>
                Hometown: Friday Harbor, WA
            </h1>
            <br>
            <h1 class="title is-4 underlined">
                Education:
            </h1>
            <h1 class="subtitle is-5">
                I graduated from Friday Harbor High School in 2013. 
                I then attended Whatcom Community College in Bellingham, WA. 
                In 2016, I completed my AA and other necessary coursework in order to transfer directly to Western Washington University in Bellingham, WA. 
                I attended Western Washington University for 1 year before moving to Flagstaff, Arizona in 2017 to attend Northern Arizona University.

            </h1>
            <br>
            <h1 class="title is-4 underlined">
                Work Experience:
            </h1>
            <h1 class="subtitle is-5">
                Internship at Avalanche eVantage (3 years). 
                Hourly developer where I built Android, iOS, and web apps as well as learned to use Amazon Web Services, GitHub, etc.
            </h1>
            <br>
            <h1 class="title is-4 underlined">
                Skills:
            </h1>
            <div class="content">
                <ul>
                    <li>
                        <a class="subtitle is-5">
                            Self-teaching of new frameworks, languages, etc. I have taught myself Swift, Java, C, JavaScript, and proprietary languages as well as web frameworks like React
                        </a>
                    </li>
                    <li>
                        <a class="subtitle is-5">
                        Flexibility. I have had to change course many times and drop projects to work on higher priority tasks
                        </a>
                    </li>
                </ul>
            </div>
            <br>
            <h1 class="title is-4 underlined">
                Other Interests:
            </h1>
            <h1 class="subtitle is-5">
                I enjoy going on hikes and finding good restaurants to eat at. 
                I also enjoy video games and playing with my cats. 
                I look forward to the future where I plan on travelling the world and living my life to the fullest.
            </h1>
        </div>
    </div>`
}

jake.addEventListener('click', jakeHandler)
jacob.addEventListener('click', jacobHandler)
austin.addEventListener('click', austinHandler)