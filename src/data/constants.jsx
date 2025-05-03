const aboutMe = {
    description: [
        'Hello 🌎',
        'I\'m a software developer from San Diego, California, passionate about building scalable, user-friendly applications. With experience in python, JavaScript, React, and backend development, I enjoy tackling complex problems and turning ideas into reality.',
        'My journey started with an internship at Scion Production, where I worked as an intern doing data analysis in Python. I also had the privilege to intern at Welfie, where I worked on integrating OpenAI API\'s into a Moodle LMS, automated unit testing, and developed course-generation tools.',
        'I\'m always exploring AI, Cloud computing, and Full-stack development, aiming to craft intuitive solutions that make a difference.',
        'Let\'s connect! I\'m open to collaborations, job opportunities, and tech discussions.'
    ]
}

const jobDescription1 = {
    name: 'Developer | Scion Productions',
    date: '10/2024 - Current',
    description: [
        'Developed Python scripts to analyze millions of lines of historical Bitcoin data using various backtesting strategies.',
        'Compared strategy performance to identify profitable trends and optimize outcomes.',
        'Built a mock web application for real-time strategy testing with a user-friendly interface.',
        'Integrated user parameter inputs and real-time result visualization.'
    ],
    skills: [
        'Python',
        'Numpy',
        'Pandas',
        'CCXT',
        'Javascript',
        'NodeJS',
        'Bootstrap'
    ]
}

const jobDescription2 = {
    name: 'Fullstack Intern | Welfie',
    date: '10/2024 - Current',
    description: [
        'Led development of custom Moodle LMS plugins powered by LLMs for dynamic course and content generation.',
        'Built frontend test scripts with 95% coverage using Python and Selenium, enhancing QA efficiency.',
        'Set up GCE and Docker environments, laying groundwork for CI/CD pipeline integration.'
    ],
    skills: [
        'Python',
        'PHP',
        'unittest',
        'Selenium',
        'Bootstrap',
        'Docker',
        'PostgreSQL',
        'Apache2',
        'GCE',
        'Moodle'
    ]
}

const jobDescription3 = {
    name: 'Fullstack Intern | Welfie',
    date: '10/2024 - Current',
    description: [
        'Led development of custom Moodle LMS plugins powered by LLMs for dynamic course and content generation.',
        'Built frontend test scripts with 95% coverage using Python and Selenium, enhancing QA efficiency.',
        'Set up GCE and Docker environments, laying groundwork for CI/CD pipeline integration.'
    ],
    skills: [
        'Python',
        'PHP',
        'unittest',
        'Selenium',
        'Bootstrap',
        'Docker',
        'PostgreSQL',
        'Apache2',
        'GCE',
        'Moodle'
    ]
}

const jobDescription4 = {
    name: 'Fullstack Intern | Welfie',
    date: '10/2024 - Current',
    description: [
        'Led development of custom Moodle LMS plugins powered by LLMs for dynamic course and content generation.',
        'Built frontend test scripts with 95% coverage using Python and Selenium, enhancing QA efficiency.',
        'Set up GCE and Docker environments, laying groundwork for CI/CD pipeline integration.'
    ],
    skills: [
        'Python',
        'PHP',
        'unittest',
        'Selenium',
        'Bootstrap',
        'Docker',
        'PostgreSQL',
        'Apache2',
        'GCE',
        'Moodle'
    ]
}

const jobDescription5 = {
    description: [

    ],
    skills: [

    ]
}

const education1 = {
    name: '',
    date: '',
    subject: '',
    description: ''
}

const jobs = [
    jobDescription1,
    jobDescription2,
    // jobDescription3,
    // jobDescription4
]

const contentNav = [
    {
        sectionName: 'About me',
        name: 'about'
    },
    {
        sectionName: 'Experiences',
        name: 'experience'
    },
    {
        sectionName: 'Education',
        name: 'education'
    },
    {
        sectionName: 'Projects',
        name: 'projects'
    },
    {
        sectionName: 'Add. Links',
        name: 'links'
    }
]

const linkedIn = {
    name: 'Linked In',
    link: ''
}

const github = {
    name: 'github',
    link: ''
}

const email = {
    name: 'email',
    link: ''
}

const socialMedias = [
    linkedIn,
    github,
    email
]

const gridSizes = {
    aboutMe: 8,
    workExp: 10,
    jobCard: 8
}

export { socialMedias, aboutMe, gridSizes, jobDescription1, jobDescription2, jobs, education1, contentNav }