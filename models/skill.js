const skills = [
    { id: 24421, skill: 'Express.js', description: 'Can create express apps using RESTful routing to enable full CRUD capabilities.' },
    { id: 49785, skill: 'DOM Manipulation', description: 'Can select and manipulate DOM elements using JavaScript to render beautiful web applications.' },
    { id: 81354, skill: 'CSS and HTML', description: 'Can effectively use CSS and HTML to create aesthetically pleasing layouts and stylings.' },
    { id: 49260, skill: 'Problem Solving', description: 'Ability to analyze complex problems, identify root causes, and propose effective and creative solutions.' }
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