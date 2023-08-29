const skills = [
    { id: 24421, skill: 'Express.js', description: 'Can create express apps using RESTful routing to enable full CRUD capabilities.', url: 'https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg' },
    { id: 49785, skill: 'DOM Manipulation', description: 'Can select and manipulate DOM elements using JavaScript to render beautiful web applications.', url: 'https://www.freecodecamp.org/news/content/images/2022/07/jsdom.png' },
    { id: 81354, skill: 'CSS and HTML', description: 'Can effectively use CSS and HTML to create aesthetically pleasing layouts and stylings.', url: 'https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png' },
    { id: 49260, skill: 'Problem Solving', description: 'Ability to analyze complex problems, identify root causes, and propose effective and creative solutions.', url: 'https://miro.medium.com/v2/resize:fit:2000/1*88Si3_5QAE_T-LZOTzQgeg.png' }
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}