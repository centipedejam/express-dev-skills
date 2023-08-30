const skills = [
    { id: 244215, skill: 'Express.js', description: 'Can create express apps using RESTful routing to enable full CRUD capabilities.', url: 'https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg' },
    { id: 497853, skill: 'DOM Manipulation', description: 'Can select and manipulate DOM elements using JavaScript to render beautiful web applications.', url: 'https://www.freecodecamp.org/news/content/images/2022/07/jsdom.png' },
    { id: 813542, skill: 'CSS and HTML', description: 'Can effectively use CSS and HTML to create aesthetically pleasing layouts and stylings.', url: 'https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png' },
    { id: 492601, skill: 'Problem Solving', description: 'Ability to analyze complex problems, identify root causes, and propose effective and creative solutions.', url: 'https://miro.medium.com/v2/resize:fit:2000/1*88Si3_5QAE_T-LZOTzQgeg.png' }
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}