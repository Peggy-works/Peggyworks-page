import { Box, Container, Typography, Button, Card, Divider, Collapse, Avatar, Badge, Stack, Chip } from '@mui/material'
const name = 'Angel Samora'
const pronoun = 'He/Him/They'
const age = '28'

const aboutMe = {
    description: [
        'Hello 🌎',
        'I\'m a software developer from San Diego, California, passionate about building scalable, user-friendly applications. With experience in python, JavaScript, React, and backend development, I enjoy tackling complex problems and turning ideas into reality.',
        'My journey started with an internship at Scion Production, where I worked as an intern doing data analysis in Python. I also had the privilege to intern at Welfie, where I worked on integrating OpenAI API\'s into a Moodle LMS, automated unit testing, and developed course-generation tools.',
        'I\'m always exploring AI, Cloud computing, and Full-stack development, aiming to craft intuitive solutions that make a difference.',
        'Let\'s connect! I\'m open to collaborations, job opportunities, and tech discussions.'
    ]
} 

const aboutMeParts = (profileImage) => [
    {
        name, 
        snippet: (
            <Typography variant='h3' sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>
                Angel Samora
            </Typography>
        )
    },
    {
        pronoun,
        snippet: (
            <Typography sx={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', color: '#cfcfcf', pb: 2 }}>
                He/Him/They, 23
            </Typography>
        )
    },
    {
        age,
        snippet: (
            <Avatar alt='Angel Samora' src={profileImage} sx={{ width: 200, height: 200}} /> 
        )
    }
]

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
    jobDescription3,
    jobDescription4
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
    link: 'https://www.linkedin.com/in/angel-samora-6a912b1b5/'
}

const github = {
    name: 'github',
    link: 'https://github.com/Peggy-works'
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

const project1 = {
    'stars': 1,
    'primaryLanguage': 'Typescript + NodeJS',
    'title': 'AutoGrader',
    'link': 'https://github.com/tbellicha/AutoGrader',
    'desc': 'A simple two-column portfolio template that is easy and quick to customizefor your own purposes. Mobile friendly.',
}

const project2 = {
    'stars': 1,
    'primaryLanguage': 'Kotlin',
    'title': 'MovInsight',
    'link': 'https://github.com/RaigZ/MovInsight',
    'desc': 'Android app that searches and showcases through movie content and has users add or delete movies from their own watchlist', 
}

const project3 = {
    'stars': 2,
    'primaryLanguage': 'Javascript + Java',
    'title': 'Gettr',
    'link': 'https://github.com/Peggy-works/GettrProject',
    'desc': 'A forum web application where users can interact and communicate with one another on projects and ideas they may have. What makes Gettr different from other web application forums is that it is specifically tailored towards California State University San Marcos (CSUSM) students and faculty.',
}

const project4 = {
    'stars': 2,
    'primaryLanguage': 'PHP, HTML, CSS, JS',
    'title': 'Blog',
    'link': 'https://github.com/RaigZ/blog',
    'desc': 'A simple blog web app made with Bootstrap and preserves user sessions, contains users, posts and comments',
} 

const projects = [
    project1,
    project2,
    project3,
    project4
]

export { socialMedias, aboutMe, aboutMeParts, gridSizes, jobDescription1, jobDescription2, jobs, education1, contentNav, projects, linkedIn, github, email }